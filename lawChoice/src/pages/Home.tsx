import { IonContent, IonPage, IonImg, IonGrid, IonRow, IonCol, useIonViewDidEnter} from '@ionic/react';
import MyHeader from '../components/MyHeader';
import './Home.css';
import {Geolocation} from '@capacitor/geolocation';

const Home: React.FC = () => {

  const coordinates = Geolocation.getCurrentPosition();
  useIonViewDidEnter(() => {
    console.log('Location', coordinates);
  });
  

  return (
    <IonPage>
      <IonContent fullscreen>
        <IonGrid fixed={true}>
          <MyHeader />

          <IonRow class="ion-align-items-center">
            <IonCol size="6">
              <IonImg src="assets/images/lawyers.jpg" />
            </IonCol>
            <IonCol size="3">
              <IonRow>
                Lorem ipsum blah
              </IonRow>
            </IonCol>
            <IonCol size="3">
              <IonImg src="assets/images/faq.jpg" />
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Home;
