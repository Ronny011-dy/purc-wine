import HeroBanner from '../../components/hero-banner/hero-banner.component';
import { Fragment } from 'react';

import CategoriesContainer from '../../components/categories-container/categories-container.component';

import redWine from '../../assets/red.png';
import whiteWine from '../../assets/white.png';
import roseWine from '../../assets/rose.png';
import bubbleWine from '../../assets/bubbles.png';
import specialWine from '../../assets/special.png';

const HomePage = () => {
  const categories = [
    {
      id: 1,
      title: 'Red',
      imageUrl: redWine,
    },
    {
      id: 2,
      title: 'White',
      imageUrl: whiteWine,
    },
    {
      id: 3,
      title: 'Rosé',
      imageUrl: roseWine,
    },
    {
      id: 4,
      title: 'Bubbles',
      imageUrl: bubbleWine,
    },
    {
      id: 5,
      title: 'Specials',
      imageUrl: specialWine,
    },
  ];
  return (
    <>
      <HeroBanner />
      <CategoriesContainer categories={categories} />
    </>
  );
};

export default HomePage;
