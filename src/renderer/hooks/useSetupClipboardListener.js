import { useEffect } from 'react';
import { addItemAndTrimClipList } from '../context/clipboard';
import { useGlobalState } from '../context/store';

export function useSetupClipboardListener() {
   const [context, dispatch] = useGlobalState();

   useEffect(() => {
      window.api.actions.listenToClipboardChanges();
   }, []);

   useEffect(() => {
      return window.api.listeners.onClipboardChange((data) => {
         if (data === '↵' || data.trim() === '') {
            return;
         }

         addItemAndTrimClipList(context, dispatch, data);
      });
   }, [context]);

   useEffect(() => {
      console.log({ context, dispatch });
      console.log(context.settings.application);
   });
}
