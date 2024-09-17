import { IonButtons, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonMenuButton, IonPage, IonSelect, IonSelectOption, IonTabBar, IonTabButton, IonTitle, IonToolbar} from '@ionic/react';
import { globeOutline, home, mapSharp, personCircleOutline } from 'ionicons/icons';
import React from 'react';


const TabBar: React.FC = () => {
    return (
<IonTabBar slot="bottom" className='tabBar'>
        <IonTabButton tab="Tarifs" href="/tarrifs">
          <IonIcon icon={globeOutline} />
          <IonLabel>Тарифы</IonLabel>
        </IonTabButton>
        <IonTabButton tab="SpeedTest" href="/package">
          <IonIcon icon={personCircleOutline} />
          <IonLabel>Пакеты</IonLabel>
        </IonTabButton>

        <IonTabButton tab="home" href="/main">
          <IonIcon icon={home} />
          <IonLabel>Главная</IonLabel>
        </IonTabButton>

        <IonTabButton tab="library" href="/card">
          <IonIcon icon={mapSharp} />
          <IonLabel>Карта</IonLabel>
        </IonTabButton>

        <IonTabButton tab="profile" href="/profile">
          <IonIcon icon={personCircleOutline} />
          <IonLabel>Мой Профил</IonLabel>
        </IonTabButton>
      </IonTabBar>
    );
};

export default TabBar;
