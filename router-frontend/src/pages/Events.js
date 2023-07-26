import EventsList from '../components/EventsList.old';
import { useLoaderData,json } from 'react-router-dom';

function EventsPage() {
    const data = useLoaderData();
    if (data.isError) {
        return <p>{data.message}</p>
    }

    return (
        <>
            <div style={{ textAlign: 'center' }}>
                {/* {isLoading && <p>Loading...</p>}
        {error && <p>{error}</p>} */}
            </div>
            {<EventsList events={data} />}
        </>
    );
}

export async function loader() {
    const baseUrl = 'http://localhost:8080/events';
    const response = await fetch(baseUrl);

    if (!response.ok) {

        throw json(
            {message: 'Failed to fetch events.'},
            {status:response.status}
        ) 

        // throw new Response(JSON.stringify({ message: 'Failed to fetch events.',status:response.status}))   
        // return { isError: true, message: 'Failed to fetch events.' };
        // throw new Error('Failed to fetch events.')

    } else {

        const resData = await response.json();
        return resData.events;

    }
}


export default EventsPage;