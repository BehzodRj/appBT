import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
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
  IonCard,
  IonImg,
  IonButtons,
  IonBackButton,
  IonCardHeader,
  IonRadioGroup,
  IonRadio,
  IonSelect,
} from "@ionic/react";
import "./AddBalance.css";
import wallet from "../../assets/addBalance/wallet_blue.svg";
import { IonSelectOption } from "@ionic/react";
import { CapacitorHttp } from "@capacitor/core";

const AddBalance: React.FC = () => {
  // Получаем переданные данные о тарифе
  const location = useLocation<{ selectedValue: string }>();
  const personalAccountDefault = location.state?.selectedValue;
  const [personalAccountData, setPersonalAccountData] = useState([]);
  const [personalAccountCurrent, setPersonalAccountCurrent] = useState("");
  const [amount, setAmount] = useState("");

  useEffect(() => {
    doGet();
  }, []);

  function doGet() {
    const storedToken = localStorage.getItem("token");
    const storedUserId = localStorage.getItem("user_id");

    const options = {
      url: `https://api.btt.tj/api/getUserInfo/${storedUserId}`,
      headers: {
        Authorization: `Bearer ${storedToken}`,
        "Content-Type": "application/json",
      },
    };

    CapacitorHttp.get(options)
      .then((response) => {
        console.log("Response", response);
        let personalAccountArray = [];
        Object.entries(response.data.accounts_info).map(([key, value]) => {
          personalAccountArray.push(key);
        });

        setPersonalAccountData(personalAccountArray);
        setPersonalAccountCurrent(personalAccountDefault);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function payToMyBabilon() {
    window.open(`https://my1.babilon-m.tj/smartpay?id=596&amount=${amount}&account=${personalAccountCurrent}`)
  }

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
                <IonSelect
                  className="input"
                  value={personalAccountCurrent}
                  onIonChange={(e) => {
                    setPersonalAccountCurrent(e.detail.value!);
                  }}
                >
                  {personalAccountData.map((personalAccountMap, index) => (
                    <IonSelectOption key={index}>{ personalAccountMap }</IonSelectOption>
                  ))}
                </IonSelect>
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
                  value={amount}
                  onIonInput={(e) => {
                    setAmount(e.detail.value!);
                  }}
                ></IonInput>
              </div>

              {amount.length > 0 && (
                <span className="ps__span--tjs" slot="end">
                  TJS
                </span>
              )}
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

          <IonButton className="add_balance" disabled={ amount.length < 1 } onClick={payToMyBabilon} >Оплатить</IonButton>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default AddBalance;
