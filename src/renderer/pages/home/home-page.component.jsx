import { useEffect, useState } from 'react';

import MiniClip from '../../components/mini-clip';

import { useGlobalState } from '../../context/store';
import { clearClipboardList, addToClipboardList, refreshClipList } from '../../context/clipboard';

import './home-page.styles.scss';

function HomePage() {
   const [newItem, setNewItem] = useState('');

   const [context, dispatch] = useGlobalState();
   const { clipboard, settings } = context;

   useEffect(() => {
      refreshClipList(context, dispatch);
   }, []);

   const clearList = () => {
      clearClipboardList(dispatch);
   };

   const addToList = () => {
      addToClipboardList(dispatch, newItem);
      setNewItem('');
   };

   const renderClips = () => {
      const { latestAtTop } = settings.application;

      return !!latestAtTop
         ? [...clipboard]
              .reverse()
              .map((item, index) => <MiniClip text={item} index={index + 1} key={index} />)
         : clipboard.map((item, index) => <MiniClip text={item} index={index + 1} key={index} />);
   };

   return (
      <div className="home-page">
         <h2>Clips</h2>

         {renderClips()}

         <input type="text" value={newItem} onChange={(e) => setNewItem(e.target.value)} />
         <button onClick={addToList}>Add</button>
         <div>
            <button onClick={clearList}>Clear</button>
         </div>
      </div>
   );
}

export default HomePage;
