import React from 'react';
import { IonContent, IonPage, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton, IonList, IonItem, IonListHeader, IonLabel } from '@ionic/react';
import { useLocation } from 'react-router-dom';

// Данные для тарифов
const tariffData = {
    "EVO 1": {
        traffic: "1 ГБ",
        speed: "до 10 МБит/с",
        afterLimitSpeed: "128 Кбит/с",
        price: "15 сомони"
    },
    "EVO 5": {
        traffic: "5 ГБ",
        speed: "до 10 МБит/с",
        afterLimitSpeed: "128 Кбит/с",
        price: "38 сомони"
    },
    "EVO 10": {
        traffic: "10 ГБ",
        speed: "до 10 МБит/с",
        afterLimitSpeed: "128 Кбит/с",
        price: "75 сомони"
    },
    "EVO 30": {
        traffic: "30 ГБ",
        speed: "до 10 МБит/с",
        afterLimitSpeed: "256 Кбит/с",
        price: "186 сомони"
    },
    "EVO 50": {
        traffic: "50 ГБ",
        speed: "до 10 МБит/с",
        afterLimitSpeed: "256 Кбит/с",
        price: "310 сомони"
    },
    "EVO 60": {
        traffic: "60 ГБ",
        speed: "до 10 МБит/с",
        afterLimitSpeed: "512 Кбит/с",
        price: "372 сомони"
    },
    "EVO 90": {
        traffic: "90 ГБ",
        speed: "до 10 МБит/с",
        afterLimitSpeed: "512 Кбит/с",
        price: "496 сомони"
    },
    "EVO 100": {
        traffic: "100 ГБ",
        speed: "до 10 МБит/с",
        afterLimitSpeed: "512 Кбит/с",
        price: "620 сомони"
    },
    "EVO 120": {
        traffic: "120 ГБ",
        speed: "до 10 МБит/с",
        afterLimitSpeed: "512 Кбит/с",
        price: "744 сомони"
    },
    "EVO 160": {
        traffic: "160 ГБ",
        speed: "до 10 МБит/с",
        afterLimitSpeed: "512 Кбит/с",
        price: "868 сомони"
    },
    "EVO 200": {
        traffic: "200 ГБ",
        speed: "до 10 МБит/с",
        afterLimitSpeed: "512 Кбит/с",
        price: "1239 сомони"
    },
    "EVO 500": {
        traffic: "500 ГБ",
        speed: "до 10 МБит/с",
        afterLimitSpeed: "1024 Кбит/с",
        price: "1611 сомони"
    }
};

const LteEvo: React.FC = () => {
    // Получаем переданные данные о тарифе
    const location = useLocation<{ tariffName: string }>();
    const tariffName = location.state?.tariffName;

    // Получаем данные для выбранного тарифа
    const selectedTariff = tariffData[tariffName] || {
        traffic: "......",
        speed: "......",
        afterLimitSpeed: "......",
        price: "......"
    };

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar className='BalanceToolbar'>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/tariffs" />
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
                        <IonLabel>Скорость после окончания оплаченного трафика</IonLabel>
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

export default LteEvo;
