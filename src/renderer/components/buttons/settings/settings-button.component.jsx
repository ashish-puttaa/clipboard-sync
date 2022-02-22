import { Link } from 'react-router-dom';
// import SettingsSVG from '../../assets/settings-icon.svg';
import SettingsSVG from '../../../assets/gear.svg';

import './settings-button.styles.scss';

function SettingsButton() {
   return (
      <Link to="/settings">
         <div className="settings-button">
            <div className="settings-button__icon">
               <SettingsSVG />
            </div>
         </div>
      </Link>
   );
}

export default SettingsButton;
