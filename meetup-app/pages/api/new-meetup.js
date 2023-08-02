import {MongoClient} from 'mongodb';

async function handler(req,res){

    if(req.method === 'POST'){

         const data = req.body;
        //const {title, image, address, description} = data;
        //  const {title,image,address,description} = data;
         const client = MongoClient.connect(process.env.REACT_APP_MONGO_URL)
         const db = client.db();
         const meetupsCollection = db.collection('meetups');
         const result = await meetupsCollection.insertOne(data); // returns a promise

         client.close(); // ulitmately closes the connection
         res.status(201).json({message: 'Meetup inserted!'});
    }
}

export default handler;