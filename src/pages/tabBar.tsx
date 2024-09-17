import React from 'react';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

import { Route, Redirect } from 'react-router';

import { playCircle, radio, library, search } from 'ionicons/icons';
// import HomePage from './Main/Main';
import LoginForm from './Login/Login';
import Profile from './Profile/Profile';

import Main from './Main/Main';


function TabsBar() {
  return (
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          {/*
          Use the render method to reduce the number of renders your component will have due to a route change.

          Use the component prop when your component depends on the RouterComponentProps passed in automatically.
        */}
          <Route path="/main" render={() => <Main />} exact={true} />
          {/* <Route path="/radio" render={() => <HomePage />} exact={true} /> */}
          <Route path="/" render={() => <LoginForm />} exact={true} />
          <Route path="/prifile" render={() => <Profile />} exact={true} />
        </IonRouterOutlet>

        <IonTabBar slot="bottom">
          <IonTabButton tab="home" href="/main">
            <IonIcon icon={playCircle} />
            <IonLabel>Listen now</IonLabel>
          </IonTabButton>

          {/* <IonTabButton tab="radio" href="/radio">
            <IonIcon icon={radio} />
            <IonLabel>Radio</IonLabel>
          </IonTabButton> */}

          <IonTabButton tab="library" href="/">
            <IonIcon icon={library} />
            <IonLabel>Logout</IonLabel>
          </IonTabButton>

          <IonTabButton tab="search" href="/profile">
            <IonIcon icon={search} />
            <IonLabel>Search</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  );
}
export default TabsBar;