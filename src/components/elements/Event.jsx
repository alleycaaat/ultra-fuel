import { GenLabel } from './Forms/labels';

const Event = (data) => {
    const { eventname, location, distance, racetype, eventdate, starttime, miles, timedevent } = data;

    const measurement = miles === 'mi' ? 'mi' : 'km';
    //const type = raceType === 'timed' ? 'hrs' : { measurement };

    const eventType = () => {
        if (racetype === 'timed') {
            return `${ timedevent } hrs`;
        } else {
            return `${ distance } ${ measurement }`;
        }
    };

    console.log('date',eventdate)

    return (
        <>
            <h3>
                {eventname}
            </h3>
            <GenLabel label='location'>
                Location: {location}
            </GenLabel>
            <GenLabel label='event type'>
                {eventType}
            </GenLabel>
            <GenLabel label='start time'>
                Time: {starttime}
            </GenLabel>

        </>
    );
};

export default Event;