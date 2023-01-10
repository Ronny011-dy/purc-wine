import CategoriesContainer from './components/categories-container/categories-container.component';

const App = () => {
  const categories = [
    {
      id: 1,
      title: 'Red',
      imageUrl:
        'https://vinero.hk/wp-content/uploads/2021/09/Purcari-Malbec-de-Purcari-6-x-750ml.jpg',
    },
    {
      id: 2,
      title: 'White',
      imageUrl:
        'https://vinero.hk/wp-content/uploads/2021/09/Purcari-Viorica-de-Purcari-6-x-750ml.jpg',
    },
    {
      id: 3,
      title: 'Rosé',
      imageUrl:
        'https://vinero.hk/wp-content/uploads/2021/09/Purcari-1827-Rose-6-x-750ml.jpg',
    },
    {
      id: 4,
      title: 'Bubbles',
      imageUrl:
        'https://vinero.hk/wp-content/uploads/2021/09/Cuvee-de-Purcari-Alb-Brut-Spumant-6-x-750ml.jpg',
    },
    {
      id: 5,
      title: 'Specials',
      imageUrl:
        'https://vinero.hk/wp-content/uploads/2021/09/Purcari-Vinohora-Feteasca-Neagra-Montepulciano-6-x-750ml.jpg',
    },
  ];
  return <CategoriesContainer categories={categories} />;
};

export default App;
