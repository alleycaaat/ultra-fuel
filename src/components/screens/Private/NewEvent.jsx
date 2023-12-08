import { useState } from 'react';
import { Input } from '../../elements/Forms/input';
import { Label } from '../../elements/Forms/labels';
import { Wrapper } from '../../elements/wrappers/form-wrapper';
import DistanceRace from '../../elements/Forms/DistanceRace';
import TimedRace from '../../elements/Forms/TimedRace';
import { ButtonWrapper } from '../../elements/wrappers/button-wrapper';

const NewEvent = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [raceType, setRaceType] = useState(false);
    const [data, setData] = useState({
        ename: '',
        date: '',
        starttime: '',
        location: '',
        distance: '',
        time: '',
    });

    const { ename, date, starttime, location, distance, time } = data;

    const handleSubmit = () => {
        setIsSubmitting(true);
    };

    return (
        <div>
            <h2>Create a New Event</h2>
            <form
                method='post'
                className='newEvent'
                onSubmit={handleSubmit}>
                <Wrapper>
                    <Label
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
                    <Label
                        text='Date:'
                        label='date'
                    />
                    <Input
                        type='date'
                        id='date'
                        name='date'
                        autoComplete='off'
                        onChange={(e) => setData({
                            ...data,
                            data: e.target.value
                        })}
                        value={date}
                        required
                    />
                </Wrapper>
                <Wrapper>
                    <Label
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
                        required
                    />
                </Wrapper>
                <Wrapper>
                    <Label
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
                        setData={setData}
                        time={time}
                    />}
                <button
                    type='submit'
                    className='submit'>
                    {isSubmitting ? 'Saving event...' : 'Save Event'}
                </button>
            </form>
        </div>
    );
};

export default NewEvent;
