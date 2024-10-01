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
  IonImg,
  IonList,
  IonButton,
} from "@ionic/react";
import "./AutoPay.css";
import card from "../../assets/autopay/cards.svg";

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
      <IonContent className="container_autoPay">
        <IonCard className="card__toggle">
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

        <IonCard className="card__credit-cards">
          <IonList lines="full" className="list">
            <IonItem className="item">
              <IonImg className="img" src={card}></IonImg>

              <div className="card__info">
                <h1>VISA Digital</h1>
                <h2>5058 **** **** 2214</h2>
              </div>
            </IonItem>

            <IonItem className="item">
              <IonImg className="img" src={card}></IonImg>

              <div className="card__info">
                <h1>VISA Digital</h1>
                <h2>5058 **** **** 2214</h2>
              </div>
            </IonItem>
          </IonList>
        </IonCard>

        <IonButton className="add-card__button">Добавить карту</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default AutoPay;
