import React from 'react';

import { useParams, useNavigate } from 'react-router-dom';

import axios from 'axios';

const FullPizza: React.FC = () => {
  const [pizza, setPizza] = React.useState<{
    imageUrl: string,
    title: string,
    price: number
  }>();
  const { id } = useParams();
  const navigate = useNavigate();

  React.useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get(
          `https://628e3745a339dfef87a9e817.mockapi.io/items/${id}`
        );
        setPizza(data);
      } catch (error) {
        console.error('При попытке получить пиццу возникла ошибка', error);
        alert(
          'При попытке получить пиццу возникла ошибка, вы будете перенапралены на главную'
        );
        navigate('/');
      }
    }

    fetchPizza();
  }, []);

  if (!pizza) {
    return <div className="container">Загрузка...</div>;
  }

  return (
    <div className="container">
      <img src={pizza.imageUrl} alt={pizza.title} />
      <h2>{pizza.title}</h2>
      <h4>{pizza.price} ₽</h4>
    </div>
  );
};

export default FullPizza;
