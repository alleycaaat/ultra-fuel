import { useEffect, useState } from 'react';

//** import elements
import DistanceRace from '../../elements/Forms/DistanceRace';
import TimedRace from '../../elements/Forms/TimedRace';
import { GenLabel } from '../../elements/Forms/labels';
import { DateInput, Input } from '../../elements/Forms/input';

//**import wrappers
import { ButtonWrapper } from '../../elements/wrappers/button-wrapper';
import { Wrapper } from '../../elements/wrappers/form-wrapper';

import { Constants } from '../../../util/constants';
import { useAuth } from '../../../auth/hooks';

const NewEvent = () => {
    const { setLoading } = useAuth();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [raceType, setRaceType] = useState(false);
    const [data, setData] = useState({
        ename: '',
        day: '1',
        month: 'January',
        year: '2023',
        starttime: '',
        location: '',
        distance: '',
        time: '',
        measurement: '',
    });

    const { ename, day, month, year, starttime, location, distance, time, measurement } = data;

    const [dateSelection, setDateSelection] = useState({
        selectmonths: Constants.months,
        selectdays: Constants.thirtyone,
        selectyears: [],
        previousDay: '',
    });
    const { selectmonths, selectdays, selectyears, previousDay } = dateSelection;

    const handleSubmit = () => {
        setIsSubmitting(true);
    };

    useEffect(() => {
        if (selectyears.length === 0) {
            setLoading(true);
            populateYears();
        }
    }, []);

    //TODO if the year changes before the month, days don't update
    //TODO if 29-31 are picked and month changed to shorter month, day goes to 1 automatically
    const populateDate = (month, year) => {
        setData({
            ...data,
            month: month
        });
        let dayNum;
        if (
            [
                'January',
                'March',
                'May',
                'July',
                'August',
                'October',
                'December',
            ].includes(month)
        ) {
            dayNum = Constants.thirtyone;

        } else if (['April', 'June', 'September', 'November'].includes(month)) {
            dayNum = Constants.thirty;
        } else {
            // If month is February, calculate whether it is a leap year or not
            const isLeap = new Date(year, 1, 29).getMonth() === 1;
            dayNum = isLeap ? Constants.twentynine : Constants.twentyeight;
        }

        setDateSelection({
            ...dateSelection,
            selectdays: dayNum
        });
        setLoading(false);
    };

    const populateYears = () => {
        const date = new Date();
        const year = date.getFullYear();
        let years = [];

        for (let i = 0; i <= 10; i++) {
            years.push(year + i);
        }
        setDateSelection({
            ...dateSelection,
            selectyears: years
        });
        setLoading(false);
    };

    const yearChange = (e) => {
        const year = e;
        populateDate(month, year);
        setData({ ...data, year: year });
    };

    const populateDay = (e) => {
        let day = e;
        setDateSelection({
            ...dateSelection,
            previousDay: day
        });
        setData({
            ...data,
            day: day
        });
    };

    return (
        <section>
            <h2>Create a New Event</h2>
            <form
                method='post'
                className='newEvent'
                onSubmit={handleSubmit}>
                <Wrapper>
                    <GenLabel
                        text='Event Name:'
                        label='eventName'
                    />
                    <Input
                        type='text'
                        id='eventName'
                        name='eventName'
                        autoComplete='off'
                        onChange={(e) => setData({
                            ...data,
                            ename: e.target.value
                        })}
                        value={ename}
                        required
                    />
                </Wrapper>
                <Wrapper>
                    <GenLabel
                        text='Date:'
                        label='date'
                    />
                    <DateInput
                        id='month'
                        name='month'
                        value={month}
                        array={selectmonths}
                        onChange={(e) => populateDate(e.target.value)}
                    />
                    <DateInput
                        id='day'
                        name='day'
                        value={day}
                        array={selectdays}
                        onChange={(e) => populateDay(e.target.value)}
                        required
                    />
                    <DateInput
                        id='year'
                        name='year'
                        array={selectyears}
                        value={year}
                        onChange={(e) => yearChange(e.target.value)}
                        required
                    />
                </Wrapper>
                <Wrapper>
                    <GenLabel
                        text='Location:'
                        label='location'
                    />
                    <Input
                        type='text'
                        id='location'
                        name='location'
                        autoComplete='off'
                        onChange={(e) => setData({
                            ...data,
                            location: e.target.value
                        })}
                        value={location}
                    />
                </Wrapper>
                <Wrapper>
                    <GenLabel
                        text='Start time:'
                        label='starttime'
                    />
                    <Input
                        type='time'
                        id='starttime'
                        name='starttime'
                        autoComplete='off'
                        onChange={(e) => setData({
                            ...data,
                            starttime: e.target.value
                        })}
                        value={starttime}
                        required
                    />
                </Wrapper>
                <ButtonWrapper>
                    <h3>Is this a timed event or a set distance?</h3>

                    <button
                        value='timed'
                        className='blueButton'
                        onClick={e => setRaceType(e.target.value)}>
                        Timed
                    </button>
                    <button
                        value='distance'
                        className='blueButton'
                        onClick={e => setRaceType(e.target.value)}>
                        Distance
                    </button>
                </ButtonWrapper>

                {raceType === 'distance' &&
                    <DistanceRace
                        data={data}
                        setData={setData}
                        distance={distance}
                    />}
                {raceType === 'timed' &&
                    <TimedRace
                        data={data}
                        time={time}
                        setData={setData}
                    />}
                <button
                    type='submit event'
                    className='submit'>
                    {isSubmitting ? 'Saving event...' : 'Save Event'}
                </button>
            </form>
        </section>
    );
};

export default NewEvent;
