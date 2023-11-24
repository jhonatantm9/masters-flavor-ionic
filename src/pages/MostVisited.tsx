import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";

const MostVisited: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Most Visited</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Most visited</IonTitle>
                    </IonToolbar>
                </IonHeader>
            </IonContent>
            <ExploreContainer name="MostVisited page" />
        </IonPage>
    );
}

export default MostVisited;