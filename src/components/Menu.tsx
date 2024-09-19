import {
  IonButton,
  IonContent,
  IonIcon,
  IonImg,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from '@ionic/react';

import { Link, useHistory, useLocation } from 'react-router-dom';
import { archiveOutline, archiveSharp, bookmarkOutline, globeOutline, heartOutline, heartSharp, home, homeOutline, layersOutline, layersSharp, mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, personCircleOutline, trashOutline, trashSharp, warningOutline, warningSharp } from 'ionicons/icons';
import './Menu.css';
import authService from './authService';


interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: 'Главная',
    url: '/main',
    iosIcon: homeOutline,
    mdIcon: homeOutline
  },
  {
    title: 'Мой Профил',
    url: '/profile',
    iosIcon: personCircleOutline,
    mdIcon: personCircleOutline
  }

];

const labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

const Menu: React.FC = () => {
  const location = useLocation();
  const history = useHistory();

  const handleLogout = async () => {
    try {
      // await authService.logout();
      // history.push('/login'); 
      localStorage.clear();
      window.location.href = '/login';
    } catch (error) {
      console.error('Ошибка при выходе', error);
    }
  };

  return (
    <IonMenu contentId="main" type="overlay">
        <IonContent>
          <IonList id="inbox-list">
            <IonListHeader>Babilon-T</IonListHeader>
            <IonNote>www.babilon-t.com</IonNote>
            {appPages.map((appPage, index) => {
              console.log("gg", location);
              return (

                <IonMenuToggle key={index} autoHide={false}>

                  <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                    {/* <IonItem> */}
                    {/* <Link to="../pages/Login">Home</Link> */}
                    <IonIcon aria-hidden="true" slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                    <IonLabel>{appPage.title}</IonLabel>
                  </IonItem>
                </IonMenuToggle>
              );
            })}
          </IonList>

          {/* <IonList id="labels-list">
          <IonListHeader>Labels</IonListHeader>
          
          {labels.map((label, index) => (
            <IonItem lines="none" key={index}>
              <IonIcon aria-hidden="true" slot="start" icon={bookmarkOutline} />
              <IonLabel>{label}</IonLabel>
            </IonItem>
          ))}
        </IonList> */}
          {/* <IonButton className="full-width" routerLink='/login'> Выход</IonButton> */}
          <IonButton className="full-width" onClick={handleLogout}>Выход</IonButton>
        </IonContent>
    </IonMenu>
  );
};

export default Menu;
