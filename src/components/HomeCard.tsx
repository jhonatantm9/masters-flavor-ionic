import React from "react";
import { Link } from "react-router-dom";
import "./HomeCard.css";
import { IonCard, IonCardHeader, IonCardSubtitle } from "@ionic/react";

interface HomeCardProps {
    title: string;
    elements: {
        title: string;
        image: string;
    }[];
}

const HomeCard = ({ title, elements = [] }: HomeCardProps) => {
    return (
        <div className="container2 p-10">
            <Link to="/pages/Events"></Link>
            <div className="title">
                <span>
                    {title}
                </span>
            </div>
            <div className="container-grid">
                {elements.map((element) => (
                    <IonCard className="background-light-gray">
                        <img src={element.image} alt={element.title} />
                        <IonCardHeader>
                            <IonCardSubtitle>{element.title}</IonCardSubtitle>
                        </IonCardHeader>
                    </IonCard>
                ))}
            </div>
        </div>
    )
};

export default HomeCard;