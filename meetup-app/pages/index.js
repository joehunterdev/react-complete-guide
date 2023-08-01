import MeetupList from "../components/meetups/MeetupList";
// import { useState,useEffect } from "react";
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
function HomePage(props) {
    // const [loadedMeetups, setLoadedMeetups] = useState([]);
    // //
    // useEffect(() => { 
    //     //send http request and fetch data async
    //     setLoadedMeetups(DUMMY_MEETUPS) 
    // }, []);
    return <MeetupList meetups={props.meetups} />;
}

// //runs on server after deployment
// //can even add credentials here
// export async function  getServerSideProps(context) {
//     const req = context.req;
//     const res = context.res;
//     return {props:{meetups: DUMMY_MEETUPS}}
// }

//levarages caching
export async function  getStaticProps() {
    // fetch data from an API
    return {
        props: {
            meetups: DUMMY_MEETUPS
        },
        revalidate: 10 //at least every 10 seconds
    };
}
export default HomePage;