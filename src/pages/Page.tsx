import { IonButton, IonButtons, IonContent, IonFooter, IonHeader, IonIcon, IonLabel, IonLoading, IonMenuButton, IonPage, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs, IonTitle, IonToolbar } from '@ionic/react';
import { Redirect, Route, useHistory, useParams } from 'react-router';
import ExploreContainer from '../components/ExploreContainer';
import './Page.css';
import { useEffect, useState } from 'react';
// import axios from 'axios';
import { glasses, globe, globeOutline, home, library, mapSharp, personCircleOutline, playCircle, radio, search, text } from 'ionicons/icons';
import { IonReactRouter } from '@ionic/react-router';
import HomePage from './Main/Main';
import Profile from './Profile/Profile';
import { Link } from 'react-router-dom';
import { CapacitorHttp } from '@capacitor/core';

const Page: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [userData, setUserData] = useState<any>(null); // Здесь вы можете указать тип данных, которые ожидаете получить
  const [token, setToken] = useState('');
  const [userId, setUserId] = useState('');
  const history = useHistory(); // Получаем объект history для управления роутингом

  const [obj, setObj] = useState({}); // Предполагается, что ваш объект obj хранится в состоянии компонента
  const [balance, setBalance] = useState('');
  const [data, setData] = useState(null);

  const { name } = useParams<{ name: string; }>();

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    const storedUserId = localStorage.getItem('user_id');

    if (storedUserId !== null && storedToken !== null ) {
      setToken(storedToken);
      setUserId(storedUserId);
      const doGet = async () => {
       
        try {
          const options = {
            url: `https://api.btt.tj/api/getUserInfo/${storedUserId}`,
            headers: {
              Authorization: `Bearer ${storedToken}`,
              'Content-Type': 'application/json',
            },

          };

          const response = await CapacitorHttp.get(options);
          console.log("data", response);
          const data = response.data;
          setObj(data);
          setBalance(data?.accounts_info?.balance?.balance || '');
          // const obj = response.data;
          // console.log('Response data:', obj);
          // const balance = obj.accounts_info?.balance.balance;
          console.log('Status code:', response.status);
          console.log("balance",balance);

          // Дополнительная обработка ответа...
          setIsLoading(false);
          
        } catch (error) {
          console.error('Errors:', error);
          setIsLoading(false);
          // Обработка ошибок...
        }
      };

      doGet();
     
    } else {
      history.push('../pages/Login/');
    }



    console.log('Token:', storedToken);
    console.log('User ID:', storedUserId);
     // Получаем первый ключ из объекта accounts_info
    //  const firstAccountKey = Object.keys(obj.accounts_info);
    // optionChange({ detail: { value: firstAccountKey }});
    
  }, []);
  // const optionChange = (event) => {
  //   console.log("evv", event.detail.value);
  //   const selectedKey = event.detail.value;

  //   const selectedAccountInfo = obj.accounts_info[selectedKey];
  //   if (!selectedAccountInfo) {
  //     // Если информации по выбранному ключу нет, обрабатываем ошибку
  //     console.error(`Account info not found for key: ${selectedKey}`);
  //     return;
  //   }

  //   const { balance, block, traffic, existing_packet } = selectedAccountInfo;

  //   // Устанавливаем данные в состояние компонента
  //   setBalance(balance?.balance || "");
   
  // }
  

  return (
    <IonPage>
      <IonHeader className='heaber'>
        <IonToolbar className='toolbar' >
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          {/* <IonLabel className='myBalance'>Баланс</IonLabel> */}
          <IonLabel className='myIp' slot="end">ip: 10.154.154.154</IonLabel>

          <IonTitle className='myBalance'>Баланс <br />
            <IonLabel>12 TJS</IonLabel>
          </IonTitle>
        </IonToolbar>

      </IonHeader>
      {name === 'Home' && <Profile />}
      {name != 'Home' &&

        <IonContent fullscreen>
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">{name}</IonTitle>
            </IonToolbar>
          </IonHeader>

          <Link to="./Profile/Profile.tsx">Home</Link>
          <IonLabel>{userId}</IonLabel>
          <IonLabel>{token}</IonLabel>
          <ExploreContainer name={name} />

          <IonLoading isOpen={isLoading} message="Loading..." spinner="circles" />
        </IonContent>}


      <IonTabBar slot="bottom">
        <IonTabButton tab="Tarifs" href="/folder/Tarrifs">
          <IonIcon icon={globeOutline} />
          <IonLabel>Тарифы</IonLabel>
        </IonTabButton>
        <IonTabButton tab="SpeedTest" href="/folder/SpeedTest">
          <IonIcon icon={personCircleOutline} />
          <IonLabel>Пакеты</IonLabel>
        </IonTabButton>

        <IonTabButton tab="home" href="/folder/Home">
          <IonIcon icon={home} />
          <IonLabel>Главная</IonLabel>
        </IonTabButton>

        {/* <IonTabButton tab="library" href="/card">
          <IonIcon icon={mapSharp} />
          <IonLabel>Карта</IonLabel>
        </IonTabButton> */}

        <IonTabButton tab="profile" href="/profile">
          <IonIcon icon={personCircleOutline} />
          <IonLabel>Мой Профил</IonLabel>
        </IonTabButton>
      </IonTabBar>


    </IonPage>
  );
};

export default Page;
