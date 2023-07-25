const EventDetailPage = () => {

    const GetEvents = () => {
        return fetch('http://localhost:8080/events').json()
    } 
    console.log(GetEvents)
    return(<h1>EventsDetailPage {GetEvents}</h1>)
}
export default EventDetailPage