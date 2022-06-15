import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton: React.FC = () => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb">
    <circle cx="140" cy="140" r="140" />
    <rect x="1" y="300" rx="10" ry="10" width="280" height="28" />
    <rect x="0" y="350" rx="10" ry="10" width="280" height="90" />
    <rect x="0" y="460" rx="10" ry="10" width="95" height="30" />
    <rect x="135" y="461" rx="10" ry="10" width="145" height="30" />
  </ContentLoader>
);

export default Skeleton;
