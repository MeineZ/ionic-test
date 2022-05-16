import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact, IonMenu, IonContent, IonList, IonItem, IonLabel } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import LawyerList from './pages/LawyerList';
import LawyerDetail from './pages/LawyerDetail';
import FaqList from './pages/Faq';
import FaqDetail from './pages/FaqDetail';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonMenu side="start" menuId="first" contentId="main">
      <IonContent>
        <IonList>
          <IonItem button routerLink="/home">
            <IonLabel class="ion-text-center">
              <strong>LawChoice</strong>
            </IonLabel>
          </IonItem>

          <IonItem button routerLink="/about">
            <IonLabel class="ion-text-center">
              ABOUT US
            </IonLabel>
          </IonItem>
          <IonItem button routerLink="/contact">
            <IonLabel class="ion-text-center">
              CONTACT US
            </IonLabel>
          </IonItem>

          <IonItem button routerLink="/lawyerlist">
            <IonLabel class="ion-text-center">
              LAWYERS
            </IonLabel>
          </IonItem>
          <IonItem button routerLink="/faq">
            <IonLabel class="ion-text-center">
              FAQ
            </IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonMenu>


    <IonReactRouter>
      <IonRouterOutlet id="main">
        <Route exact path="/faqdetail/:id">
          <FaqDetail />
        </Route>
        <Route exact path="/faq">
          <FaqList />
        </Route>
        <Route exact path="/lawyerdetail/:id">
          <LawyerDetail />
        </Route>
        <Route exact path="/lawyerlist">
          <LawyerList />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
