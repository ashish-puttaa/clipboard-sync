import { useGlobalState } from '../../../context/store';
import { setConnectionType } from '../../../context/settings/connection';
import { capitalize } from '../../../utils';

import BrushStrokeSVG from '../../../assets/brush-stroke.svg';
import OfflineConnectionSettings from './subcomponents/offline';
import LocalConnectionSettings from './subcomponents/local';
import OnlineConnectionSettings from './subcomponents/online';

import './connection-settings.styles.scss';

function ConnectionSettings() {
   const [context, dispatch] = useGlobalState();
   const { connection } = context.settings;

   const connectionTypes = ['offline', 'local', 'online'];

   return (
      <div className="settings__connection">
         <div className="settings__connection-options">
            {connectionTypes.map((type) => (
               <button
                  key={`settings__connection-options--${type}`}
                  className={connection.type === type ? 'selected' : ''}
                  onClick={() => setConnectionType(dispatch, type)}
               >
                  <span>{capitalize(type)}</span>
                  {connection.type === type && (
                     <div className="brush-stroke-wrapper">
                        <BrushStrokeSVG />
                     </div>
                  )}
               </button>
            ))}
         </div>

         <div className="settings__connection-option-wrapper">
            {
               {
                  offline: <OfflineConnectionSettings />,
                  local: <LocalConnectionSettings />,
                  online: <OnlineConnectionSettings />,
               }[connection.type]
            }
         </div>
      </div>
   );
}

export default ConnectionSettings;
