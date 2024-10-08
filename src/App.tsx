import { IonApp, IonRouterOutlet, IonSplitPane, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import Menu from './components/Menu';
import Page from './pages/Page';
import Login from './pages/Login/Login';
import Profile from './pages/Profile/Profile';

// import Main from './pages/Main/Main';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import Main from './pages/Main/Main';
import TabsBar from './pages/tabBar';
import TabBar from './components/TabBar';
import Tariffs from './pages/Tariffs/Tariffs';
import Package from './pages/Package/Package';
import NewsOne from './pages/News/NewsOne';
import AddBalance from './pages/AddBalance/AddBalance';

setupIonicReact();

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
  
        <IonSplitPane contentId="main">
          <Menu />
          <IonRouterOutlet id="main">
          {/* <Route path="/login" component={Login} />
        <Redirect exact from="/" to="/login" /> */}
            <Route path="/" exact={true}>
              <Login />
            </Route>
            <Route path="/profile" component={()=><Profile />} />
            <Route path="/main" component={()=><Main />} />
            <Route path="/tariffs" component={()=><Tariffs/>} />
            <Route path="/package" component={()=><Package/>} />
            <Route path="/login" component={()=><Login/>} />
            <Route path="/add-balance" component={()=><AddBalance/>} />
            {/* <Route path="/news" component={NewsOne} /> */}

            {/* <Route path="/folder/:name" exact={true}>
              <Page />
            </Route> */}
            {/* <Route path="/search" exact={true}>
              <Redirect to="/pages/Profile/" />
            </Route> */}
          </IonRouterOutlet>
          <TabBar/>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
