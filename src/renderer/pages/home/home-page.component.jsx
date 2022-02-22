import { useState } from 'react';

import MiniClip from '../../components/mini-clip';

import { useGlobalState } from '../../context/store';
import { clearClipboardQueue, addToClipboardQueue } from '../../context/clipboard';

import './home-page.styles.scss';

function HomePage() {
   const [newItem, setNewItem] = useState('');

   const [context, dispatch] = useGlobalState();
   const { clipboard } = context;

   const clearList = () => {
      clearClipboardQueue(dispatch);
   };

   const addToList = () => {
      addToClipboardQueue(dispatch, newItem);
      setNewItem('');
   };

   return (
      <div className="home-page">
         <h2>Clips</h2>

         {clipboard.map((item, index) => (
            <MiniClip text={item} index={index + 1} key={index} />
         ))}

         <input type="text" value={newItem} onChange={(e) => setNewItem(e.target.value)} />
         <button onClick={addToList}>Add</button>
         <div>
            <button onClick={clearList}>Clear</button>
         </div>
      </div>
   );
}

export default HomePage;
