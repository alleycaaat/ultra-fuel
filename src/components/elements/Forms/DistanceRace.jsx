/* eslint-disable react/prop-types */
import { Wrapper } from '../wrappers/form-wrapper';
import { Input } from './input';
import { Label } from './labels';

const DistanceRace = ({ data, setData, distance }) => {
    return (
        <Wrapper>
            <Label
                text='Event Distance:'
                label='distance'
            />
            <Input
                type='text'
                id='distance'
                name='distance'
                autoComplete='off'
                onChange={(e) => setData({
                    ...data,
                    distance: e.target.value
                })}
                value={distance}
                required
            />
        </Wrapper>
    );
};

export default DistanceRace;