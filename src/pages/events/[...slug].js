import EventList from "@/components/events/event-list";
import { getFilteredEvents } from "@/dummy-data";
import { useRouter } from "next/router";


import styles from "./events.module.scss";

function FilteredEventsPage() {


    const router = useRouter();
    const filterData = router.query.slug;

    //if parameters are undefined
    if (!filterData) {
        return <p className={styles.error}>Loading...</p>
    }


    if (filterData.length !== 2) {
        return <p className={styles.error}>Invalid filter.</p>
    }

    //when data is loaded (gives it in string format)
    const year = filterData[0];
    const month = filterData[1];

    //converting to number
    const numYear = +year;
    const numMonth = +month;

    //if both parameters are not numbers and other validation
    if (isNaN(numYear) || isNaN(numMonth) || numYear > 2030 || numYear < 2021 || numMonth < 1 || numMonth > 12) {
        return <p className={styles.error}>Wrong filter values.</p>
    }

    //get filtered events
    const filteredEvents = getFilteredEvents({
        year: numYear,
        month: numMonth
    });

    //if found no events
    if (!filteredEvents || filteredEvents.length === 0) {
        return <p className={styles.error}>No events found for the chosen dates.</p>
    }



    return (
        <div>
            <EventList items={filteredEvents} />
        </div>
    )
}

export default FilteredEventsPage;