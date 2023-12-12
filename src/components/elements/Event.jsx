import { GenLabel } from './Forms/labels';

const Event = (data) => {
    const { eventname, location, distance, eventdate, starttime, miles, timedevent } = data;
    return (
        <>
            <h3>
                {eventname}
            </h3>
            <GenLabel label='location'>
                Location: {location}
            </GenLabel>
            <GenLabel label='distance'>
                Distance: {distance}
            </GenLabel>
        </>
    );
};

export default Event;