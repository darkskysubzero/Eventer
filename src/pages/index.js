import React from 'react';
import { getFeaturedEvents } from '@/dummy-data';
import EventList from '@/components/events/event-list';
import Head from 'next/head';

const HomePage = () => {

    const featuredEvents = getFeaturedEvents();

    return (
        <>
            <Head>
                <title>Eventer | Filter Events</title>
            </Head>
            <div className='app'>
                <EventList items={featuredEvents} />
            </div>
        </>
    )
}

export default HomePage
