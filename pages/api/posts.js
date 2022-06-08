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
                message:'Sorry, try again later'
            })
        }
    }

    if(req.method === 'POST'){
        const { title, body } = req.body;

        try{
            const request = await axios.post('https://jsonplaceholder.typicode.com/posts',{
                title,
                body
            });
            res.status(201).json({
                posts:request.data
            })
        } catch(error){
            res.status(401).json({
                message:'Sorry, try again later'
            })
        }
    }

}

export default handler;