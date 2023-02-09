import React from 'react'
import EventItem from './event-item';
import styles from "./event-list.module.scss";

const EventList = (props) => {
    const { items } = props;

    return (
        <ul className={styles.list}>
            {items.map(item => <EventItem data={item} key={item.id} />)}
        </ul>
    )
}

export default EventList;
