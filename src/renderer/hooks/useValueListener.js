import { useEffect } from 'react';
import { addToClipboardQueue } from '../context/clipboard/clipboard.actions';
import { useGlobalState } from '../context/store';

export function useValueListener() {
   const [context, dispatch] = useGlobalState();

   let count = 0;

   useEffect(() => {
      const interval = setInterval(() => {
         addToClipboardQueue(dispatch, `new item ${++count}`);
      }, 5000);

      return () => clearInterval(interval);
   }, []);
}
