import { json, useLoaderData } from 'react-router-dom';
import EventItem from '../components/EventItem';

function EventDetailPage() {
  const data = useLoaderData();

  return (
    <EventItem event={data} />
  );
}

export async function loader({request,params}){
    const id = params.eventId;
    const response = await fetch('http://localhost:8080/events'+ id)

    if(!response.ok){
        // throw new Error('Failed to fetch event.')
        throw json({message: 'Failed to fetch event.'},{status:response.status})

    } else {
        return response
    }

}

export default EventDetailPage;