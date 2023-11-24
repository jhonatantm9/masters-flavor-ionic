import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonRow, IonCol, IonCard, IonCardContent } from "@ionic/react";
import React from "react";
import { useHistory } from "react-router-dom";

const HomeCard: React.FC = () => {
    const history = useHistory();

    const handleCardClick = (path: string) => {
        history.push(path);
    };

    return (
        <IonGrid>
            <IonRow>
                <IonCol>
                    <IonCard onClick={() => handleCardClick("/path1")}>
                        <IonCardContent>
                            Card 1
                        </IonCardContent>
                    </IonCard>
                </IonCol>
            </IonRow>
            <IonRow>
                <IonCol>
                    <IonCard onClick={() => handleCardClick("/path1")}>
                        <IonCardContent>
                            Card 1
                        </IonCardContent>
                    </IonCard>
                </IonCol>
                <IonCol>
                    <IonCard onClick={() => handleCardClick("/path2")}>
                        <IonCardContent>
                            Card 2
                        </IonCardContent>
                    </IonCard>
                </IonCol>
                <IonCol>
                    <IonCard onClick={() => handleCardClick("/path3")}>
                        <IonCardContent>
                            Card 3
                        </IonCardContent>
                    </IonCard>
                </IonCol>
            </IonRow>
        </IonGrid>
    );
};

export default HomeCard;