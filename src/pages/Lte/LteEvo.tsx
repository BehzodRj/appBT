import React, { useEffect, useState } from 'react';
import { IonContent, IonPage, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton, IonList, IonItem, IonListHeader, IonLabel } from '@ionic/react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const LteEvo: React.FC = () => {
    const location = useLocation<{ tariffName: string }>();
    const tariffName = location.state?.tariffName;
    const [selectedTariff, setSelectedTariff] = useState<any>(null);

    useEffect(() => {
        const fetchTariffData = async () => {
            try {
                const response = await axios.get(`https://wifi.babilon-t.tj/pages/evoTarifs.php?plan=${tariffName}`);
                setSelectedTariff(response.data);
            } catch (error) {
                console.error('Ошибка при получении данных о тарифе:', error);
            }
        };

        fetchTariffData();
    }, [tariffName]);

    if (!selectedTariff) {
        return <IonContent>Загрузка...</IonContent>;
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar className='BalanceToolbar'>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/tariffs" />
                    </IonButtons>
                    <IonTitle className='title'>{tariffName}</IonTitle>
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
