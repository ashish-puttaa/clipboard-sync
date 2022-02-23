import { useState } from 'react';
import { setMaxListSize, setLatestAtListTop } from '../../../context/settings/application';
import { useGlobalState } from '../../../context/store';
import SaveChangesButton from '../../buttons/save-changes';

import './application-settings.styles.scss';

function ApplicationSettings() {
   const [context, dispatch] = useGlobalState();

   const [maxItemsInList, setMaxItemsInList] = useState(
      context.settings.application.maxListSize || 1
   );

   const [recentItemPosition, setRecentItemPosition] = useState(
      !!context.settings.application.latestAtTop ? 'top' : 'bottom'
   );

   const handleSubmit = (event) => {
      event.preventDefault();
      setMaxListSize(dispatch, maxItemsInList);
      setLatestAtListTop(dispatch, recentItemPosition === 'top' ? true : false);
   };

   return (
      <div>
         <form onSubmit={handleSubmit}>
            <div>
               <label htmlFor="maxItemsInList">Max Items in List </label>
               <input
                  type="number"
                  name="maxItemsInList"
                  min="1"
                  max="15"
                  value={maxItemsInList}
                  onChange={(event) => setMaxItemsInList(event.target.value)}
               />
            </div>

            <div>
               <label htmlFor="recent-item-position">Post of the most recent clip</label>
               <select
                  name="recent-item-position"
                  value={recentItemPosition}
                  onChange={(event) => setRecentItemPosition(event.target.value)}
               >
                  <option value="top">top</option>
                  <option value="bottom">bottom</option>
               </select>
            </div>

            <div>
               <SaveChangesButton />
            </div>
         </form>
      </div>
   );
}

export default ApplicationSettings;
