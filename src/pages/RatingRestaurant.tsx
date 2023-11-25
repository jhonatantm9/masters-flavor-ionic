import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from "@ionic/react";
import RatingCard from "../components/RatingCard";
import { useState, useEffect } from "react";
import { API_URL } from "../services/config";
import "./Page.css"

const RatingRestaurants: React.FC = () => {
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

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar className="green-toolbar">
                    <IonTitle>Información Restaurantes</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">RatingRestaurant</IonTitle>
                    </IonToolbar>
                </IonHeader>
                {restaurantes.map((restaurante: any) => (
                    <RatingCard
                        key={restaurante.id}
                        ratings={{
                            description: restaurante.description,
                            ubicacion: restaurante.city + ', ' + restaurante.department,
                            image: restaurante.image
                        }}
                    />
                ))}
            </IonContent>
        </IonPage>
    );
}

export default RatingRestaurants;