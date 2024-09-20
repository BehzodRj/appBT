import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  IonContent,
  IonInput,
  IonButton,
  IonItem,
  IonLabel,
  IonPage,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonFooter,
  IonList,
  IonTab,
  IonCard,
  IonImg,
  useIonLoading,
  IonLoading,
  IonSplitPane,
  IonRouterOutlet,
  IonButtons,
  IonMenuButton,
  IonBackButton,
  IonCardTitle,
  IonCardHeader,
  IonRadioGroup,
  IonRadio,
  IonIcon,
} from "@ionic/react";
import "./AddBalance.css";
import logoApp from "../../assets/img/whiteLogo.png";
import axios from "axios";
import logo from "../../assets/img/whiteLogo.png";
import { Http, HttpOptions } from "@capacitor-community/http";
import { CapacitorHttp, HttpResponse } from "@capacitor/core";
import Menu from "../../components/Menu";
import wallet from "../../assets/addBalance/wallet_blue.svg";

const AddBalance: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="BalanceToolbar">
          <IonButtons slot="start" className="button">
            <IonBackButton defaultHref="/main" />
          </IonButtons>
          <IonTitle className="title">Пополнить баланс</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard className="card-info">
          <IonCardHeader className="header">Babilon T</IonCardHeader>
          <IonList lines="inset" class="list">
            <IonItem className="item">
              <div className="item_native">
                <IonLabel className="label">Лицевой счет</IonLabel>
                <IonInput
                  aria-label=""
                  className="input"
                  type="number"
                ></IonInput>
              </div>
            </IonItem>

            <IonItem lines="none" className="item">
              <div className="item_native">
                <IonLabel className="label">Сумма</IonLabel>
                <IonInput
                  aria-label=""
                  className="input"
                  type="number"
                  placeholder="00.0 TJS"
                ></IonInput>
              </div>
            </IonItem>
          </IonList>
        </IonCard>

        <IonCard className="card-wallet">
          <IonCardHeader className="header">Babilon T</IonCardHeader>
          <IonList lines="inset" class="list">
            <IonRadioGroup value="0">
              <IonItem className="item">
                <div className="item_native">
                  <div className="info__block">
                    <IonImg class="wallet_icon" src={wallet}></IonImg>
                    <h1>С помощью MyBabilon</h1>
                  </div>
                  <div className="choosen__block">
                    {/* <h1>500 TJS</h1> */}
                    <IonRadio slot="end" class="radio" value="0"></IonRadio>
                  </div>
                </div>
              </IonItem>
            </IonRadioGroup>
          </IonList>
          
          <IonButton className="add_balance">Оплатить</IonButton>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default AddBalance;
