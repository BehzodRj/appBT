import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { IonContent, IonInput, IonButton, IonItem, IonLabel, IonPage, IonHeader, IonTitle, IonToolbar, IonFooter, IonList, IonTab, IonCard, IonImg, useIonLoading, IonLoading, IonSplitPane, IonRouterOutlet, IonButtons, IonMenuButton, IonBackButton, IonIcon } from '@ionic/react';
import './Internet.css';
import logoApp from '../../assets/img/whiteLogo.png';
import axios from 'axios';
import logo from '../../assets/img/whiteLogo.png';
import { Http, HttpOptions } from '@capacitor-community/http';
import { CapacitorHttp, HttpResponse } from '@capacitor/core';
import Menu from '../../components/Menu';
import { chevronForwardOutline } from 'ionicons/icons';

const Internet: React.FC = () => {
    const history = useHistory();
    const goToTarrifs = () => {
        history.push('/tariffs');
      };
    const goToPakets = () => {
        history.push('/package');
      };
    const goToTarifsForDushanbe = () => {
        history.push('/tarifs_dushanbe');
      };
    const goToTarifsWithTraffic = () => {
        history.push('/with_traffic');
      };

    return (

        <IonPage>

            <IonHeader>
                <IonToolbar className='BalanceToolbar'>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/main" />
                    </IonButtons>
                    <IonTitle>Интернет тарифы </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonList class='ListInternet'>
                    <IonItem onClick={goToTarrifs}>
                        {/* <IonIcon slot='end' src='../../assets/img/chevron-forward-outline.svg'></IonIcon> */}
                        <IonIcon slot='end' icon={chevronForwardOutline}></IonIcon>
                        <IonLabel>Актуальные тарифы</IonLabel>
                    </IonItem>
                    <IonItem  onClick={goToPakets}>
                        {/* <IonIcon slot='end' src='../../assets/img/chevron-forward-outline.svg'></IonIcon> */}
                        <IonIcon slot='end' icon={chevronForwardOutline}></IonIcon>
                        <IonLabel>Актуальные пакеты</IonLabel>
                    </IonItem>
                    <IonItem  onClick={goToTarifsForDushanbe}>
                        <IonIcon slot='end' icon={chevronForwardOutline}></IonIcon>
                        <IonLabel>Для города Душанбе</IonLabel>
                    </IonItem>
                    {/* <IonItem>
                        <IonIcon slot='end' icon={chevronForwardOutline}></IonIcon>
                        <IonLabel>Для регионов</IonLabel>
                    </IonItem> */}
                    <IonItem  onClick={goToTarifsWithTraffic}>
                        {/* <IonIcon slot='end' src='../../assets/img/chevron-forward-outline.svg'></IonIcon> */}
                        <IonIcon slot='end' icon={chevronForwardOutline}></IonIcon>
                        <IonLabel>С учётом трафика</IonLabel>
                    </IonItem>
                </IonList>
            </IonContent>

        </IonPage>


    );
};

export default Internet;
