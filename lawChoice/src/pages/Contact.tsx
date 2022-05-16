import { IonContent, IonPage, IonTitle, IonToolbar, IonFooter, IonInput, IonTextarea, IonItem, IonList, IonItemDivider, IonAlert, IonLabel } from '@ionic/react';
import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import MyHeader from '../components/MyHeader';

const Contact: React.FC = () => {
    const [name, setName] = useState<string>();
    const [email, setEmail] = useState<string>();
    const [message, setMessage] = useState<string>();
    const [messageAlert, showMessageAlert] = useState<boolean>(false);
    let history = useHistory();

    const sendMessage = () => {
        if(!name || !email || !message) {
            showMessageAlert(true);
        } else {
            console.log(name, email, message);
            history.push('/home');
        }
    }


    return (
        <IonPage>
            <MyHeader />
            <IonContent>
                <IonAlert 
                    isOpen={messageAlert}
                    onDidDismiss={() => showMessageAlert(false)}
                    header={'Can not do that'}
                    subHeader={'A little problem'}
                    message={'Name, Email, or Message cannot be empty!'}
                />
                <IonList>
                    <IonItem>
                        <IonInput value={name} placeholder="Name" onIonChange={e => setName(e.detail.value!)}></IonInput>
                    </IonItem>
                    <IonItemDivider></IonItemDivider>
                    <IonItem>
                        <IonInput value={email} placeholder="Email" onIonChange={e => setEmail(e.detail.value!)}></IonInput>
                    </IonItem>
                    <IonItemDivider></IonItemDivider>
                    <IonItem>
                        <IonTextarea 
                        rows={15}
                        value={message} 
                        placeholder="Enter message here" 
                        onIonChange={e => setMessage(e.detail.value!)}></IonTextarea>
                    </IonItem>
                    <IonItemDivider></IonItemDivider>
                    <IonItem button onClick={e => { sendMessage()}}>
                        <IonLabel class="ion-text-center">
                            Send Message
                        </IonLabel>
                    </IonItem>
                </IonList>
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

export default Contact;