import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from "@ionic/react";
import { IonSearchbar } from '@ionic/react';
import RestaurantCard from "../components/RestaurantCard";
import { useState, useEffect } from "react";
import { API_URL } from "../services/config";
import "./Page.css"

const Restaurants: React.FC = () => {
    const [restaurantes, setRestaurantes] = useState([
        {
            id: "",
            name: "",
            description: "",
            address: "",
            department: "",
            city: "",
            image: "",
            rating: ""
        }
    ]);

    const getRestaurantes = async () => {
        try {
            const result = await fetch(`${API_URL}/restaurants`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            }).then((response) => response.json());
            if (result.length > 0) setRestaurantes(result);
        } catch (err) {
            return err;
        }
    };

    useEffect(() => {
        getRestaurantes();
    }, []);

    const getRandomRating = () => {
        return Math.floor(Math.random() * 5) + 1;
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar className="green-toolbar">
                    <IonTitle>Restaurantes</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Restaurants</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonSearchbar placeholder="Buscar restaurante"></IonSearchbar>
                {restaurantes.map((restaurante: any) => (
                    <RestaurantCard
                        key={restaurante.id}
                        restaurant={
                            {
                                id: restaurante.id,
                                name: restaurante.name,
                                horario: restaurante.horario,
                                rating: getRandomRating(),
                                image: restaurante.image
                            }
                        }
                    />
                ))}
            </IonContent>
        </IonPage>

    );
}


export default Restaurants;