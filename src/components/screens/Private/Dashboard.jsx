import { useLoaderData } from 'react-router-dom';

const Dashboard = () => {
	const { user } = useLoaderData();

	return (
		<div>
			<h1>Welcome back, {user}!</h1>
		</div>
	);
};

export default Dashboard;
