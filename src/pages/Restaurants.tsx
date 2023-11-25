import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from "@ionic/react";
import { IonSearchbar } from '@ionic/react';
import RestaurantCard from "../components/RestaurantCard";
import { image } from "ionicons/icons";

const Restaurants: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
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
                <RestaurantCard restaurant={{
                    id: '1',
                    name: 'Animal Cocina',
                    horario: 'Lunes a Domingo de 11:30am a 21:30pm',
                    rating: 5,
                    image: 'https://tofuu.getjusto.com/orioneat-local/resized2/9ySoP7ALTGeuGvErE-200-x.webp'
                }} />
                <RestaurantCard restaurant={{
                    id: '2',
                    name: 'Cocorollo',
                    horario: 'Lunes a Domingo, 07:00am ― 21:00pm',
                    rating: 4,
                    image: 'https://scontent-bog1-1.xx.fbcdn.net/v/t39.30808-6/340547976_126954396952871_5179101883492063257_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEL6jejL_mjIIuYzHjTdo2LoBsNihZxpKKgGw2KFnGkon0daKUkQDFtSk83ov5xjSKFV_lA3z2gdA-SF4huJPab&_nc_ohc=GgYSuwiNoJQAX-Nf_uP&_nc_ht=scontent-bog1-1.xx&oh=00_AfDNoaHRN0uwk8NyoLlQRqsYBf5pYeieKs0o-ztIl7DKCA&oe=65660FA0'
                }} />
                <RestaurantCard restaurant={{
                    id: '2',
                    name: 'Crepes&Waffles',
                    horario: 'Lunes a Domingo de 12:00pm a 10:30pm',
                    rating: 4.8,
                    image: 'https://scontent-bog1-1.xx.fbcdn.net/v/t39.30808-6/386740695_717672460399790_6108135095216420492_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeG65GqnFpXB8EF-r_-ZNmWsr_6_sECLUa2v_r-wQItRrYGGv1UU5_qWd9XsByJs4TXIxdRZfqsdS5-NNOTnRE0z&_nc_ohc=u0YS2CER7-YAX_FAjCm&_nc_ht=scontent-bog1-1.xx&oh=00_AfB8De-SHYlB0GsX1fh4N5bs6YsbA1HtbJqDTQvbsE9_WQ&oe=65670ACD'
                }} />
                  <RestaurantCard restaurant={{
                    id: '2',
                    name: 'Macondo',
                    horario: 'Lunes a Domingo de 12:00pm a 8:00pm',
                    rating: 3.5,
                    image: 'https://scontent-bog1-1.xx.fbcdn.net/v/t39.30808-6/347837511_1329241464359615_6407860287049940937_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFsDsIfv8frm2VZOqFk-k4FIztwmNgeJRAjO3CY2B4lEE73IeDN0LFDEeFz5U--uKhSA6hXMlM2L6CLGloy9Fd-&_nc_ohc=OALz9SA_NMcAX-HPmee&_nc_ht=scontent-bog1-1.xx&oh=00_AfBPfHOw5AsYByL0qf3HnckA0s9BJzPf1sM7fa7XnXm6TA&oe=6565C28E'
                }} />
            </IonContent>
        </IonPage>
        
    );
}


export default Restaurants;