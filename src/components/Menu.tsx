import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
  IonRouterOutlet,
} from '@ionic/react';

import { Route, useLocation } from 'react-router-dom';
import { archiveOutline, archiveSharp, calendar, cellular, home, restaurant } from 'ionicons/icons';
import './Menu.css';

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: 'Inicio',
    url: '/pages/Home',
    iosIcon: home,
    mdIcon: home
  },
  {
    title: 'Eventos',
    url: '/pages/Events',
    iosIcon: calendar,
    mdIcon: calendar
  },
  {
    title: 'Restaurantes',
    url: '/pages/Restaurants',
    iosIcon: restaurant,
    mdIcon: restaurant
  },
  {
    title: 'Info restaurantes',
    url: '/pages/RatingRestaurant',
    iosIcon: cellular,
    mdIcon: cellular
  }
];

const labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>Master's Flavor</IonListHeader>
          <IonNote>Menú principal</IonNote>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                  <IonIcon aria-hidden="true" slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>

        {/* <IonList id="labels-list">
          <IonListHeader>Labels</IonListHeader>
          {labels.map((label, index) => (
            <IonItem lines="none" key={index}>
              <IonIcon aria-hidden="true" slot="start" icon={bookmarkOutline} />
              <IonLabel>{label}</IonLabel>
            </IonItem>
          ))}
          </IonList> */}
      </IonContent>

      <IonRouterOutlet id='main'>
        <Route exact path="/page/Events" />
      </IonRouterOutlet>
    </IonMenu>
  );
};

export default Menu;
