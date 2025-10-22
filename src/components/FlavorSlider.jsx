import {flavorlists} from '../constants/index'

const FlavorSlider = () => {
  return <div className="slider-wrapper">
    <div className="flavors">
      {
        flavorlists.map()
      }
    </div>
  </div>;
};

export default FlavorSlider;
