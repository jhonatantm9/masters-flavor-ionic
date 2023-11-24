import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";

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
            </IonContent>
        </IonPage>
    );
}

export default Events;