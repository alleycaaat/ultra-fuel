import { NavLink, Outlet } from 'react-router-dom';

const Events = () => {
    //TODO turn links into a dropdown menu, include base events screen as a link
    return (
        <section>
            <nav>
                <NavLink
                    to='newevent'>
                    New Event
                </NavLink>
                <NavLink
                    to='pastevents'>
                    Past Events
                </NavLink>
            </nav>
            <Outlet />
        </section>
    );
};

export default Events;