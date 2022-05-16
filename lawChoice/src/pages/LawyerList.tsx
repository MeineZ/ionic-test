import {IonContent, IonPage, IonList, IonItem,IonAvatar, IonLabel, IonImg} from '@ionic/react';
import React, {useState} from 'react';
import MyHeader from '../components/MyHeader';
import lawyerListing from './LawyerDB';

const LawyerList: React.FC = () => {
    const [list] = useState<Array<any>>(lawyerListing);
    
    const currentListing = list.map(lawyer=>
        <IonItem key={lawyer.id} button routerLink={lawyer.path} >
            <IonAvatar slot="start">
                <IonImg src={lawyer.pic} />
            </IonAvatar>
            <IonLabel>
                <h2>{lawyer.name}</h2>
                <h3>{lawyer.name}</h3>
                <p>{lawyer.phone}</p>
            </IonLabel>
        </IonItem>
    );


    return (
        <IonPage>
            <MyHeader />
            <IonContent>
                <IonList>
                    {currentListing}
                </IonList>
            </IonContent>
        </IonPage>
    );
};

export default LawyerList;