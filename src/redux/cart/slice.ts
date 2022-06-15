import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {CartItem} from './types';
import { calcTotalPrice } from '../../utils/calcTotalPrice';
import { getCartFromLS } from '../../utils/getCartFromLS';
import { CartSliceState } from './types';

const {items, totalPrice} = getCartFromLS()

const initialState: CartSliceState = {
  totalPrice,
  items
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<CartItem>) {
      const findItem = state.items.find(obj => obj.id === action.payload.id)
      if (findItem) {
        findItem.count++
      } else {
        state.items.push({...action.payload, count: 1})
      }

      state.totalPrice = calcTotalPrice(state.items)
    },
    removeItem(state, action: PayloadAction<string>) {
      state.items = state.items.filter(obj => obj.id !== action.payload)
    },
    minusItem(state, action: PayloadAction<string>) {
      const findItem = state.items.find(obj => obj.id === action.payload)
      if (findItem) findItem.count--
    },
    cleareItems(state) {
      state.items = []
      state.totalPrice = 0
    }
  },
})


export const { addItem, removeItem, minusItem, cleareItems } = cartSlice.actions

export default cartSlice.reducer