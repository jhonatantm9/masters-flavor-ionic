import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonIcon } from '@ionic/react';
import { star } from 'ionicons/icons';
import { IonContent, IonPage, IonImg } from '@ionic/react';
import "./Restaurant.css"

interface RestaurantCardProps {
    restaurant: {
        id: string;
        name: string;
        horario: string;
        rating: number;
        image: string;
    };
}

const RestaurantCard = ({ restaurant }: RestaurantCardProps) => {
    return (
        <IonCard className='background-gray'>
            <IonCardHeader>
                <IonCardSubtitle>
                    <div className='items-center'>
                        <IonImg className='imagen-restaurante' src={restaurant.image} alt="Imagen restaurante" />
                    </div>
                    <div className='rating-center'>
                        <IonIcon icon={star} color="warning" />
                        {restaurant.rating}
                    </div>
                </IonCardSubtitle>
                <div className='text-center'>
                    <IonCardTitle>{restaurant.name}</IonCardTitle>
                </div>
                <div className='horario-center'>
                    <IonCardContent>{restaurant.horario}</IonCardContent>
                </div>
            </IonCardHeader>
        </IonCard>
    );
};

export default RestaurantCard;
