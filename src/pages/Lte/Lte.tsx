import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { IonContent, IonInput, IonButton, IonItem, IonLabel, IonPage, IonHeader, IonTitle, IonToolbar, IonFooter, IonList, IonTab, IonCard, IonImg, useIonLoading, IonLoading, IonSplitPane, IonRouterOutlet, IonButtons, IonMenuButton, IonBackButton, IonIcon } from '@ionic/react';
import './Lte.css';
import logoApp from '../../assets/img/whiteLogo.png';
import axios from 'axios';
import logo from '../../assets/img/whiteLogo.png';
import { Http, HttpOptions } from '@capacitor-community/http';
import { CapacitorHttp, HttpResponse } from '@capacitor/core';
import Menu from '../../components/Menu';
import { chevronForwardOutline } from 'ionicons/icons';

const Lte: React.FC = () => {
    const history = useHistory();

    const goToTarrifsLte = () => {
        history.push('/tariffsLte');
      };

    return (

        <IonPage>

            <IonHeader>
                <IonToolbar className='BalanceToolbar'>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/main" />
                    </IonButtons>
                    <IonTitle>LTE</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonList class='ListInternet'>
                    <IonItem onClick={goToTarrifsLte}>
                        {/* <IonIcon slot='end' src='../../assets/img/chevron-forward-outline.svg'></IonIcon> */}
                        <IonIcon slot='end' icon={chevronForwardOutline}></IonIcon>
                        <IonLabel>Тарифы</IonLabel>
                    </IonItem>
                    {/* <IonItem >
                        <IonIcon slot='end' icon={chevronForwardOutline}></IonIcon>
                        <IonLabel>Пакеты</IonLabel>
                    </IonItem> */}
                    
                </IonList>
            </IonContent>

        </IonPage>


    );
};

export default Lte;
