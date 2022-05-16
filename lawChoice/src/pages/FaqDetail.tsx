import { IonPage, IonContent, IonButton, IonIcon, IonCard, IonCardHeader, IonCardTitle, IonCardContent } from '@ionic/react';
import React, {useState} from 'react';
import MyHeader from '../components/MyHeader';
import FaqListing from './FaqDB';
import { arrowBackOutline } from 'ionicons/icons';
import { useParams } from 'react-router-dom';

const FaqDetail: React.FC<any> = () => {
    type ParamTypes = {
        id: string;
    }

    let {id} = useParams<ParamTypes>();
    const [list] = useState<Array<any>>(FaqListing);
    const selectedIssue = list.find((issue) => {
        return issue.id === id;
    });

    return  (
        <IonPage>
            <MyHeader />
            <IonContent>
                <IonButton color="light" routerLink="/faq">
                    <IonIcon slot="start" icon={arrowBackOutline} />
                    Back
                </IonButton>
                <IonCard>
                    <IonCardHeader>
                        <IonCardTitle>{selectedIssue.title}</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent>
                        {selectedIssue.answer}
                    </IonCardContent>
                </IonCard>

            </IonContent>
        </IonPage>
    );
};

export default FaqDetail;