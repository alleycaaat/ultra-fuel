import { useLoaderData } from 'react-router-dom';

const PastEvents = () => {
	const events = useLoaderData();

	const formatDate = (date) => {
		return `${ date[0] }  ${ date[1] } ${ date[2] }`;
	};

	return (
		<div className='past-events'>
			<h2>Past Events</h2>
			{(events?.map((evnt, i) => (
				<div className='event' key={i}>
					<h4>{evnt.eventname}</h4>
					<p><span className='title'>Goal</span> {evnt.goal}</p>
					<p><span className='title'>Date</span> {formatDate(evnt.eventdate)}</p>
				</div>
			)))}
		</div>
	);
};

export default PastEvents;