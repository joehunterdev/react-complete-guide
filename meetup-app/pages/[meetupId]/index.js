import { useEffect } from "react";
import MetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetail(){
    //we could useEffect here with empty depenancy array to only run once 
    //and fetch data from API
    return <MetupDetail image="https://es.wikipedia.org/wiki/M%C3%A1laga#/media/Archivo:Da_Gibralfaro_(cropped).jpg" title="A First Meetup" address="Some address 5, 12345 Some City" description="This is a first meetup!" />
}

export default MeetupDetail;