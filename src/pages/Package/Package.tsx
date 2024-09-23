import React, { useEffect, useRef, useState } from 'react';
import {
  IonButton,
  IonCard,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonLoading,
  IonMenuButton,
  IonModal,
  IonPage,
  IonTabBar,
  IonTabButton,
  IonText,
  IonToolbar,
  IonButtons,
  IonImg,
  IonBackButton,
  IonTitle,
} from '@ionic/react';
import { useHistory } from 'react-router';
import './Package.css';
import { globeOutline, home, mapSharp, personCircleOutline, star, create } from 'ionicons/icons';
import { CapacitorHttp } from '@capacitor/core';
import logoApp from '../../assets/img/whiteLogo.png';

const Package: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [allTariffsInfo, setAllTariffsInfo] = useState<any[]>([]);
  const [allResultInfo, setAllResultsInfo] = useState<any>([]);
  const [serviceInfoElements, setServiceInfoElements] = useState<any[]>([]);
  const [serviceInfoErrorApi, setServiceInfoErrorApi] = useState<any>();
  const [selectedTariff, setSelectedTariff] = useState<any>(null);
  const [actionType, setActionType] = useState<string>('');
  const [balance, setUserBalance] = useState<number>();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const history = useHistory();
  const modal = useRef<HTMLIonModalElement>(null);

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    const storedUserId = localStorage.getItem('user_id');
    const storedUserLs = localStorage.getItem('user_ls');
    const UserLs = storedUserLs ? JSON.parse(storedUserLs) : 0;
    console.log("dfdf", UserLs);

    if (storedUserId !== null && storedToken !== null) {
      const fetchTariffs = async () => {
        try {
          setIsLoading(true);
          const options = {
            url: `https://api.btt.tj/api/getPacketInfo/${UserLs}`,
            headers: {
              Authorization: `Bearer ${storedToken}`,
              'Content-Type': 'application/json',
            },
          };

          const response = await CapacitorHttp.get(options);
          const data = response.data;
          console.log("ggd", data);
          if (data.result == 'failed') {
            const errorApi = (
              <IonLabel className='errorTariffs'>Нет доступных пакетов</IonLabel>
            );
            setServiceInfoErrorApi(errorApi);
          }
          setAllTariffsInfo(data.packet_info);
          setAllResultsInfo(data);
          setIsLoading(false);
        } catch (error) {
          console.error('Error fetching tariffs:', error);
          setIsLoading(false);
        }
      };

      fetchTariffs();
    } else {
      history.push('/');
    }
  }, [history]);

  useEffect(() => {
    console.log("ggd", allTariffsInfo);
    const storedUserBalance = localStorage.getItem('balance');
    const Userbalance = storedUserBalance ? JSON.parse(storedUserBalance) : 0;
    setUserBalance(Userbalance);
    console.log("ball", Userbalance);
    if (allResultInfo.result != 'failed') {
      if (allTariffsInfo.length >= 0) {
        const elements = allTariffsInfo.map((info, index) => (
          <IonCard key={index}>
            <IonList className='activePackage'>
              <strong className='strong'>{info.name}</strong>
              <IonItem className='item'>
                <IonLabel>Цена с акцизом и НДС:</IonLabel>
                <IonLabel slot='end'>{info.price} TJS</IonLabel>
              </IonItem>
              <IonItem className='item'>
                <IonButton fill="outline" onClick={() => { setSelectedTariff(info); setActionType('buy'); setIsModalOpen(true); }} disabled={(info.price ? JSON.parse(info.price) : 0) > Userbalance}>
                  <IonIcon icon={star}></IonIcon>
                  Купить
                </IonButton>
                {/* <IonButton fill="outline" slot='end' onClick={() => { setSelectedTariff(info); setActionType('change'); setIsModalOpen(true); }}>
                Сменить
                <IonIcon icon={create}></IonIcon>
              </IonButton> */}
              </IonItem>
            </IonList>
          </IonCard>
        ));
        setServiceInfoElements(elements);
      }
    } else {
      const errorApi = (
        <IonLabel>Нет доступных пакетов</IonLabel>
      );
      setServiceInfoErrorApi(errorApi);
    }

  }, [allTariffsInfo]);

  const handleConfirmAction = async () => {
    const storedUserLs = localStorage.getItem('user_ls');

    setIsLoading(true);
    const url = actionType === 'buy'
      ? `https://api.btt.tj/api/buyPacket/${storedUserLs}/${selectedTariff.id}`
      : `https://api.btt.tj/api/changeTariff/${storedUserLs}/${selectedTariff.id}`;

    const options = {
      url: url,
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json',
      },
      method: 'POST',
      data: {
        action: actionType,
      }
    };

    try {
      const response = await CapacitorHttp.request(options);
      console.log('Response:', response);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
      setIsModalOpen(false);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <IonPage>
      <IonContent className='content'>
        {/* <IonHeader className='header'>
          <IonToolbar className='toolbar'>
            <IonButtons slot="start" className='menuButton'>
              <IonMenuButton />
            </IonButtons>
            <IonLabel className='myIp'> Пакеты</IonLabel>
            <IonImg className='logoApp' slot="end" src={logoApp} alt="logo"></IonImg>
          </IonToolbar>
        </IonHeader> */}
         <IonHeader>
                <IonToolbar className='BalanceToolbar'>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/internet" />
                    </IonButtons>
                    <IonTitle className='title'>Актуальные пакеты</IonTitle>
                </IonToolbar>
            </IonHeader>
        {serviceInfoElements}
        {serviceInfoErrorApi}
        <IonLoading isOpen={isLoading} message="Loading..." spinner="circles" />
      </IonContent>
      <IonModal ref={modal} isOpen={isModalOpen} onDidDismiss={closeModal} id='example-modal'>
        <div className="wrapper">
          <h1>Подтверждение</h1>
          <IonText className='text'>
            Вы действительно хотите {actionType === 'buy' ? 'Купить' : 'сменить'} этот пакет?
          </IonText><br />
          <IonButton onClick={handleConfirmAction}>
            {actionType === 'игн' ? 'Купить' : 'Сменить'} пакет
          </IonButton>
          <IonButton onClick={closeModal} color="danger">
            Отмена
          </IonButton>
        </div>
      </IonModal>
      {/* <IonTabBar slot="bottom" className='tabBar'>
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
        <IonTabButton tab="profile" href="/profile">
          <IonIcon icon={personCircleOutline} />
          <IonLabel>Мой Профил</IonLabel>
        </IonTabButton>
      </IonTabBar> */}
    </IonPage>
  );
};

export default Package;
