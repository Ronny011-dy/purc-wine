import './category-item.styles.scss';
import specials from '../../assets/special.png';

const CategoryItem = ({ category }) => {
  const { imageUrl, title, id } = category;
  return (
    <div className={`category-container slot${id}`}>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      >
        <div className="category-body-container">
          <h2>{title}</h2>
        </div>
      </div>
    </div>
  );
};

export default CategoryItem;
