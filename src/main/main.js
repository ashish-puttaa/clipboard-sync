import path from 'path';
import { app, BrowserWindow } from 'electron';
import installExtension, {
   REACT_DEVELOPER_TOOLS,
   REDUX_DEVTOOLS,
} from 'electron-devtools-installer';

import setupListener from './listeners';

const IS_DEV = true;

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) {
   // eslint-disable-line global-require
   app.quit();
}

const createWindow = () => {
   // Create the browser window.
   const prodWindow = new BrowserWindow({
      width: 325,
      height: 400,
      transparent: true,
      frame: false,
      // width: 1600,
      // height: 900,
      // frame: true,
      // x: -100,
      // y: -100,
      // trafficLightPosition: { x: 20, y: 20 },
      // resizable: true,
      webPreferences: {
         nodeIntegration: true,
         preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY,
      },
      show: false,
      icon: path.join(__dirname, 'assets', 'clipboard.png'),
      tooltip: 'Manage your clipboard',
   });

   const devWindow = new BrowserWindow({
      width: 800,
      height: 600,
      webPreferences: {
         nodeIntegration: true,
         preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY,
      },
      show: false,
   });

   const mainWindow = IS_DEV ? devWindow : prodWindow;

   // and load the index.html of the app.

   console.log({
      loadUrl: MAIN_WINDOW_WEBPACK_ENTRY,
      preloadUrl: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY,
   });

   mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);

   // Open the DevTools.
   IS_DEV && mainWindow.webContents.openDevTools();

   mainWindow.once('ready-to-show', () => {
      mainWindow.show();
   });

   setupListener();
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', () => {
   createWindow();

   // Install extensions for development
   //  installExtension([REACT_DEVELOPER_TOOLS, REDUX_DEVTOOLS])
   //     .then((name) => console.log(`Added Extension:  ${name}`))
   //     .catch((err) => console.log("An error occurred: ", err));
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
   if (process.platform !== 'darwin') {
      app.quit();
   }
});

app.on('activate', () => {
   // On OS X it's common to re-create a window in the app when the
   // dock icon is clicked and there are no other windows open.
   if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
   }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
