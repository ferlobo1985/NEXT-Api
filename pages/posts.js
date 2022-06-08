import { getPost } from './api/posts/[postid]'
import { useContext } from 'react';
import { AppContext } from '../store/app_context';
import Link from 'next/link'
import Head from 'next/head';



const Posts = (props) =>  {
    const appCtx =  useContext(AppContext);
    console.log('some change made')

    const handleUser = () =>{
        appCtx.addUser({name:'Steve'})
    }


    return(
        <>
            <Head>
                <meta name="description" content="some posts related"/>
            </Head>
            <h1>
                The users are
            </h1>
            <ul>
                { appCtx.users.map( user=>(
                    <li>{user.name}</li>
                ))
                }
            </ul>
            <div>
                <button onClick={handleUser}>Add user</button>
            </div>
            <Link href="/">Go home</Link>
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