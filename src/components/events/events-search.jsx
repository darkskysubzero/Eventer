import React, { useRef } from 'react'
import Button from '../ui/button';
import styles from "./events-search.module.scss";


const EventsSearch = (props) => {


    const year = useRef();
    const month = useRef();

    const submitHandler = (e) => {
        e.preventDefault();
        const selectedYear = year.current.value;
        const selectedMonth = month.current.value;
        props.onSearch(selectedYear, selectedMonth);
    }
    return (
        <form className={styles.search} onSubmit={submitHandler}>
            <div>
                {/* Year */}
                <div>
                    <label htmlFor="year">Year</label>
                    <select id="year" ref={year}>
                        <option value="2021">2021</option>
                        <option value="2022">2022</option>
                    </select>
                </div>

                {/* Month */}
                <div>
                    <label htmlFor="month">Month</label>
                    <select id="month" ref={month}>
                        <option value="1">Jan</option>
                        <option value="2">Feb</option>
                        <option value="3">Mar</option>
                        <option value="4">Apr</option>
                        <option value="5">May</option>
                        <option value="6">Jun</option>
                        <option value="7">Jul</option>
                        <option value="8">Aug</option>
                        <option value="9">Sep</option>
                        <option value="10">Oct</option>
                        <option value="11">Nov</option>
                        <option value="12">Dec</option>
                    </select>
                </div>
            </div>
            <Button goback={true}>Find Events</Button>
        </form>
    )
}

export default EventsSearch;
