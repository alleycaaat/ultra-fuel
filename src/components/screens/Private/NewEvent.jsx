import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

//** auth
import { createUserEvent } from '../../../auth/appwrite-helpers';
import { useAuth } from '../../../auth/hooks';

//** import constants
import { Constants } from '../../../util/constants';

//** import elements
import { DateInput, Input } from '../../elements/Forms/input';
import DistanceRace from '../../elements/Forms/DistanceRace';
import TimedRace from '../../elements/Forms/TimedRace';
import { GenLabel } from '../../elements/Forms/labels';

//** import wrappers
import { ButtonWrapper } from '../../elements/wrappers/button-wrapper';
import { Wrapper } from '../../elements/wrappers/form-wrapper';

const NewEvent = () => {
    const { setLoading, currUser } = useAuth();

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
        measurement: 'mi',
    });

    const { ename, day, month, year, starttime, location, distance, time, measurement } = data;

    const [dateSelection, setDateSelection] = useState({
        selectmonths: Constants.months,
        selectdays: Constants.thirtyone,
        selectyears: [],
        previousDay: '',
    });
    const { selectmonths, selectdays, selectyears, previousDay } = dateSelection;

    const handleSubmit = (e) => {
        e.preventDefault();
        switch (true) {
            case ename === '':
                toast.error('Event cannot be saved without a name');
                break;
            case starttime === '':
                toast.error('Event cannot be saved without a time');
                break;
            case distance === '' && time === '':
                toast.error('Event cannot be saved without length of event');
                break;
            case distance !== '' && measurement === '':
                toast.error('Please specify mi or km');
                break;
            default:
                break;
        }
        setIsSubmitting(true);
        let copyName = ename.trim(),
            copydate = [day, month, year],
            distanceevent;

        switch (true) {
            case (raceType === 'timed'):
                distanceevent = null;
                break;
            case (raceType === 'distance' && measurement === 'mi'):
                distanceevent = true;
                break;
            case (raceType === 'distance' && measurement === 'km'):
                distanceevent = false;
                break;
            default:
                break;
        }

        const eventInfo = {
            eventname: copyName,
            location: location,
            distance: distance,
            eventdate: copydate,
            starttime: starttime,
            miles: distanceevent,
            timedevent: time,
        };
        saveNewEvent(eventInfo);
    };

    const saveNewEvent = (eventInfo) => {
        createUserEvent(eventInfo, currUser.userID);
        setData({
            ename: '',
            day: '1',
            month: 'January',
            year: '2023',
            starttime: '',
            location: '',
            distance: '',
            time: '',
            measurement: 'mi',
        })
        setRaceType(false)
        setIsSubmitting(false)
    };

    useEffect(() => {
        if (selectyears.length === 0) {
            setLoading(true);
            populateYears();
        }
    }, []);

    //TODO if the year changes before the month, days don't update
    //TODO if 29-31 are picked and month changed to shorter month, day goes to 1 automatically

    //** populate the number of days based on the month, account for leap years
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

        } else if (
            [
                'April',
                'June',
                'September',
                'November'
            ].includes(month)
        ) {
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

    //**get a ten year range to display
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

    //** when the year changes, set it in data and check to see if it's a leap year
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
