import React, { useEffect, useState } from 'react';
import { IonContent, IonPage, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton, IonList, IonItem, IonListHeader, IonLabel, IonCard } from '@ionic/react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const NewsOne: React.FC = () => {
    const location = useLocation<{ tariffName: string }>();
    const tariffName = location.state?.tariffName;
    const [selectedTariff, setSelectedTariff] = useState<any>(null);

    useEffect(() => {
        const fetchTariffData = async () => {
            try {
                const response = await axios.get(`https://wifi.babilon-t.tj/pages/newsApp.php?news=${tariffName}`);
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
                    <IonTitle className='title'></IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonCard>
                   <IonList className='ListEvo'>
                    <IonListHeader> {selectedTariff.title}</IonListHeader>
                    <IonItem lines='none'>
                    <IonLabel>{selectedTariff.text}</IonLabel>

                    </IonItem>
                    <p>{selectedTariff.date}</p>
                </IonList> 
                </IonCard>
                
            </IonContent>
        </IonPage>
    );
};

export default NewsOne;
