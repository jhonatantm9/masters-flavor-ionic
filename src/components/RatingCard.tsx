import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import "./Rating.css"

interface RatingCardsProps {
    ratings: {
        description: string;
        ubicacion: string;
        image: string;
    };
}

const RatingCard = ({ ratings }: RatingCardsProps) => {
    return (
        <div className='padre'>
            <div className='items-center'>
                <img className='imagen-restaurante' height={250} width={250} src={ratings.image} alt="Imagen restaurante" />
            </div>
            <IonCard className='background-gray'>
                <IonCardHeader>
                    <IonCardSubtitle>
                        <div className='description-center'>
                            {ratings.description}
                        </div>
                    </IonCardSubtitle>
                    <div className='ubicacion-center'>
                        <IonCardTitle>{ratings.ubicacion}</IonCardTitle>
                    </div>

                </IonCardHeader>
                <div className='horario-center'>
                    <IonCardContent>Lunes a Domingo de 11:30am a 21:30pm</IonCardContent>
                </div>
            </IonCard>
        </div>
    );
};

export default RatingCard;