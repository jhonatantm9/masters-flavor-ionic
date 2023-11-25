import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonSearchbar } from "@ionic/react";
import EventCard from "../components/EventCard";
import { useEffect, useState } from "react";
import { API_URL } from "../services/config";
import "./Page.css"

const Events: React.FC = () => {
    const [eventos, setEventos] = useState([]);

    const getEventos = async () => {
        try {
            const result = await fetch(`${API_URL}/events`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            }).then((response) => response.json());
            if (result.length > 0) setEventos(result);
        } catch (err) {
            return err;
        }
    };

    useEffect(() => {
        getEventos();
    }, []);

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar className="green-toolbar">
                    <IonTitle>Eventos</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Events</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonSearchbar placeholder="Buscar evento" className="ion-padding"></IonSearchbar>
                {eventos.map((evento: any) => (
                    <EventCard
                        key={evento.id}
                        name={evento.name}
                        description={evento.description}
                        date={evento.date}
                        image={evento.image}
                    />
                ))}
            </IonContent>
        </IonPage>
    );
}

export default Events;