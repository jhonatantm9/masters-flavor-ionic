import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react"
import HomeCard from "../components/HomeCard";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
    const elementos = [
        { title: 'Elemento 1', image: 'ruta/de/imagen1.jpg' },
        { title: 'Elemento 2', image: 'ruta/de/imagen2.jpg' }
    ];

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
                <Link to={'/pages/Events'} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <HomeCard
                        title="Eventos"
                        elements={elementos} />
                </Link>
                <Link to={'/pages/Restaurants'} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <HomeCard
                        title="Restaurantes"
                        elements={elementos} />
                </Link>
            </IonContent>
        </IonPage>
    )
}

export default Home;