import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { IonContent, IonInput, IonButton, IonItem, IonLabel, IonPage, IonHeader, IonTitle, IonToolbar, IonFooter, IonList, IonTab, IonCard, IonImg, useIonLoading, IonLoading, IonSplitPane, IonRouterOutlet } from '@ionic/react';
import './login.css';
import logo from '../../assets/img/whiteLogo.png';
import { CapacitorHttp } from '@capacitor/core';

const LoginForm: React.FC = () => {
  const [username, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory(); // Получаем объект history для управления роутингом

  useEffect(() => {
    const token = localStorage.getItem('token');
    
    if(token != null) {
      history.push('/profile')
    }
   }, []);
   
  console.log('Email:');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const doPost = async () => {
    const data = {
      login: username,
      password: password
    };


    try {
      const formData = new FormData();
      formData.append('login', username);
      formData.append('password', password);
      console.log(formData)
      const options = {
        url: 'https://api.btt.tj/api/login',

        headers: {
          'Content-Type': 'application/json'
        },
        data: data,

      };
      // const response: HttpResponse = await Http.post(options);
      const response = await CapacitorHttp.request({ ...options, method: 'POST' })
      //  await CapacitorHttp.post(options).then((response)=>{
      //      console.log("data", response);

      //   });
      console.log("data", response);
      const obj = response.data;
      console.log("obj", obj);
      console.log('Response data:', response.data);
      console.log('Status code:', response.status);

      localStorage.setItem('token', obj.access_token);
      localStorage.setItem('user_id', obj.user_id);
      // // Дополнительная обработка ответа...
      setIsLoading(false);
      if (response.status == 200) {
        // history.push('/main');
        history.push('/profile');
      } else if (response.status == 401) {
        setIsLoading(false);
        alert('Неверный логин или парол!');
      }

    } catch (error) {
      console.error('Error:', error);
      setIsLoading(false);
      // Обработка ошибок...
    }
  };

  const handleLogin = async () => {
    localStorage.clear();
    console.log('Email:', username);
    console.log('Password:', password);
    if (!username || !password) {
      // Если одно из полей не заполнено, отображаем предупреждение
      alert('Пожалуйста, заполните все поля.');
      return;
    }
    setIsLoading(true);
    doPost();
  };

  return (

    <IonContent>

      {/* <IonHeader>
        <IonToolbar className='headerLogin'>
          <IonTitle>Babilon-T</IonTitle>
        </IonToolbar>
      </IonHeader> */}
      <IonCard className='content'>
        <div className="centered-content imgLogo">

          <IonImg className='img' src={logo} alt="logo" ></IonImg>
          <IonLabel className='loginText'>Вход в личный кабинет</IonLabel>
          <IonItem className='login'>
            <IonLabel position="floating">Email</IonLabel>
            <IonInput type="email" value={username} onIonChange={(e) => setEmail(e.detail.value!)}></IonInput>
          </IonItem>

          <IonItem className='password'>
            <IonLabel position="floating">Password</IonLabel>
            {/* <IonInput type="password" value={password} onIonChange={(e) => setPassword(e.detail.value!)}></IonInput> */}
            <IonInput aria-label="password" type="password" value={password} onIonChange={(e) => { const newPassword = e.detail.value || ''; setPassword(newPassword); }}></IonInput>
          </IonItem>
          <div className='buttonLogin'>

            <IonButton style={{ borderRadius: '50px' }} className='loginButton' id='open-loading' expand="block" onClick={handleLogin}>Войти</IonButton>
          </div>
          <IonLoading isOpen={isLoading} message="Loading..." spinner="circles" />

        </div>
      </IonCard>
      {/* <IonFooter collapse="fade" className='footerLogin'>
        <IonToolbar>
          <IonTitle>Babilon</IonTitle>
        </IonToolbar>
      </IonFooter> */}
    </IonContent>
  );
};

export default LoginForm;
