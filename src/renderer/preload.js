import { contextBridge, ipcRenderer } from 'electron';
import { IpcChannels } from '../ipc';

const actions = {
   listenToClipboardChanges: () => ipcRenderer.invoke(IpcChannels.LISTEN_TO_CLIPBOARD_CHANGES),
   // selectFolder: async () => ipcRenderer.invoke(IpcChannels.SELECT_FOLDER),
   // setupWorkspace: (config) => ipcRenderer.invoke(IpcChannels.SETUP_WORKSPACE, config),
};

const listeners = {
   onClipboardChange: (cb) => {
      const handleChange = (event, data) => cb(data);
      ipcRenderer.on(IpcChannels.CLIPBOARD_CHANGE, handleChange);
      return () => ipcRenderer.removeListener(IpcChannels.CLIPBOARD_CHANGE, handleChange);
   },
   // onNotification: (cb) => {
   //    ipcRenderer.on(IpcChannels.NOTIFICATION, (event, data) => cb(data));
   // },
};

// const test = {
//    testWorker: (message) => {
//       console.log({ message });
//       return ipcRenderer.invoke(IpcChannels.TEST_WORKER, message);
//    },
// };

export const API = {
   actions,
   listeners,
   // test,
};

contextBridge.exposeInMainWorld('api', API);
