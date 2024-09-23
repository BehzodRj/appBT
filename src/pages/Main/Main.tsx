import React, { useEffect, useState } from 'react';
import { IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonIcon, IonImg, IonItem, IonLabel, IonList, IonMenuButton, IonNavLink, IonPage, IonRouterLink, IonSelect, IonSelectOption, IonTabBar, IonTabButton, IonTitle, IonToolbar } from '@ionic/react';
import { globeOutline, home, mapSharp, personCircleOutline } from 'ionicons/icons';
import Dashboard from '../Tariffs/Tariffs';
import logoApp from '../../assets/img/whiteLogo.png';
import { CapacitorHttp } from '@capacitor/core';
import { useHistory, useParams } from 'react-router';
import TabBar from '../../components/TabBar';
import './Main.css';
import optom from '../../assets/img/optom1.jpg';
import NewsOne from '../News/NewsOne';
import AddBalance from '../AddBalance/AddBalance';
import Menu from '../../components/Menu';
import authService from '../../components/authService';

const Main: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [token, setToken] = useState('');
  const [userId, setUserId] = useState('');
  const history = useHistory(); // Получаем объект history для управления роутингом
  const [obj, setObj] = useState({}); // Предполагается, что ваш объект obj хранится в состоянии компонента
  const [balance, setBalance] = useState('');
  const [credit, setCredit] = useState('');
  const [status, setStatus] = useState('');
  const [full_name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [traffic, setTraffic] = useState('');
  const [option, setOption] = useState<JSX.Element[]>([]);
  const [all_userInfo, setAllUserInfo] = useState<JSX.Element[]>([]);
  const [selectedValue, setSelectedValue] = useState<number>(0);
  const [serviceInfoElements, setServiceInfoElements] = useState([]);

  const { name } = useParams<{ name: string; }>();
  const [showDetails, setShowDetails] = useState(false);

  const goToAddBalance = () => {
    history.push({
      pathname: '/add-balance',
      state: { selectedValue }  // Передаем имя тарифа через state
  });
  };
  const goToAutoPay = () => {
    history.push('/autopay');
  };
  const goToTv = () => {
    history.push('/tv');
  };
  const goToTurbo = () => {
    history.push('/turbo');
  };
  const goToLte = () => {
    history.push('/lte');
  };
  const goToOptom = () => {
    history.push('/optom');
  };
  const goToInternet = () => {
    history.push('/internet');
  };
  const goToVps = () => {
    history.push('/vps');
  };
  const goToDomain = () => {
    history.push('/domain');
  };
  const goToHosting = () => {
    history.push('/hosting');
  };


  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };
  console.log("Profileee");



  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    const storedUserId = localStorage.getItem('user_id');

    if (storedUserId !== null && storedToken !== null) {
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
          // setBalance(data?.accounts_info[selectedValue].balance?.balance || '');
          setAddress(data?.user_info?.address || '');
          setName(data?.user_info?.full_name || '');
          setPhone(data?.user_info?.phone || '');
          // const obj = response.data;
          // console.log('Response data:', obj);
          // const balance = obj.accounts_info?.balance.balance;
          console.log('Status code:', response.status);
          console.log("info", data.user_info.full_name);
          const info_accounts = data?.accounts_info;
          setAllUserInfo(info_accounts);
          // objectArray.forEach(([key, value]) => {
          //   console.log(key); // 'one'
          //   console.log(value); // 1
          // });

          if (info_accounts) {
            const userElements = Object.entries(info_accounts).map(([userId, userData]) => {
              return <IonSelectOption key={userId} value={userId}>{userId}</IonSelectOption>;
            });
            setOption(userElements);
          }


          console.log("option", option);
          console.log("array_info", info_accounts);
          console.log("array_info", typeof (info_accounts));
          // console.log("balance",data?.accounts_info[71074].balance?.balance || 0);

          setIsLoading(false);


        } catch (error) {
          console.error('Errors:', error);
          setIsLoading(false);
          await authService.logout();

        }
      };

      doGet();

    } else {
      window.location.href = '/login';
    }


    console.log('Token:', storedToken);
    console.log('User ID:', storedUserId);


  }, [history]);

  useEffect(() => {
    if (option.length > 0) {
      // Установка первого значения из списка опций
      setSelectedValue(option[0].props.value);
    }
    // console.log("selected", selectedValue);
    // console.log("selectedType",typeof(all_userInfo));
    // setBalance(all_userInfo[71074].balance.balance);
    // setBalance(all_userInfo[selectedValue]?.balance?.balance);
    // console.log("alll", all_userInfo);
    // console.log("alll", obj);
    console.log("selected", selectedValue);
    localStorage.removeItem('user_ls');
    localStorage.removeItem('balance');

  }, [option]);

  useEffect(() => {

    console.log("selected", selectedValue);
    console.log("alll", all_userInfo);
    console.log("alllBall", balance);

    localStorage.setItem('user_ls', JSON.stringify(selectedValue));
    localStorage.setItem('balance', JSON.stringify(balance));

    Object.keys(all_userInfo).forEach((key) => {
      if (key == selectedValue + '') {
        console.log(all_userInfo[selectedValue]);
        setBalance(all_userInfo[selectedValue].balance.balance);
        setCredit(all_userInfo[selectedValue].balance.credit);
        setStatus(all_userInfo[selectedValue].block.block_status);
        setTraffic(all_userInfo[selectedValue].traffic.used);
        console.log("alllBall", balance);
        localStorage.setItem('balance', JSON.stringify(all_userInfo[selectedValue].balance.balance));
        // Создаем JSX элементы для каждого элемента массива service_info

      }
    })
  }, [selectedValue]);

  return (


    <IonPage>

      <IonContent className='contetntMain'>
        <IonHeader className='heaber'>
          <IonToolbar className='toolbar' >
            <IonButtons slot="start" className='menuButton'>
              <IonMenuButton />
            </IonButtons>
            {/* <IonLabel className='myBalance'>Баланс</IonLabel> */}
            <IonLabel className='myIp'>Личный кабинет </IonLabel>
            <IonImg className='logoApp' slot="end" src={logoApp} alt="logo" ></IonImg>
            {/* <IonTitle className='myBalance'>Баланс <br />
            <IonLabel>12 TJS</IonLabel>
          </IonTitle> */}
          </IonToolbar>

        </IonHeader>
        {/* <div className='optomImg'>
          <img alt="Silhouette of mountains" src={optom} />


        </div> */}
        {/* <IonItem className='SomeNewsText' lines="none">
          <IonLabel>
            Новости
          </IonLabel>
        </IonItem> */}

        <div className='flexNews'>
            <IonCard color="primary" className='card1'>
              <IonCardHeader>
                <IonCardTitle></IonCardTitle>
                <IonCardSubtitle></IonCardSubtitle>
              </IonCardHeader>

              <IonCardContent></IonCardContent>
            </IonCard>

          <IonCard color="secondary" className='card2'>
            <IonCardHeader>
              <IonCardTitle></IonCardTitle>
              <IonCardSubtitle></IonCardSubtitle>
            </IonCardHeader>

            <IonCardContent> </IonCardContent>
          </IonCard>
        </div>
        <IonList className='selectBlock' lines="none">
          <div className='selectHome'>
            <IonItem className='textLS' lines="none">
              <IonLabel>
                Ваш лицевой счет:
              </IonLabel>
            </IonItem>
            <IonItem lines="none" slot='end'>
              <IonSelect class="custom-select" aria-label="Favorite Fruit" value={selectedValue} onIonChange={(e) => setSelectedValue(e.detail.value)}>
                {/* <IonSelectOption value="apple">71074</IonSelectOption>
                <IonSelectOption value="banana">83502</IonSelectOption>
                <IonSelectOption value="orange">97850</IonSelectOption> */}
                {option}
              </IonSelect>
            </IonItem>

          </div>
          <div className='selectHomeInfo'>
            <IonItem className='textLS' lines="none">
              <IonLabel className='Info-container'>

                Баланс: <br />
                <label className='text'>{balance}</label> TJS
              </IonLabel><br />
            </IonItem>
            <IonItem lines="none" className='status' >
              <div className='Info-container'>
                Статус: <br />
                <label className={`text ${status === 'Активный' ? 'active' : 'inactive'}`}>
                  {status}
                </label>

              </div>
            </IonItem>
            <IonItem lines="none" >
              <div className='Info-container'>
                Активный кредит: <br />
                <label className='text'>{credit}</label> TJS

              </div>

            </IonItem>

          </div>
          {/* <IonButton className="full-width" routerLink='/login'> Выход</IonButton> */}
        </IonList>
        <IonList className='AddBalanceList'>
          <div className='AddBalanceHome'>


            <IonButton className='addBalance' onClick={goToAddBalance} >Пополнить баланс</IonButton>



            <IonButton className='autoPay' onClick={goToAutoPay} >Автоплатеж</IonButton>


          </div>

        </IonList>

        {/* <IonItem className='SomeText' lines="none">
          <IonLabel>
            Популярное
          </IonLabel>
        </IonItem>

        <div className='flexServices'>

      
            <IonCard color="primary" className='card1'  onClick={goToTurbo}>
              <IonCardHeader>
                <IonCardTitle>Turbo</IonCardTitle>
              </IonCardHeader>

              <IonCardContent>Turbo Скорость</IonCardContent>
            </IonCard>

        

          <IonCard color="secondary" className='card2'  onClick={goToTv}>
            <IonCardHeader>
              <IonCardTitle>IPTV</IonCardTitle>
            </IonCardHeader>

            <IonCardContent>Телевидение</IonCardContent>
          </IonCard>

          <IonCard color="secondary" className='card3'  onClick={goToOptom}>
            <IonCardHeader>
              <IonCardTitle>Оптом</IonCardTitle>
            </IonCardHeader>

            <IonCardContent>Пакет Оптом</IonCardContent>
          </IonCard>
        </div> */}
        <IonItem className='SomeText' lines="none">
          <IonLabel>
            Услуги
          </IonLabel>
        </IonItem>
        <div className='flexServices'>
          <IonCard color="primary" className='card1 first' onClick={goToInternet}>
            <IonCardHeader>
              <IonCardTitle>Internet</IonCardTitle>
            </IonCardHeader>

            <IonCardContent>Домашный Интернет</IonCardContent>
          </IonCard>

          <IonCard color="secondary" className='card2' onClick={goToLte}>
            <IonCardHeader>
              <IonCardTitle>LTE</IonCardTitle>
            </IonCardHeader>

            <IonCardContent>Беспроводной Интернет</IonCardContent>
          </IonCard>

          <IonCard color="secondary" className='card2' onClick={goToTv}>
            <IonCardHeader>
              <IonCardTitle>IPTV</IonCardTitle>
            </IonCardHeader>

            <IonCardContent>Телевидение</IonCardContent>
          </IonCard>
          {/* <IonCard color="primary" className='card1' onClick={goToVps}>
            <IonCardHeader>
              <IonCardTitle>VPS</IonCardTitle>
            </IonCardHeader>

            <IonCardContent>Виртуальный сервер</IonCardContent>
          </IonCard>


          <IonCard color="secondary" className='card2' onClick={goToDomain}>
            <IonCardHeader>
              <IonCardTitle>Домен</IonCardTitle>
            </IonCardHeader>

            <IonCardContent>Домен для сайта</IonCardContent>
          </IonCard>

          <IonCard color="secondary" className='card3' onClick={goToHosting}>
            <IonCardHeader>
              <IonCardTitle>Хостинг</IonCardTitle>
            </IonCardHeader>

            <IonCardContent>Хостинг для сайта</IonCardContent>
          </IonCard> */}
        </div>
        <IonItem className='SomeText' lines="none">
          <IonLabel>
            Тех поддержа
          </IonLabel>
        </IonItem>
        <div className='contact'>
          <a href="tel:+992446006060">
            <IonCard color="secondary" className='card'>
              <IonCardHeader>
                <IonCardTitle>Call-Center</IonCardTitle>
              </IonCardHeader>

              <IonCardContent>44 600 6060</IonCardContent>
            </IonCard>
          </a>


          <a href="https://t.me/bt_cyber_bot">
            <IonCard color="secondary" className='card'>
              <IonCardHeader>
                <IonCardTitle>Telegram</IonCardTitle>
              </IonCardHeader>

              <IonCardContent>Cyber_bot</IonCardContent>
            </IonCard>
          </a>
          <a href="https://webim.babilon-t.tj/client.php?locale=ru">
             <IonCard color="secondary" className='card'>
            <IonCardHeader>
              <IonCardTitle>Live</IonCardTitle>
            </IonCardHeader>

            <IonCardContent>Онлайн чат</IonCardContent>
          </IonCard>
          </a>
         
        </div>
        {/* <IonItem className='SomeText' lines="none">
          <IonLabel>
            Новости
          </IonLabel>
        </IonItem>

        <div className='NewsApp'>

          <IonRouterLink routerLink="/news" style={{ textDecoration: 'none' }}>
            <IonCard color="primary" className='card1 first'>
              <IonCardHeader>
                <IonCardTitle>Turbo</IonCardTitle>
              </IonCardHeader>

              <IonCardContent>Turbo Скорость</IonCardContent>
            </IonCard>

          </IonRouterLink>

          <IonCard color="secondary" className='card2'>
            <IonCardHeader>
              <IonCardTitle>IPTV</IonCardTitle>
            </IonCardHeader>

            <IonCardContent>Телевидение</IonCardContent>
          </IonCard>

          <IonCard color="secondary" className='card3'>
            <IonCardHeader>
              <IonCardTitle>Оптом</IonCardTitle>
            </IonCardHeader>

            <IonCardContent>Пакет Оптом</IonCardContent>
          </IonCard>
        </div> */}
        {/* <IonCard className='LargeCard' color="tertiary">
          <IonCardHeader>
            <IonCardTitle>Card Title</IonCardTitle>
            <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
          </IonCardHeader>

          <IonCardContent>Card Content</IonCardContent>
        </IonCard> */}
        {/* <Dashboard/> */}

      </IonContent>

      <IonTabBar slot="bottom" className='tabBar'>
        {/* <IonTabButton tab="Tarifs" href="/tariffs">
          <IonIcon icon={globeOutline} />
          <IonLabel>Тарифы</IonLabel>
        </IonTabButton>
        <IonTabButton tab="SpeedTest" href="/package">
          <IonIcon icon={personCircleOutline} />
          <IonLabel>Пакеты</IonLabel>
        </IonTabButton> */}

        <IonTabButton tab="home" href="/main">
          <IonIcon icon={home} />
          <IonLabel>Главная</IonLabel>
        </IonTabButton>

        <IonTabButton tab="profile" href="/profile">
          <IonIcon icon={personCircleOutline} />
          <IonLabel>Мой Профил</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonPage>
  );
};

export default Main;