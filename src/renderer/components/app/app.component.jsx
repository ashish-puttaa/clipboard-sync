import React, { useEffect, useRef } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';

import HomePage from '../../pages/home';
import ClipPage from '../../pages/clip';
import SettingsPage from '../../pages/settings/settings-page.component';

import SettingsButton from '../../components/buttons/settings';
import HomeButton from '../../components/buttons/home';

import { useGlobalState } from '../../context/store';
import { addToClipboardQueue } from '../../context/clipboard';

import './app.styles.scss';

function App() {
   const appRef = useRef();
   const [context, dispatch] = useGlobalState();
   const { pathname } = useLocation();

   // useSmoothScroll(appRef);

   useEffect(() => {
      window.api.actions.listenToClipboardChanges();

      window.api.listeners.onClipboardChange((data) => {
         addToClipboardQueue(dispatch, data);
      });
   }, []);

   // Note: Electron uses the /main_window (from package.json) url as the entry point for the renderer process.

   return (
      <div className="App" ref={appRef}>
         <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/clip/:id" element={<ClipPage />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="*" element={<React.Fragment>No match</React.Fragment>} />
         </Routes>

         <div className="home-settings-wrapper">
            {pathname === '/settings' ? <HomeButton /> : <SettingsButton />}
         </div>
      </div>
   );
}

export default App;
