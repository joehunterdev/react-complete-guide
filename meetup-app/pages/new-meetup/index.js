import NewMeetupForm from '../../components/meetups/NewMeetupForm';

function NewMeetupPage(){
    function addMeetupHandler (eventData) {

        // fetch('/api/new-meetup', {
        //     method: 'POST',
        //     body: JSON.stringify({
        //         title: 'A First Meetup',
        //         image: 'https://es.wikipedia.org/wiki/M%C3%A1laga#/media/Archivo:Da_Gibralfaro_(cropped).jpg',
        //         address: 'Some address 5, 12345 Some City',
        //         description: 'This is a first meetup!'
        //     }),
        //     headers: {
        //         'Content-Type': 'application/json'
        //     }
        // })
        console.log(eventData);
    }
    return <NewMeetupForm onAddMeetup={addMeetupHandler} /> 
}

export default NewMeetupPage;