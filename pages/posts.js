import axios from 'axios'
import { useEffect } from 'react'
import { getPost } from './api/posts/[postid]'


const Posts = (props) =>  {


    console.log(props)

    // useEffect(()=>{
    //     axios.get(`/api/posts/1`).then(response=>{
    //         console.log(response.data)
    //     })
    // },[])

    return(
        <>
            posts
        </>
    )
}

export const getStaticProps = async() => {
    const post = await getPost(1);

    return {
        props:{
            data:post
        }
    }
}


export default Posts