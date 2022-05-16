import { IonContent, IonPage, IonTitle, IonToolbar, IonImg, IonFooter} from '@ionic/react';
import React from 'react';
import MyHeader from '../components/MyHeader';

const About: React.FC = () => {
    return (
        <IonPage>
            <MyHeader />
            <IonImg src="assets/images/city.jpg" />
            <IonContent class="ion-padding">
                <h1>We Create Dreams</h1>
                
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>

                <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                </p>
            </IonContent>
            <IonFooter>
                <IonToolbar>
                    <IonTitle class="ion-text-center">Created by Dream-Makers</IonTitle>
                    <IonTitle class="ion-text-center" size="small">1313 MockingBird Lane</IonTitle>
                </IonToolbar>
            </IonFooter>
        </IonPage>
    );
}

export default About;