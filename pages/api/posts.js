import axios from 'axios';

const handler = async(req,res) => {

    if(req.method === 'GET'){
        try{
            const request = await axios.get('https://jsonplaceholder.typicode.com/posts');
            res.status(201).json({
                posts:request.data
            })
        } catch(error){
            res.status(401).json({
                message:'Sorrt, try again later'
            })
        }
    }
}

export default handler;