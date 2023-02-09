import Button from "@/components/ui/button";
import { getEventById } from "@/dummy-data";
import { useRouter } from "next/router";
import styles from "./events.module.scss";

function EventDetailPage() {

    const router = useRouter();

    const eventId = router.query.eventId;
    const event = getEventById(eventId);

    if (!event) {
        return <p className={styles.error}>No event found!</p>
    }

    console.log(event);
    return (
        <div className={styles.event}>
            <h1>{event.title}</h1>
            <div className={styles.imagebox}>
                <img src={"/" + event.image} />
                <p>{event.description}</p>
            </div>
            <Button link="/" goback={false}>Go Back</Button>
        </div>
    )
}

export default EventDetailPage;