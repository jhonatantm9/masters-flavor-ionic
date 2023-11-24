import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react"
import HomeCard from "../components/HomeCard";

const Home: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Home</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Home</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <HomeCard />
            </IonContent>
        </IonPage>
    )
}

export default Home;