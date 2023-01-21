import HeroBanner from '../../components/hero-banner/hero-banner.component';
import { Fragment } from 'react';

import CategoriesContainer from '../../components/categories-container/categories-container.component';

const HomePage = () => {
  const categories = [
    {
      id: 1,
      title: 'Red',
      imageUrl:
        'http://localhost:3000/static/media/red.67738b7d126de39e2fdd.png',
    },
    {
      id: 2,
      title: 'White',
      imageUrl:
        'http://localhost:3000/static/media/white.a9168921cd17b703ea0e.png',
    },
    {
      id: 3,
      title: 'Rosé',
      imageUrl:
        'http://localhost:3000/static/media/rose.a18f20c365964ef5c0d6.png',
    },
    {
      id: 4,
      title: 'Bubbles',
      imageUrl:
        'http://localhost:3000/static/media/bubbles.bc070158c112cffce905.png',
    },
    {
      id: 5,
      title: 'Specials',
      imageUrl:
        'http://localhost:3000/static/media/special.9b6dcc0ea85c7a22a324.png',
    },
  ];
  return (
    <Fragment>
      <HeroBanner />
      <CategoriesContainer categories={categories} />
    </Fragment>
  );
};

export default HomePage;
