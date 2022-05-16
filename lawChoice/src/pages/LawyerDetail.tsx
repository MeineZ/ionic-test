import { IonPage, IonContent, IonButton, IonIcon, IonImg, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent } from '@ionic/react';
import React, {useState} from 'react';
import MyHeader from '../components/MyHeader';
import LawyerListing from './LawyerDB';
import './LawyerDetail.css';
import { arrowBackOutline } from 'ionicons/icons';
import { useParams } from 'react-router-dom';

const LawyerDetail: React.FC<any> = () => {
    type ParamTypes = {
        id: string;
    }

    let {id} = useParams<ParamTypes>();
    const [list] = useState<Array<any>>(LawyerListing);
    const selectedLawyer = list.find((lawyer) => {
        return lawyer.id === id;
    });

    return  (
        <IonPage>
            <MyHeader />
            <IonContent>
                <IonButton color="light" routerLink="/lawyerlist">
                    <IonIcon slot="start" icon={arrowBackOutline} />
                    Back
                </IonButton>
                <IonCard>
                    <IonImg class="detailImage" src={selectedLawyer.pic} />
                    <IonCardHeader>
                        <IonCardTitle>{selectedLawyer.name}</IonCardTitle>
                        <IonCardSubtitle>{selectedLawyer.phone}</IonCardSubtitle>
                        <IonCardSubtitle>{selectedLawyer.web}</IonCardSubtitle>
                    </IonCardHeader>
                    <IonCardContent>
                        {selectedLawyer.info}
                    </IonCardContent>
                </IonCard>

            </IonContent>
        </IonPage>
    );
};

export default LawyerDetail;