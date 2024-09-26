import React from "react";
import {
  IonContent,
  IonItem,
  IonLabel,
  IonPage,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonCard,
  IonToggle,
  IonText,
} from "@ionic/react";
import "./AutoPay.css";

const AutoPay: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="BalanceToolbar">
          <IonButtons slot="start">
            <IonBackButton defaultHref="/main" />
          </IonButtons>
          <IonTitle className="title">Автоплатеж</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard className="card">
          <IonItem lines="none" className="item">
            <IonToggle slot="end" class="toggle" color="success"></IonToggle>
            <IonLabel slot="start" className="label">
              Автоплатеж
            </IonLabel>
          </IonItem>
        </IonCard>

        <h1 className="description">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore id
          dolore ea inventore tenetur iusto praesentium, eaque cumque,
          laudantium adipisci iure esse nihil eligendi consectetur, odit
          voluptates aspernatur minus voluptas.
        </h1>

        {/* <IonCard>
            <IonItem>
                
            </IonItem>
        </IonCard> */}
      </IonContent>
    </IonPage>
  );
};

export default AutoPay;
