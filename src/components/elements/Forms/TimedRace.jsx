/* eslint-disable react/prop-types */
import RaceTypeWrapper from '../wrappers/race-type-wrapper';
import EventGoal from './EventGoal';
import { GenLabel } from './labels';

const TimedRace = ({ data, setData, time, raceType }) => {
    return (
        <>
            <RaceTypeWrapper>
                <GenLabel
                    text='Event Duration:'
                    label='time'
                />
                <input
                    type='number'
                    min='1'
                    max='240'
                    id='time'
                    name='time'
                    autoComplete='off'
                    onChange={(e) => setData({
                        ...data,
                        time: e.target.value
                    })}
                    value={time}
                    required
                /><p>hours</p>
            </RaceTypeWrapper>
            <EventGoal
                text='Distance goal:'
                data={data}
                setData={setData}
                raceType={raceType}
            />
        </>
    );
};

export default TimedRace;