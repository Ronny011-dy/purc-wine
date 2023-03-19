import './hero-banner.styles.scss';
import banner from '../../assets/HP.jpeg';

const HeroBanner = () => (
  <div
    className="hero-banner"
    style={{
      backgroundImage: `url("${banner}")`,
    }}
  >
    <p>Cultivating rich Moldovian wine tradition since 1827</p>
  </div>
);

export default HeroBanner;
