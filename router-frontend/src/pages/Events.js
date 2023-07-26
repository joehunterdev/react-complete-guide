import EventsList from '../components/EventsList.old';
import { useLoaderData } from 'react-router-dom';

function EventsPage() {

    const events = useLoaderData();
    console.log("Hi im enents");
    return (
        <>
            <div style={{ textAlign: 'center' }}>
                {/* {isLoading && <p>Loading...</p>}
        {error && <p>{error}</p>} */}
            </div>
            {<EventsList events={events} />}
        </>
    );
}

export async function loader() {
    const baseUrl = 'http://localhost:8080/events';
    const response = await fetch(baseUrl);

    if (!response.ok) {

        throw new Error('Failed to fetch events.')

    } else {

        const resData = await response.json();
        return resData.events;

    }
}


export default EventsPage;