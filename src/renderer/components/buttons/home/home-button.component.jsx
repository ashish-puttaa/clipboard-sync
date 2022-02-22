import { Link } from 'react-router-dom';
import HomeSVG from '../../../assets/home.svg';

import './home-button.styles.scss';

function HomeButton() {
   return (
      <Link to="/">
         <div className="home-button">
            <div className="home-button__icon">
               <HomeSVG />
            </div>
         </div>
      </Link>
   );
}

export default HomeButton;
