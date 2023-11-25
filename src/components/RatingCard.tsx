import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonIcon } from '@ionic/react';
import { star } from 'ionicons/icons';
import { IonContent, IonPage, IonImg } from '@ionic/react';
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
            </IonCard>
        </div>
    );
};

export default RatingCard;