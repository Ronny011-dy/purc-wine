import './hero-banner.styles.scss';
import banner from '../../assets/HP.jpeg';

const HeroBanner = () => (
  <div
    className="hero-banner"
    style={{
      backgroundImage: `url("${banner}")`,
    }}
  >
    <p>“Wine is the answer. I just don’t remember the question.”</p>
  </div>
);

export default HeroBanner;
