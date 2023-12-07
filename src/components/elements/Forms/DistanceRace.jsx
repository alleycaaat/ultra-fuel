/* eslint-disable react/prop-types */
import { Wrapper } from '../wrappers/form-wrapper';
import { Input } from './input';
import { Label } from './labels';

const DistanceRace = ({ data, setData, distance }) => {
    return (
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
                value={distance}
                required
            />
        </Wrapper>
    );
};

export default DistanceRace;