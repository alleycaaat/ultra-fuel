/* eslint-disable react/prop-types */
//** import wrappers
import RaceTypeWrapper from '../wrappers/race-type-wrapper';
import RadioWrapper from '../wrappers/radio-wrapper';

//** import elements
import { GenLabel } from './labels';
import { Input } from './input';

const DistanceRace = ({ data, setData, distance }) => {

    return (
        <RaceTypeWrapper>
            <GenLabel
                text='Event Distance:'
                label='distance'
            />
            <Input
                type='number'
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
            <RadioWrapper
                label='Select the race measurement:'
            >
                <input
                    type='radio'
                    id='miles'
                    name='measurement'
                    value='miles'
                    onClick={() => setData({
                        ...data,
                        measurement: 'mi'
                    })}
                />
                <GenLabel label='miles' text='mi' />

                <input
                    type='radio'
                    id='kilometers'
                    name='measurement'
                    value='kilometers'
                    onClick={() => setData({
                        ...data,
                        measurement: 'km'
                    })}
                />
                <GenLabel label='kilometers' text='km' />
            </RadioWrapper>
        </RaceTypeWrapper>
    );
};

export default DistanceRace;