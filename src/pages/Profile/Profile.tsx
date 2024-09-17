import React, { useEffect, useState } from 'react';
import { IonAccordionGroup, IonAvatar, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonIcon, IonImg, IonItem, IonLabel, IonList, IonLoading, IonMenuButton, IonPage, IonRow, IonSelect, IonSelectOption, IonTabBar, IonTabButton, IonText, IonTitle, IonToolbar } from '@ionic/react';
import { useHistory, useParams } from 'react-router';
import './Profile.css';
import { globeOutline, home, locationOutline, mapSharp, personCircleOutline, personOutline, phonePortraitOutline, wallet, wineOutline } from 'ionicons/icons';
import TabsBar from '../tabBar';
import { CapacitorHttp } from '@capacitor/core';
import logoApp from '../../assets/img/whiteLogo.png';
import avatarProfile from '../../assets/img/profileLogo.png';

const Profile: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [token, setToken] = useState('');
  const [userId, setUserId] = useState('');
  const history = useHistory(); // Получаем объект history для управления роутингом
  const [obj, setObj] = useState({}); // Предполагается, что ваш объект obj хранится в состоянии компонента
  const [balance, setBalance] = useState('');
  const [credit, setCredit] = useState('');
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

        }
      };

      doGet();

    } else {
      history.push('/');
    }


    console.log('Token:', storedToken);
    console.log('User ID:', storedUserId);
  }, []);

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
        setTraffic(all_userInfo[selectedValue].traffic.used);
        console.log("alllBall", balance);
        localStorage.setItem('balance', JSON.stringify(all_userInfo[selectedValue].balance.balance));
        // Создаем JSX элементы для каждого элемента массива service_info
        const serviceInfoElements = all_userInfo[selectedValue].service_info.map((service, index) => (
          <IonCard key={index}>
            <IonList className='activePackage'>
              <strong className='strong'>{service.service_name}</strong>
              <IonItem className='item'>
                <IonLabel>Цена с акцизом и НДС:</IonLabel>
                <IonLabel slot='end'>{service.cost} TJS</IonLabel>
              </IonItem>
              <IonItem className='item'>
                <IonLabel>Статус:</IonLabel>
                <IonLabel slot='end'>{service.paid ? 'Активный' : 'Неактивный'}</IonLabel>
              </IonItem>
              <IonItem className='item'>
                <IonLabel>Дата след. оплаты:</IonLabel>
                <IonLabel slot='end'>{service.end_date}</IonLabel>
              </IonItem>
              {service.data && service.data.ip &&
                <IonItem className='item'>
                  <IonLabel>IP адрес:</IonLabel>
                  <IonLabel slot='end'>{service.data.ip}</IonLabel>
                </IonItem>
              }
              {service.data && service.data.next_tariff &&
                <IonItem className='item'>
                  <IonLabel>След ТП:</IonLabel>
                  <IonLabel slot='end'>{service.data.next_tariff}</IonLabel>
                </IonItem>
              }
              {service.data && service.data.iptv_login &&
                <IonItem className='item'>
                  <IonLabel>Логин:</IonLabel>
                  <IonLabel slot='end'>{service.data.iptv_login}</IonLabel>
                </IonItem>
              }
              {service.data && service.data.iptv_password &&
                <IonItem className='item'>
                  <IonLabel> Парол:</IonLabel>
                  <IonLabel slot='end'>{service.data.iptv_password}</IonLabel>
                </IonItem>
              }
            </IonList>
          </IonCard>
        ));

        // Устанавливаем созданные JSX элементы в состояние
        setServiceInfoElements(serviceInfoElements);
      }
    })
  }, [selectedValue]);

  // console.log("selected", selectedValue);
  // console.log("alll", all_userInfo);
  // Object.keys(all_userInfo).forEach((key) => {
  //   if (key == selectedValue + '') {
  //     console.log(all_userInfo[selectedValue]);
  //     // setBalance(all_userInfo[selectedValue].balance.balance);


  //   }
  // })


  return (
    <IonPage>
      <IonContent className='content'>
        <IonHeader className='heaber'>
          <IonToolbar className='toolbar' >
            <IonButtons slot="start" className='menuButton'>
              <IonMenuButton />
            </IonButtons>
            {/* <IonLabel className='namePage'>Мой Профил</IonLabel> */}
            {/* <IonLabel className='myBalance'>Баланс</IonLabel> */}
            {/* <IonLabel className='myIp' slot="end">ip: 10.154.154.154</IonLabel> */}
            <IonLabel className='myIp'>Мой Профил </IonLabel>
            <IonImg className='logoApp' slot="end" src={logoApp} alt="logo" ></IonImg>
          </IonToolbar>

        </IonHeader> 
        <div className="avatar">
              {/* <IonAvatar aria-hidden="true" > */}
                <img alt="avatar" src={avatarProfile} />
              {/* </IonAvatar> */}
            </div>
        <IonCard className='group'>

          <IonCardContent className='flex'>
           
            <IonList className='listItem' >
              <IonItem className='item'>
                <IonIcon icon={personOutline} />
                <IonLabel>{full_name}</IonLabel>
              </IonItem>
              {/* <IonItem className='item'>
                <IonIcon icon={locationOutline} />
                <IonLabel>{address}</IonLabel>
              </IonItem> */}
              <IonItem className='item' >
                <IonIcon icon={phonePortraitOutline} />
                <IonLabel>{phone}</IonLabel>
              </IonItem>
                {/* <IonItem className='item'>
                  <IonIcon icon={personCircleOutline} />
                  <IonLabel>sluj_97850</IonLabel>
                </IonItem> */}
                {/* <IonItem className='item' lines="none">
                    <IonLabel className='name'>Холмуродов Икбол</IonLabel>
                    </IonItem>
                <IonItem className='item' lines="none">
                      <IonIcon icon={wallet} />
                      <IonLabel>1020 TJS</IonLabel>
                    </IonItem> */}

            </IonList>
            <IonList className='select' lines="none">
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
            </IonList>

          </IonCardContent>
        </IonCard>
        {/* <IonCard>
          <IonList className='select' lines="none">
            <IonItem className='textLS' lines="none">
              <IonLabel>
                Ваш лицевой счет:
              </IonLabel>
            </IonItem>
            <IonItem lines="none">
              <IonSelect aria-label="Favorite Fruit" value={selectedValue} onIonChange={(e) => setSelectedValue(e.detail.value)}>
              
                {option}
              </IonSelect>
            </IonItem>
          </IonList>
        </IonCard> */}
        <IonCard>
          <IonList className='balanceCard'>
            <IonItem className='textBalance'>
              <IonLabel className='text'>
                Ваш баланс:
              </IonLabel>
              <IonLabel slot='end'>
                {balance} TJS
              </IonLabel>
            </IonItem>
            <IonItem className='textCredit' lines="none">
              <IonLabel>
                Активный кредит:
              </IonLabel>
              <IonLabel slot='end'>
                {credit} TJS
              </IonLabel>
            </IonItem>
          </IonList>
          {/* <IonList className='select' lines="none">
            <IonItem className='textCredit' lines="none">
              <IonLabel>
              Активный кредит:
              </IonLabel>
            </IonItem>
            <IonItem className='numBalance' lines="none">
              <IonLabel>
                {credit} TJS
              </IonLabel>
            </IonItem>
          </IonList> */}
        </IonCard>
        <IonItem className='package' lines="none">
          <IonLabel>
            Активные услуги
          </IonLabel>
        </IonItem>
        {serviceInfoElements}

        <IonItem className='package' lines="none">
          <IonLabel>
            Информация по трафику
          </IonLabel>
        </IonItem>
        <IonCard>
          <IonList className='activePackage'>
            <IonItem className='item' lines='none'>
              <IonLabel>Наработка трафика:</IonLabel>
              <IonLabel slot='end'>{traffic}</IonLabel>
            </IonItem>
          </IonList>
        </IonCard>






        <IonLoading isOpen={isLoading} message="Loading..." spinner="circles" />

      </IonContent>
      {/* <TabsBar/> */}
      <IonTabBar slot="bottom" className='tabBar'>
        <IonTabButton tab="Tarifs" href="/tariffs">
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

export default Profile;