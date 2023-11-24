import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";

const Restaurants: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Restaurants</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Restaurants</IonTitle>
                    </IonToolbar>
                </IonHeader>
            </IonContent>
        </IonPage>
    );
}

export default Restaurants;