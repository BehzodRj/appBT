import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { IonContent, IonInput, IonButton, IonItem, IonLabel, IonPage, IonHeader, IonTitle, IonToolbar, IonFooter, IonList, IonTab, IonCard, IonImg, useIonLoading, IonLoading, IonSplitPane, IonRouterOutlet, IonButtons, IonMenuButton, IonBackButton } from '@ionic/react';
import './AddBalance.css';
import logoApp from '../../assets/img/whiteLogo.png';
import axios from 'axios';
import logo from '../../assets/img/whiteLogo.png';
import { Http, HttpOptions } from '@capacitor-community/http';
import { CapacitorHttp, HttpResponse } from '@capacitor/core';
import Menu from '../../components/Menu';

const AddBalance: React.FC = () => {

    return (

        <IonPage>

            <IonHeader>
                <IonToolbar className='BalanceToolbar'>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/main" />
                    </IonButtons>
                    <IonTitle>Пополнить баланс</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonList class='List'>
                    <div className='item'>
                        <IonLabel>Лицевой счет</IonLabel>
                        <IonInput type="number" placeholder="21345"></IonInput>
                    </div>

                    <div className='item'>
                    <IonLabel> Сумма</IonLabel>
                        <IonInput  type="number" placeholder="00.0 TJS"></IonInput>
                    </div>
                    <div className='item'>
                    <IonLabel> Password</IonLabel>
                    <IonInput counter={true} maxlength={20}></IonInput>

                    </div>
                    <IonItem>
                        <IonLabel> Password</IonLabel>
                        <IonInput type="password" value="password"></IonInput>
                    </IonItem>

                    <IonItem>
                        <IonInput label="Email input" type="email" placeholder="email@domain.com"></IonInput>
                    </IonItem>

                    <IonItem>
                        <IonInput label="Telephone input" type="tel" placeholder="888-888-8888"></IonInput>
                    </IonItem>
                </IonList>
                <h1>Page Two</h1>
                <p>Use the back button to navigate to the previous page.</p>
            </IonContent>

        </IonPage>


    );
};

export default AddBalance;
