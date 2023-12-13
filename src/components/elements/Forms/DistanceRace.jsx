/* eslint-disable react/prop-types */
//** import wrappers
import RaceTypeWrapper from '../wrappers/race-type-wrapper';

//** import elements
import { GenLabel } from './labels';
import EventGoal from './EventGoal';
import { Input } from './input';

const DistanceRace = ({ data, setData, distance, raceType }) => {
    return (
        <>
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
            </RaceTypeWrapper>
            <EventGoal
                text='Pace goal:'
                data={data}
                setData={setData}
                raceType={raceType}
            />
        </>
    );
};

export default DistanceRace;