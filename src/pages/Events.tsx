import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonSearchbar } from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import EventCard from "../components/EventCard";

const Events: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Events</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Events</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonSearchbar placeholder="Buscar evento" className="ion-padding"></IonSearchbar>
                <EventCard name="Evento 1" description="descripcion" date="20 nov" image="" />
                <EventCard name="Evento 2" description="descripcion" date="30 nov" image="" />
            </IonContent>
        </IonPage>
    );
}

export default Events;