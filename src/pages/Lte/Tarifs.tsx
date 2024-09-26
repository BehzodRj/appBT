import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { IonContent, IonHeader, IonPage, IonToolbar, IonTitle, IonButtons, IonBackButton, IonList, IonItem, IonLabel, IonIcon, IonLoading, IonCard } from '@ionic/react';
import { chevronForwardOutline } from 'ionicons/icons';
import axios from 'axios';  // импортируем axios

const TariffsDushanbe: React.FC = () => {
    const history = useHistory();
    
    // Состояния для хранения списка тарифов, состояния загрузки и ошибок
    const [tariffs, setTariffs] = useState<string[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    // Получаем список тарифов через API при загрузке компонента
    useEffect(() => {
        const fetchTariffs = async () => {
            try {
                const response = await axios.get('https://wifi.babilon-t.tj/pages/tarifsDushanbe.php?lte');  // Замените на ваш реальный URL API
                setTariffs(response.data);  // Сохраняем данные в состоянии
                setLoading(false);
            } catch (err) {
                setError('Ошибка при загрузке тарифов');
                setLoading(false);
            }
        };

        fetchTariffs();
    }, []);

    // Функция для перехода на страницу с информацией о тарифе
    const goToLteEvo = (tariffName: string) => {
        history.push({
            pathname: '/LteEvo',
            state: { tariffName }  // Передаем имя тарифа через state
        });
    };

    // Показать спиннер, пока данные загружаются
    if (loading) {
        return <IonLoading isOpen={loading} message={'Загрузка...'} />;
    }

    // Если возникла ошибка, вывести сообщение
    if (error) {
        return <IonContent>{error}</IonContent>;
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar className='BalanceToolbar'>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/Lte" />
                    </IonButtons>
                    <IonTitle className='title'>LTE</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                
                {tariffs.map(tariff => (
                <IonCard  key={tariff} onClick={() => goToLteEvo(tariff)}>
                    <IonList className='ListInternet'>
                        <IonItem lines='none'>
                            {/* <IonIcon slot='end' src='../../assets/img/chevron-forward-outline.svg'></IonIcon> */}
                            <IonIcon slot='end' icon={chevronForwardOutline}></IonIcon>
                            <IonLabel>{tariff}</IonLabel>
                        </IonItem>
                    </IonList>
                </IonCard>
                  ))}
            </IonContent>
        </IonPage>
    );
};

export default TariffsDushanbe;
