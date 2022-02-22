import { useRef } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';

import HomePage from '../../pages/home';
import ClipPage from '../../pages/clip';
import SettingsPage from '../../pages/settings/settings-page.component';

import SettingsButton from '../../components/buttons/settings';
import HomeButton from '../../components/buttons/home';

import { GlobalState } from '../../context/store';
import './app.styles.scss';

function App() {
   const appRef = useRef();

   // useSmoothScroll(appRef);

   const { pathname } = useLocation();

   return (
      <div className="App" ref={appRef}>
         <GlobalState>
            <Switch>
               <Route exact path={['/', '/home']} component={HomePage} />
               <Route path="/clip/:id" component={ClipPage} />
               <Route path="/settings" component={SettingsPage} />
               <Route path="*">No match</Route>
            </Switch>

            <div className="home-settings-wrapper">
               {pathname === '/settings' ? <HomeButton /> : <SettingsButton />}
            </div>
         </GlobalState>
      </div>
   );
}

export default App;
