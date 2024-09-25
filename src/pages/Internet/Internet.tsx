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
                    <IonTitle className='title'>Интернет тарифы </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>

                <IonCard>
                    <IonList className='ListInternet'>
                        <IonItem onClick={goToTarrifs} lines='none'>
                            {/* <IonIcon slot='end' src='../../assets/img/chevron-forward-outline.svg'></IonIcon> */}
                            <IonIcon slot='end' icon={chevronForwardOutline}></IonIcon>
                            <IonLabel>Актуальные тарифы</IonLabel>
                        </IonItem>
                    </IonList>
                </IonCard>
                <IonCard>
                    <IonList className='ListInternet'>
                        <IonItem onClick={goToPakets} lines='none'>
                            {/* <IonIcon slot='end' src='../../assets/img/chevron-forward-outline.svg'></IonIcon> */}
                            <IonIcon slot='end' icon={chevronForwardOutline}></IonIcon>
                            <IonLabel>Актуальные пакеты</IonLabel>
                        </IonItem>
                    </IonList>
                </IonCard>
                <IonCard>
                    <IonList className='ListInternet'>
                        <IonItem onClick={goToTarifsForDushanbe} lines='none'>
                            <IonIcon slot='end' icon={chevronForwardOutline}></IonIcon>
                            <IonLabel>Для города Душанбе</IonLabel>
                        </IonItem>
                    </IonList>
                </IonCard>
                <IonCard>
                    <IonList className='ListInternet'>
                        <IonItem onClick={goToTarifsWithTraffic} lines='none'>
                            {/* <IonIcon slot='end' src='../../assets/img/chevron-forward-outline.svg'></IonIcon> */}
                            <IonIcon slot='end' icon={chevronForwardOutline}></IonIcon>
                            <IonLabel>С учётом трафика</IonLabel>
                        </IonItem>
                    </IonList>
                </IonCard>
            </IonContent>

        </IonPage>


    );
};

export default Internet;
