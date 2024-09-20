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

const TariffsDushanbe: React.FC = () => {
    const history = useHistory();
    
      const goToTarifsDushanbe = (tariffName: string) => {
        history.push({
            pathname: '/dushanbe',
            state: { tariffName }  // Передаем имя тарифа через state
        });
    };
    return (

        <IonPage>

            <IonHeader>
                <IonToolbar className='BalanceToolbar'>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/internet" />
                    </IonButtons>
                    <IonTitle  className='title'>Тарифы для города Душанбе</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonList class='ListInternet'>
                    <IonItem onClick={() => goToTarifsDushanbe('Cyber')}>
                        {/* <IonIcon slot='end' src='../../assets/img/chevron-forward-outline.svg'></IonIcon> */}
                        <IonIcon slot='end' icon={chevronForwardOutline}></IonIcon>
                        <IonLabel> Cyber</IonLabel>
                    </IonItem>
                    <IonItem onClick={() => goToTarifsDushanbe('Cyber S')}>
                        {/* <IonIcon slot='end' src='../../assets/img/chevron-forward-outline.svg'></IonIcon> */}
                        <IonIcon slot='end' icon={chevronForwardOutline}></IonIcon>
                        <IonLabel> Cyber S</IonLabel>
                    </IonItem>
                    <IonItem onClick={() => goToTarifsDushanbe('Cyber M')}>
                        {/* <IonIcon slot='end' src='../../assets/img/chevron-forward-outline.svg'></IonIcon> */}
                        <IonIcon slot='end' icon={chevronForwardOutline}></IonIcon>
                        <IonLabel> Cyber M</IonLabel>
                    </IonItem>
                    <IonItem onClick={() => goToTarifsDushanbe('Cyber L')}>
                        {/* <IonIcon slot='end' src='../../assets/img/chevron-forward-outline.svg'></IonIcon> */}
                        <IonIcon slot='end' icon={chevronForwardOutline}></IonIcon>
                        <IonLabel> Cyber L</IonLabel>
                    </IonItem>
                    <IonItem onClick={() => goToTarifsDushanbe('Cyber XL')}>
                        {/* <IonIcon slot='end' src='../../assets/img/chevron-forward-outline.svg'></IonIcon> */}
                        <IonIcon slot='end' icon={chevronForwardOutline}></IonIcon>
                        <IonLabel> Cyber XL</IonLabel>
                    </IonItem>
                    <IonItem onClick={() => goToTarifsDushanbe('Cyber XXL')}>
                        {/* <IonIcon slot='end' src='../../assets/img/chevron-forward-outline.svg'></IonIcon> */}
                        <IonIcon slot='end' icon={chevronForwardOutline}></IonIcon>
                        <IonLabel> Cyber XXL</IonLabel>
                    </IonItem>
                </IonList>
            </IonContent>

        </IonPage>


    );
};

export default TariffsDushanbe;
