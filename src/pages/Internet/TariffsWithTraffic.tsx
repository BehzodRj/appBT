import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { IonContent, IonInput, IonButton, IonItem, IonLabel, IonPage, IonHeader, IonTitle, IonToolbar, IonFooter, IonList, IonTab, IonCard, IonImg, useIonLoading, IonLoading, IonSplitPane, IonRouterOutlet, IonButtons, IonMenuButton, IonBackButton, IonIcon } from '@ionic/react';
import logoApp from '../../assets/img/whiteLogo.png';
import axios from 'axios';
import logo from '../../assets/img/whiteLogo.png';
import { Http, HttpOptions } from '@capacitor-community/http';
import { CapacitorHttp, HttpResponse } from '@capacitor/core';
import Menu from '../../components/Menu';
import { chevronForwardOutline } from 'ionicons/icons';

const TariffsWithTraffic: React.FC = () => {
    const history = useHistory();
    
      const goToTraffic = (tariffName: string) => {
        history.push({
            pathname: '/traffic',
            state: { tariffName }  // Передаем имя тарифа через state
        });
    };
    return (

        <IonPage>

            <IonHeader>
                <IonToolbar className='BalanceToolbar'>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/main" />
                    </IonButtons>
                    <IonTitle  className='title'>Тарифы с учётом трафика</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonList class='ListInternet'>
                    <IonItem onClick={() => goToTraffic('CyberOptic 30')}>
                        {/* <IonIcon slot='end' src='../../assets/img/chevron-forward-outline.svg'></IonIcon> */}
                        <IonIcon slot='end' icon={chevronForwardOutline}></IonIcon>
                        <IonLabel> CyberOptic 30</IonLabel>
                    </IonItem>
                    <IonItem onClick={() => goToTraffic('CyberOptic 50')}>
                        {/* <IonIcon slot='end' src='../../assets/img/chevron-forward-outline.svg'></IonIcon> */}
                        <IonIcon slot='end' icon={chevronForwardOutline}></IonIcon>
                        <IonLabel> CyberOptic 50</IonLabel>
                    </IonItem>
                    <IonItem onClick={() => goToTraffic('CyberOptic 70')}>
                        {/* <IonIcon slot='end' src='../../assets/img/chevron-forward-outline.svg'></IonIcon> */}
                        <IonIcon slot='end' icon={chevronForwardOutline}></IonIcon>
                        <IonLabel> CyberOptic 70</IonLabel>
                    </IonItem>
                    <IonItem onClick={() => goToTraffic('CyberOptic 90')}>
                        {/* <IonIcon slot='end' src='../../assets/img/chevron-forward-outline.svg'></IonIcon> */}
                        <IonIcon slot='end' icon={chevronForwardOutline}></IonIcon>
                        <IonLabel>CyberOptic 90</IonLabel>
                    </IonItem>
                    <IonItem onClick={() => goToTraffic(' CyberOptic 130')}>
                        {/* <IonIcon slot='end' src='../../assets/img/chevron-forward-outline.svg'></IonIcon> */}
                        <IonIcon slot='end' icon={chevronForwardOutline}></IonIcon>
                        <IonLabel>  CyberOptic 130</IonLabel>
                    </IonItem>
                    <IonItem onClick={() => goToTraffic('CyberOptic 170')}>
                        {/* <IonIcon slot='end' src='../../assets/img/chevron-forward-outline.svg'></IonIcon> */}
                        <IonIcon slot='end' icon={chevronForwardOutline}></IonIcon>
                        <IonLabel> CyberOptic 170</IonLabel>
                    </IonItem>
                    <IonItem onClick={() => goToTraffic('CyberOptic 250')}>
                        {/* <IonIcon slot='end' src='../../assets/img/chevron-forward-outline.svg'></IonIcon> */}
                        <IonIcon slot='end' icon={chevronForwardOutline}></IonIcon>
                        <IonLabel> CyberOptic 250</IonLabel>
                    </IonItem>
                </IonList>
            </IonContent>

        </IonPage>


    );
};

export default TariffsWithTraffic;
