import MetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetail() {
    //we can asume this doesnt change so much    
    return <MetupDetail image="https://es.wikipedia.org/wiki/M%C3%A1laga#/media/Archivo:Da_Gibralfaro_(cropped).jpg" title="A First Meetup" address="Some address 5, 12345 Some City" description="This is a first meetup!" />
}
export async function getStaticPaths() {
    return{
        fallback: false,//true would try to generate page on the fly
        paths: [{params: {meetupId: 'm1'}},{params: {meetupId: 'm2'}}],
    }
}
export async function getStaticProps() {   
    return {props: {meetupData: {image:'https://', title:"Sometitle", address:"Your addy", description:"Desc"}}}
}

export default MeetupDetail;