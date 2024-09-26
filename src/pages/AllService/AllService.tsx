import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { IonContent, IonInput, IonButton, IonItem, IonLabel, IonPage, IonHeader, IonTitle, IonToolbar, IonFooter, IonList, IonTab, IonCard, IonImg, useIonLoading, IonLoading, IonSplitPane, IonRouterOutlet, IonButtons, IonMenuButton, IonBackButton, IonIcon } from '@ionic/react';
import './AllService.css';
import logoApp from '../../assets/img/whiteLogo.png';
import axios from 'axios';
import logo from '../../assets/img/whiteLogo.png';
import { Http, HttpOptions } from '@capacitor-community/http';
import { CapacitorHttp, HttpResponse } from '@capacitor/core';
import Menu from '../../components/Menu';
import { chevronForwardOutline } from 'ionicons/icons';

const AllService: React.FC = () => {
    const history = useHistory();
    const goToTv = () => {
        history.push('/tv');
      };
      const goToTurbo = () => {
        history.push('/turbo');
      };
      const goToLte = () => {
        history.push('/lte');
      };
      const goToOptom = () => {
        history.push('/optom');
      };
      const goToInternet = () => {
        history.push('/internet');
      };

    return (

        <IonPage>

            <IonHeader>
                <IonToolbar className='BalanceToolbar'>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/main" />
                    </IonButtons>
                    <IonTitle className='title'>Все услуги </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>

                <IonCard>
                    <IonList className='ListInternet'>
                        <IonItem onClick={goToInternet} lines='none'>
                            {/* <IonIcon slot='end' src='../../assets/img/chevron-forward-outline.svg'></IonIcon> */}
                            <IonIcon slot='end' icon={chevronForwardOutline}></IonIcon>
                            <IonLabel>Internet</IonLabel>
                        </IonItem>
                    </IonList>
                </IonCard>
                <IonCard>
                    <IonList className='ListInternet'>
                        <IonItem onClick={goToLte} lines='none'>
                            {/* <IonIcon slot='end' src='../../assets/img/chevron-forward-outline.svg'></IonIcon> */}
                            <IonIcon slot='end' icon={chevronForwardOutline}></IonIcon>
                            <IonLabel>LTE</IonLabel>
                        </IonItem>
                    </IonList>
                </IonCard>
                <IonCard>
                    <IonList className='ListInternet'>
                        <IonItem onClick={goToTv} lines='none'>
                            <IonIcon slot='end' icon={chevronForwardOutline}></IonIcon>
                            <IonLabel>IPTV</IonLabel>
                        </IonItem>
                    </IonList>
                </IonCard>
                {/* <IonCard>
                    <IonList className='ListInternet'>
                        <IonItem onClick={goToTarifsWithTraffic} lines='none'>
                            <IonIcon slot='end' icon={chevronForwardOutline}></IonIcon>
                            <IonLabel>С учётом трафика</IonLabel>
                        </IonItem>
                    </IonList>
                </IonCard> */}
            </IonContent>

        </IonPage>


    );
};

export default AllService;
