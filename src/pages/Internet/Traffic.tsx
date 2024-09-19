import React from 'react';
import { IonContent, IonPage, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton, IonList, IonItem, IonListHeader, IonLabel } from '@ionic/react';
import { useLocation } from 'react-router-dom';

// Данные для тарифов
const tariffData = {
    "CyberOptic 30": {
        traffic: "30 ГБ",
        speed: "5 МБит/с",
        afterLimitSpeed: "неограничен",
        fanSpeed: "256 кбит/с",
        price: "77 сомони"
    },
    "CyberOptic 50": {
        traffic: "50 ГБ",
        speed: "10 МБит/с",
        afterLimitSpeed: "неограничен",
        fanSpeed: "512 кбит/с",
        price: "130 сомони"
    },
    "CyberOptic 70": {
        traffic: "70 ГБ",
        speed: "10 МБит/с",
        afterLimitSpeed: "неограничен",
        fanSpeed: "1024 кбит/с",
        price: "190 сомони"
    },
    "CyberOptic 90": {
        traffic: "90 ГБ",
        speed: "15 МБит/с",
        afterLimitSpeed: "неограничен",
        fanSpeed: "1024 кбит/с",
        price: "270 сомони"
    },
    "CyberOptic 130": {
        traffic: "130 ГБ",
        speed: "15 МБит/с",
        afterLimitSpeed: "неограничен",
        fanSpeed: "1536 кбит/с",
        price: "350 сомони"
    },
    "CyberOptic 170": {
        traffic: "170 ГБ",
        speed: "20 МБит/с",
        afterLimitSpeed: "неограничен",
        fanSpeed: "1536 кбит/с",
        price: "445 сомони"
    },
    "CyberOptic 250": {
        traffic: "250 ГБ",
        speed: "20 МБит/с",
        afterLimitSpeed: "неограничен",
        fanSpeed: "2048 кбит/с",
        price: "560 сомони"
    }
    
   
};

const Traffic: React.FC = () => {
    // Получаем переданные данные о тарифе
    const location = useLocation<{ tariffName: string }>();
    const tariffName = location.state?.tariffName;

    // Получаем данные для выбранного тарифа
    const selectedTariff = tariffData[tariffName] || {
        traffic: "......",
        speed: "......",
        afterLimitSpeed: "......",
    };

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar className='BalanceToolbar'>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/with_traffic" />
                    </IonButtons>
                    <IonTitle>{tariffName}</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonList className='ListEvo'>
                    <IonListHeader> Тариф {tariffName}</IonListHeader>
                    <IonItem>
                        <IonLabel>Оплаченный объём:</IonLabel>
                        <IonLabel className='bold' slot='end'>{selectedTariff.traffic}</IonLabel>
                    </IonItem>
                    <IonItem>
                        <IonLabel>Скорость</IonLabel>
                        <IonLabel className='bold' slot='end'>{selectedTariff.speed}</IonLabel>
                    </IonItem>
                    <IonItem>
                        <IonLabel>Внешний трафик с 23:00 до 07:00 </IonLabel>
                        <IonLabel slot='end'>{selectedTariff.afterLimitSpeed}</IonLabel>
                    </IonItem>
                    <IonItem>
                        <IonLabel>Безлимитная скорость: </IonLabel>
                        <IonLabel slot='end'>{selectedTariff.fanSpeed}</IonLabel>
                    </IonItem>
                    <IonItem>
                        <IonLabel>Абонентская плата / в месяц</IonLabel>
                        <IonLabel slot='end'>{selectedTariff.price}</IonLabel>
                    </IonItem>
                    <p>Для подключения позвоните в Call-Center <br/> <a href="tel:+992446006060">44 600-60-60</a></p>
                </IonList>
            </IonContent>
        </IonPage>
    );
};

export default Traffic;
