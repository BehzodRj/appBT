import React, { useEffect, useState } from 'react';
import { IonContent, IonPage, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton, IonList, IonItem, IonListHeader, IonLabel, IonLoading } from '@ionic/react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const Traffic: React.FC = () => {
    // Получаем переданные данные о тарифе
    const location = useLocation<{ tariffName: string }>();
    const tariffName = location.state?.tariffName;

    // Состояние для хранения данных о тарифах
    const [selectedTariff, setSelectedTariff] = useState<any>({
        traffic: "......",
        speed: "......",
        afterLimitSpeed: "......",
        fanSpeed: "......",
        price: "......"
    });
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    // Получаем данные тарифа с сервера через API
    useEffect(() => {
        const fetchTariff = async () => {
            try {
                const response = await axios.get('https://wifi.babilon-t.tj/pages/trafficTarifApi.php'); // Замените на ваш реальный URL
                const tariffs = response.data;

                // Находим выбранный тариф по имени
                const foundTariff = tariffs[tariffName] || {
                    traffic: "......",
                    speed: "......",
                    afterLimitSpeed: "......",
                    fanSpeed: "......",
                    price: "......"
                };

                setSelectedTariff(foundTariff);  // Сохраняем выбранный тариф
                setLoading(false);
            } catch (err) {
                setError('Ошибка при загрузке данных');
                setLoading(false);
            }
        };

        fetchTariff();
    }, [tariffName]);

    // Если данные загружаются, показываем спиннер
    if (loading) {
        return <IonLoading isOpen={loading} message={'Загрузка...'} />;
    }

    // Если возникла ошибка, выводим сообщение
    if (error) {
        return <IonContent>{error}</IonContent>;
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar className='BalanceToolbar'>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/with_traffic" />
                    </IonButtons>
                    <IonTitle className='title'>{tariffName}</IonTitle>
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
                        <IonLabel>Внешний трафик с 23:00 до 07:00</IonLabel>
                        <IonLabel slot='end'>{selectedTariff.afterLimitSpeed}</IonLabel>
                    </IonItem>
                    <IonItem>
                        <IonLabel>Безлимитная скорость:</IonLabel>
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
