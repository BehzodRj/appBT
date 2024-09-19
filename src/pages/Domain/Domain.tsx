import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { IonContent, IonInput, IonButton, IonItem, IonLabel, IonPage, IonHeader, IonTitle, IonToolbar, IonFooter, IonList, IonTab, IonCard, IonImg, useIonLoading, IonLoading, IonSplitPane, IonRouterOutlet, IonButtons, IonMenuButton, IonBackButton } from '@ionic/react';
import './Domain.css';
import logoApp from '../../assets/img/whiteLogo.png';
import axios from 'axios';
import logo from '../../assets/img/whiteLogo.png';
import { Http, HttpOptions } from '@capacitor-community/http';
import { CapacitorHttp, HttpResponse } from '@capacitor/core';
import Menu from '../../components/Menu';

const Domain: React.FC = () => {

    return (

        <IonPage>

            <IonHeader>
                <IonToolbar className='BalanceToolbar'>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/main" />
                    </IonButtons>
                    <IonTitle>Домен </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonList class='List'>
                <h1>Домен</h1>
                <p>Use the back button to navigate to the previous page.</p>
                 
                </IonList>
            </IonContent>

        </IonPage>


    );
};

export default Domain;
