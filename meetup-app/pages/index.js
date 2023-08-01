import MeetupList from "../components/meetups/MeetupList";
import Layout from "../components/layout/Layout";
const DUMMY_MEETUPS = [
    {
        id: 'm1',
        title: 'A First Meetup',
        image: 'https://es.wikipedia.org/wiki/M%C3%A1laga#/media/Archivo:Da_Gibralfaro_(cropped).jpg',
        address: 'Some address 5, 12345 Some City',
        description: 'This is a first meetup!'
    },
    {
        id: 'm2',
        title: 'A Second Meetup',
        image: 'https://es.wikipedia.org/wiki/M%C3%A1laga#/media/Archivo:Da_Gibralfaro_(cropped).jpg',
        address: 'Some address 5, 12345 Some City',
        description: 'This is a first meetup!'
    },
    {
        id: 'm3',
        title: 'A Third Meetup',
        image: 'https://es.wikipedia.org/wiki/M%C3%A1laga#/media/Archivo:Da_Gibralfaro_(cropped).jpg',
        address: 'Some address 5, 12345 Some City',
        description: 'This is a first meetup!'
    },
]
function HomePage() {
    return <Layout><MeetupList meetups={DUMMY_MEETUPS} /></Layout>;
}
export default HomePage;