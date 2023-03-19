import './category-item.styles.scss';

const CategoryItem = ({ category }) => {
  const { imageUrl, title, id } = category;
  return (
    <div className={`category-container slot${id}`}>
      <div className="category-body-container">
        <img className="background-image" src={imageUrl} />
        <h2 className="category-title">{title}</h2>
      </div>
    </div>
  );
};

export default CategoryItem;
