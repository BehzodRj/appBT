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

const TariffsLte: React.FC = () => {
    const history = useHistory();
    
      const goToLteEvo = (tariffName: string) => {
        history.push({
            pathname: '/LteEvo',
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
                    <IonTitle>LTE</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonList class='ListInternet'>
                    <IonItem onClick={() => goToLteEvo('EVO 1')}>
                        {/* <IonIcon slot='end' src='../../assets/img/chevron-forward-outline.svg'></IonIcon> */}
                        <IonIcon slot='end' icon={chevronForwardOutline}></IonIcon>
                        <IonLabel> EVO 1</IonLabel>
                    </IonItem>
                    <IonItem onClick={() => goToLteEvo('EVO 5')}>
                        {/* <IonIcon slot='end' src='../../assets/img/chevron-forward-outline.svg'></IonIcon> */}
                        <IonIcon slot='end' icon={chevronForwardOutline}></IonIcon>
                        <IonLabel> EVO 5</IonLabel>
                    </IonItem>
                    <IonItem onClick={() => goToLteEvo('EVO 10')}>
                        {/* <IonIcon slot='end' src='../../assets/img/chevron-forward-outline.svg'></IonIcon> */}
                        <IonIcon slot='end' icon={chevronForwardOutline}></IonIcon>
                        <IonLabel> EVO 10</IonLabel>
                    </IonItem>
                    <IonItem onClick={() => goToLteEvo('EVO 30')}>
                        {/* <IonIcon slot='end' src='../../assets/img/chevron-forward-outline.svg'></IonIcon> */}
                        <IonIcon slot='end' icon={chevronForwardOutline}></IonIcon>
                        <IonLabel> EVO 30</IonLabel>
                    </IonItem>
                    <IonItem onClick={() => goToLteEvo('EVO 50')}>
                        {/* <IonIcon slot='end' src='../../assets/img/chevron-forward-outline.svg'></IonIcon> */}
                        <IonIcon slot='end' icon={chevronForwardOutline}></IonIcon>
                        <IonLabel> EVO 50</IonLabel>
                    </IonItem>
                    <IonItem onClick={() => goToLteEvo('EVO 60')}>
                        {/* <IonIcon slot='end' src='../../assets/img/chevron-forward-outline.svg'></IonIcon> */}
                        <IonIcon slot='end' icon={chevronForwardOutline}></IonIcon>
                        <IonLabel> EVO 60</IonLabel>
                    </IonItem>
                    <IonItem onClick={() => goToLteEvo('EVO 90')}>
                        {/* <IonIcon slot='end' src='../../assets/img/chevron-forward-outline.svg'></IonIcon> */}
                        <IonIcon slot='end' icon={chevronForwardOutline}></IonIcon>
                        <IonLabel> EVO 90</IonLabel>
                    </IonItem>
                    <IonItem onClick={() => goToLteEvo('EVO 100')}>
                        {/* <IonIcon slot='end' src='../../assets/img/chevron-forward-outline.svg'></IonIcon> */}
                        <IonIcon slot='end' icon={chevronForwardOutline}></IonIcon>
                        <IonLabel> EVO 100</IonLabel>
                    </IonItem>
                    <IonItem onClick={() => goToLteEvo('EVO 120')}>
                        {/* <IonIcon slot='end' src='../../assets/img/chevron-forward-outline.svg'></IonIcon> */}
                        <IonIcon slot='end' icon={chevronForwardOutline}></IonIcon>
                        <IonLabel> EVO 120</IonLabel>
                    </IonItem>
                    <IonItem onClick={() => goToLteEvo('EVO 160')}>
                        {/* <IonIcon slot='end' src='../../assets/img/chevron-forward-outline.svg'></IonIcon> */}
                        <IonIcon slot='end' icon={chevronForwardOutline}></IonIcon>
                        <IonLabel> EVO 160</IonLabel>
                    </IonItem>
                    <IonItem onClick={() => goToLteEvo('EVO 200')}>
                        {/* <IonIcon slot='end' src='../../assets/img/chevron-forward-outline.svg'></IonIcon> */}
                        <IonIcon slot='end' icon={chevronForwardOutline}></IonIcon>
                        <IonLabel> EVO 200</IonLabel>
                    </IonItem>
                    <IonItem onClick={() => goToLteEvo('EVO 500')}>
                        {/* <IonIcon slot='end' src='../../assets/img/chevron-forward-outline.svg'></IonIcon> */}
                        <IonIcon slot='end' icon={chevronForwardOutline}></IonIcon>
                        <IonLabel> EVO 500</IonLabel>
                    </IonItem>
                   
                    
                </IonList>
            </IonContent>

        </IonPage>


    );
};

export default TariffsLte;
