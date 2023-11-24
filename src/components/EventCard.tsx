import './EventCard.css';

interface EventCardProps {
    name: string;
    description: string;
    date: string;
    image: string;
}

const EventCard = ({ name, description, date, image }: EventCardProps) => {
    return (
        <div className="container flex flex-row ion-justify-content-between">
            <div className='flex flex-row ion-justify-content-between gap-10'>
                <img src={image} alt={name} className="ion-img image-logo" />
                <div className='flex-col ion-align-items-center ion-justify-content-center'>
                    <span className='text-semibold'>{name}</span>
                    <span>{description}</span>
                </div>
            </div>
            <div className='ion-align-items-start date-container'>
                <span>{date}</span>
            </div>

        </div>
    );
}

export default EventCard;