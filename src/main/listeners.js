import { ipcMain, clipboard, app } from 'electron';
import clipboardListener from 'clipboard-event';

import { IpcChannels } from '../ipc';


const setupListener = (config) => () => {
   Object.entries(config).forEach(([key, value]) => {
      ipcMain.handle(key, value);
   });
}


const listeners = {
   [IpcChannels.LISTEN_TO_CLIPBOARD_CHANGES]: async (event, data) => {
      // To start listening
      clipboardListener.setMaxListeners(1).startListening();

      clipboardListener.on('change', () => {
         console.log('Clipboard changed', clipboard.readText());
         event.sender.send(IpcChannels.CLIPBOARD_CHANGE, clipboard.readText());
      })

      // To stop listening
      app.on('before-quit', () => {
         clipboardListener.stopListening();
      });

      // ipcMain.removeListener('listen-to-clipboard-changes', listenToClipboardChanges);
   }
}


export default setupListener(listeners);
