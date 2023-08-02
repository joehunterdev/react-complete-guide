import MeetupList from "../components/meetups/MeetupList";
import { MongoClient } from "mongodb";
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

//levarages caching runs at build time
 // fetch data from an API

 export async function getStaticProps() {
  // fetch data from an API
  const client = await MongoClient.connect(
    process.env.REACT_APP_MONGO_URL
  );
  const db = client.db();

  const meetupsCollection = db.collection('meetups');

  const meetups = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 1,
  };
}


export default HomePage;