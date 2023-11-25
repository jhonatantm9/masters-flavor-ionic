import './EventCard.css';

interface EventCardProps {
    name: string;
    description: string;
    date: string;
    image: string;
}

const meses = {
    0: 'Ene',
    1: 'Feb',
    2: 'Mar',
    3: 'Abr',
    4: 'May',
    5: 'Jun',
    6: 'Jul',
    7: 'Ago',
    8: 'Sep',
    9: 'Oct',
    10: 'Nov',
    11: 'Dic'
}

const EventCard = ({ name, description, date, image }: EventCardProps) => {
    const fecha = new Date(date);
    const mes = new Intl.DateTimeFormat("es-CO", { month: "short" }).format(fecha)

    return (
        <div className="container flex flex-col ion-justify-content-center ion-align-items-center">
            <img src={image} alt={name} className="image-logo" />
            <div className='flex flex-row ion-justify-content-between ion-align-items-center gap-10'>
                <div className='flex-col ion-align-items-center ion-justify-content-center ion-text-center'>
                    <span className='text-semibold'>{name}</span>
                    <span>{description}</span>
                </div>
                <div className='ion-align-items-center ion-justify-content-center date-container ion-text-center'>
                    <span>{fecha.getDay() + " " + mes}</span>
                </div>
            </div>

        </div>
    );
}

export default EventCard;