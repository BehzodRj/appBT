import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { IonContent, IonInput, IonButton, IonItem, IonLabel, IonPage, IonHeader, IonTitle, IonToolbar, IonFooter, IonList, IonTab, IonCard, IonImg, useIonLoading, IonLoading, IonSplitPane, IonRouterOutlet, IonButtons, IonMenuButton, IonBackButton, IonListHeader } from '@ionic/react';
import './IpTv.css';
import logoApp from '../../assets/img/whiteLogo.png';
import axios from 'axios';
import logo from '../../assets/img/whiteLogo.png';
import { Http, HttpOptions } from '@capacitor-community/http';
import { CapacitorHttp, HttpResponse } from '@capacitor/core';
import Menu from '../../components/Menu';

const IpTv: React.FC = () => {

    return (

        <IonPage>

            <IonHeader>
                <IonToolbar className='BalanceToolbar'>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/all_services" />
                    </IonButtons>
                    <IonTitle  className='title'>IPTV </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonList class='ListTV TvText'>
                
                 <IonLabel>IPTV - это современная технология, позволяющая эффективно передавать телевизионный сигнал через сеть Интернет. </IonLabel>
                </IonList>
                <IonItem className='SomeText' lines="none">
          <IonLabel>
            Тарифы
          </IonLabel>
        </IonItem>
                <IonList class='ListTV'>
                <IonListHeader>Somon TV</IonListHeader>
                <IonItem>
                        <IonLabel>ТВ каналы</IonLabel>
                        <IonLabel className='bold' slot='end'>более 337</IonLabel>
                    </IonItem>
                    <IonItem>
                        <IonLabel>Медиатека фильмов и сериалов </IonLabel>
                        <IonLabel className='bold' slot='end'>более 193</IonLabel>
                    </IonItem>
                    <IonItem>
                        <IonLabel>Абонентская плата / в месяц</IonLabel>
                        <IonLabel slot='end'>30</IonLabel>
                    </IonItem>
                </IonList>

                <IonList class='ListTV'>
                <IonListHeader>Oila TV</IonListHeader>
                <IonItem>
                        <IonLabel>ТВ каналы</IonLabel>
                        <IonLabel className='bold' slot='end'>более 220</IonLabel>
                    </IonItem>
                    <IonItem>
                        <IonLabel>Медиатека фильмов и сериалов </IonLabel>
                        <IonLabel className='bold' slot='end'>более 6500 </IonLabel>
                    </IonItem>
                    <IonItem>
                        <IonLabel>Каналы в формате </IonLabel>
                        <IonLabel className='bold' slot='end'> SD и HD</IonLabel>
                    </IonItem>
                    <IonItem>
                        <IonLabel>Абонентская плата / в месяц</IonLabel>
                        <IonLabel slot='end'>25</IonLabel>
                    </IonItem>
                </IonList>
            </IonContent>

        </IonPage>


    );
};

export default IpTv;
