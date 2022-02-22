import { useEffect, useState } from 'react';

import BackButton from '../../components/buttons/back';
import ConnectionSettings from '../../components/settings/connection';
import AboutSettings from '../../components/settings/about';

import { capitalize } from '../../utils';

import './settings-page.styles.scss';

function SettingsPage() {
   const options = ['connection', 'about'];
   const [selectedOption, setSelectedOption] = useState(options[0]);

   const renderOptions = () =>
      options.map((option) => {
         let className = 'settings-page__left-option';
         const isSelected = option === selectedOption;

         if (isSelected) {
            className = className.concat(' selected');
         }

         return (
            <div
               key={`option-${option}`}
               className={className}
               onClick={() => setSelectedOption(option)}
            >
               {capitalize(option)}
            </div>
         );
      });

   return (
      <div className="settings-page">
         <div className="settings-page__left">
            <div className="settings-page__left-title">Settings</div>
            <div className="settings-page__left-content">{renderOptions()}</div>
         </div>

         <div className="settings-page__right">
            <div className="settings-page__right-header">
               <div className="back-button-wrapper">
                  <BackButton />
               </div>
            </div>

            <div className="settings-page__right-content">
               {
                  {
                     connection: <ConnectionSettings />,
                     about: <AboutSettings />,
                  }[selectedOption]
               }
            </div>
         </div>
      </div>
   );
}

export default SettingsPage;
