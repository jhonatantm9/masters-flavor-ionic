import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react"
import HomeCard from "../components/HomeCard";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { API_URL } from "../services/config";
import "./Page.css"

const Home: React.FC = () => {

    const [eventos, setEventos] = useState([
        {
            id: "",
            name: "",
            description: "",
            place: "",
            department: "",
            city: "",
            address: "",
            date: "",
            image: ""
        },
    ]);

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
        getEventos();
        getRestaurantes();
    }, []);


    return (
        <IonPage>
            <IonHeader>
                <IonToolbar className="green-toolbar">
                    <IonTitle>Inicio</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Inicio</IonTitle>
                    </IonToolbar>
                </IonHeader>
                {
                    eventos.length > 0 && (<Link to={'/pages/Events'} style={{ textDecoration: 'none', color: 'inherit' }}>
                        <HomeCard
                            title="Eventos"
                            elements={
                                eventos.slice(0, 2).map((evento: any) => ({
                                    title: evento.name,
                                    image: evento.image
                                }))
                            } />
                    </Link>)
                }
                {
                    restaurantes.length > 0 && (<Link to={'/pages/Restaurants'} style={{ textDecoration: 'none', color: 'inherit' }}>
                        <HomeCard
                            title="Restaurantes"
                            elements={
                                restaurantes.slice(0, 2).map((restaurante: any) => ({
                                    title: restaurante.name,
                                    image: restaurante.image
                                }))
                            } />
                    </Link>)
                }
            </IonContent>
        </IonPage>
    )
}

export default Home;