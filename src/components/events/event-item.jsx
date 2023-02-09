import Link from 'next/link';
import React from 'react'
import Button from '../ui/button';
import styles from "./event-item.module.scss";

import { BsFillCalendar2DateFill, BsArrowRight } from "react-icons/bs";
import { FaRegAddressCard } from "react-icons/fa";

const EventItem = (props) => {
    const { data } = props;

    const humanReadableDate = new Date(data.date).toLocaleDateString('en-US', {
        day: "numeric",
        month: "long",
        year: "numeric"
    });

    const formattedAddress = data.location.replace(",", "\n");

    const exploreLink = `/events/${data.id}`;

    return (
        <li className={styles.item}>
            <img src={"/" + data.image} alt="" />
            <div>
                <h2>{data.title}</h2>
                <div><time><BsFillCalendar2DateFill /> {humanReadableDate}</time></div>
                <div><address><FaRegAddressCard /> {formattedAddress}</address></div>
            </div>
            <div className={styles.link}>
                <Button link={exploreLink} goback={true}>Explore Event <BsArrowRight /></Button>
            </div>
        </li>
    )
}

export default EventItem;
