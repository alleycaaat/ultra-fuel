/* eslint-disable react/prop-types */
import { Wrapper } from '../wrappers/form-wrapper';
import { Input } from './input';
import { Label } from './labels';

const TimedRace = ({ data, setData, time }) => {
    return (
        <Wrapper>
            <Label
                text='Event Duration:'
                label='time'
            />
            <Input
                type='number'
                id='time'
                name='time'
                autoComplete='off'
                onChange={(e) => setData({
                    ...data,
                    time: e.target.value
                })}
                value={time}
                required
            />
        </Wrapper>
    );
};

export default TimedRace;