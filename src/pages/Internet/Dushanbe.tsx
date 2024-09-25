import React, { useEffect, useState } from 'react';
import { IonContent, IonPage, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton, IonList, IonItem, IonListHeader, IonLabel, IonCard } from '@ionic/react';
import { useLocation } from 'react-router-dom';

// Компонент для отображения тарифов
const Dushanbe: React.FC = () => {
    // Получаем переданные данные о тарифе
    const location = useLocation<{ tariffName: string }>();
    const tariffName = location.state?.tariffName;

    // Состояние для хранения данных тарифа
    const [selectedTariff, setSelectedTariff] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    // Получаем данные тарифа с помощью API при загрузке компонента
    useEffect(() => {
        const fetchTariffData = async () => {
            try {
                const response = await fetch(`https://wifi.babilon-t.tj/pages/tarifOptic.php?plan=${tariffName}`);
                if (!response.ok) {
                    throw new Error('Ошибка загрузки данных');
                }
                const data = await response.json();
                setSelectedTariff(data);
                setLoading(false);
            } catch (err) {
                setError('Не удалось загрузить данные');
                setLoading(false);
            }
        };

        fetchTariffData();
    }, [tariffName]);

    // Если данные еще загружаются
    if (loading) {
        return <IonContent>Загрузка...</IonContent>;
    }

    // Если произошла ошибка
    if (error) {
        return <IonContent>{error}</IonContent>;
    }

    // Если данных нет
    if (!selectedTariff) {
        return <IonContent>Тариф не найден</IonContent>;
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar className='BalanceToolbar'>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/dushanbe" />
                    </IonButtons>
                    <IonTitle className='title'>{tariffName}</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonCard>
                   <IonList className='ListEvo'>
                    <IonListHeader>Тариф {tariffName}</IonListHeader>
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
                </IonCard>
                
            </IonContent>
        </IonPage>
    );
};

export default Dushanbe;
