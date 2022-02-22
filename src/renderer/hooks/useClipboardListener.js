// import { useState, useEffect } from 'react';
// const { ipcRenderer } = window.require('electron');

// const MAX_QUEUE_SIZE = 10;

// export function useClipboardListener(maxSize = MAX_QUEUE_SIZE) {
//    const [list, setList] = useState([]);

//    const handleClipboardChange = (event, data) => {
//       if (data === '↵' || data.trim() === '') {
//          return;
//       }

//       setList((prev) => {
//          const updatedList = [...prev, data];

//          if (updatedList.length > maxSize) updatedList.shift();

//          return updatedList;
//       });
//    };

//    const clearList = () => setList(() => []);

//    useEffect(() => {
//       ipcRenderer
//          .invoke('listen-to-clipboard-changes')
//          .then(() => ipcRenderer.on('clipboard-change', handleClipboardChange));

//       return () => ipcRenderer.removeListener('clipboard-change', handleClipboardChange);
//    }, []);

//    return [list, clearList];
// }
