import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { IonContent, IonInput, IonButton, IonItem, IonLabel, IonPage, IonHeader, IonTitle, IonToolbar, IonFooter, IonList, IonTab, IonCard, IonImg, useIonLoading, IonLoading, IonSplitPane, IonRouterOutlet, IonButtons, IonMenuButton, IonBackButton, IonIcon, IonTabBar, IonTabButton, IonAvatar } from '@ionic/react';
import './Sotset.css';
import logoApp from '../../assets/img/whiteLogo.png';
import axios from 'axios';
import logo from '../../assets/img/whiteLogo.png';
import sotset from '../../assets/img/sotset.svg';
import phone from '../../assets/img/phone.png';
import telegram from '../../assets/img/telegram.png';
import chat from '../../assets/img/chat.png';
import instagram from '../../assets/img/instagram.png';
import { Http, HttpOptions } from '@capacitor-community/http';
import { CapacitorHttp, HttpResponse } from '@capacitor/core';
import Menu from '../../components/Menu';
import { chevronForwardOutline, headsetOutline, home, personCircleOutline } from 'ionicons/icons';


const Sotset: React.FC = () => {
    const history = useHistory();

    const goToTarrifsLte = () => {
        history.push('/tariffsLte');
    };

    return (

        <IonPage>

            <IonHeader>
                <IonToolbar className='BalanceToolbar'>
                    <IonButtons slot="start" className='menuButton'>
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle className='title'>Поддержа</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonCard>
                    <IonList className='ListSotset'>
                        <IonItem lines='none'>
                            <IonAvatar aria-hidden="true" slot="start">
                                <img alt="phone" src={phone} />
                            </IonAvatar>
                            <IonLabel>Call-Center <br/><p>44 600 6060</p></IonLabel>
                            <a  href="tel:+992446006060">Позвонить</a>
                        </IonItem>
                    </IonList>
                </IonCard>
                <IonCard>
                    <IonList className='ListSotset'>
                        <IonItem lines='none'>
                            <IonAvatar aria-hidden="true" slot="start">
                                <img alt="telgram" src={telegram} />
                            </IonAvatar>
                            <IonLabel>Telegram</IonLabel>
                            <a href='https://t.me/bt_cyber_bot'>Перейти</a>
                        </IonItem>
                    </IonList>
                </IonCard>
                <IonCard>
                    <IonList className='ListSotset'>
                        <IonItem lines='none'>
                            <IonAvatar aria-hidden="true" slot="start">
                                <img alt="telgram" src={instagram} />
                            </IonAvatar>
                            <IonLabel>Instagram</IonLabel>
                            <a href='https://instagram.com/babilon.tajikistan?igshid=YmMyMTA2M2Y='>Перейти</a>
                        </IonItem>
                    </IonList>
                </IonCard>
                <IonCard>
                    <IonList className='ListSotset'>
                        <IonItem lines='none'>
                            <IonAvatar aria-hidden="true" slot="start">
                                <img alt="chat" src={chat}/>
                            </IonAvatar>
                            <IonLabel>Онлайн-чат</IonLabel>
                            <a href='https://webim.babilon-t.tj/client.php?locale=ru'>Перейти</a>
                        </IonItem>
                    </IonList>
                </IonCard>
                
            </IonContent>
            <IonTabBar slot="bottom" className='tabBar'>

                <IonTabButton tab="profile" href="/profile">
                    <IonIcon icon={personCircleOutline} />
                    <IonLabel>Мой Профиль</IonLabel>
                </IonTabButton>
                <IonTabButton tab="home" href="/main">
                    <IonIcon icon={home} />
                    <IonLabel>Главная</IonLabel>
                </IonTabButton>


                <IonTabButton tab="sotset" href="/sotset">
                    <IonIcon icon={headsetOutline} src={sotset} />
                    <IonLabel>Поддержа</IonLabel>
                </IonTabButton>
            </IonTabBar>
        </IonPage>


    );
};

export default Sotset;
