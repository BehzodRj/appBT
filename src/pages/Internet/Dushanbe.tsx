import React from 'react';
import { IonContent, IonPage, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton, IonList, IonItem, IonListHeader, IonLabel } from '@ionic/react';
import { useLocation } from 'react-router-dom';

// Данные для тарифов
const tariffData = {
    "Cyber": {
        traffic: "Безлимитный",
        speed: "1 МБит/с",
        afterLimitSpeed: "10 МБит/с",
        price: "60 сомони"
    },
    "Cyber S": {
        traffic: "Безлимитный",
        speed: "2 МБит/с",
        afterLimitSpeed: "10 МБит/с",
        price: "120 сомони"
    },
    "Cyber M": {
        traffic: "Безлимитный",
        speed: "6 МБит/с",
        afterLimitSpeed: "15 МБит/с",
        price: "230 сомони"
    },
    "Cyber L": {
        traffic: "Безлимитный",
        speed: "9 МБит/с",
        afterLimitSpeed: "15 МБит/с",
        price: "340 сомони"
    },
    "Cyber XL": {
        traffic: "Безлимитный",
        speed: "12 МБит/с",
        afterLimitSpeed: "20 МБит/с",
        price: "450 сомони"
    },
    "Cyber XXL": {
        traffic: "Безлимитный",
        speed: "15 МБит/с",
        afterLimitSpeed: "20 МБит/с",
        price: "560 сомони"
    }
   
};

const Dushanbe: React.FC = () => {
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
                        <IonBackButton defaultHref="/dushanbe" />
                    </IonButtons>
                    <IonTitle  className='title'>{tariffName}</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonList className='ListEvo'>
                    <IonListHeader> Тариф {tariffName}</IonListHeader>
                    <IonItem>
                        <IonLabel>Оплаченный трафик</IonLabel>
                        <IonLabel className='bold' slot='end'>{selectedTariff.traffic}</IonLabel>
                    </IonItem>
                    <IonItem>
                        <IonLabel>Скорость</IonLabel>
                        <IonLabel className='bold' slot='end'>{selectedTariff.speed}</IonLabel>
                    </IonItem>
                    <IonItem>
                        <IonLabel>Скорость доступа на Youtube, Instagram, Facebook</IonLabel>
                        <IonLabel slot='end'>{selectedTariff.afterLimitSpeed}</IonLabel>
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

export default Dushanbe;
