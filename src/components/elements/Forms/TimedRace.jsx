/* eslint-disable react/prop-types */
import RaceTypeWrapper from '../wrappers/race-type-wrapper';
import { GenLabel } from './labels';

const TimedRace = ({ data, setData, time }) => {
    return (
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
    );
};

export default TimedRace;