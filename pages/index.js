import axios from 'axios'
import styles from '../styles/Home.module.css'

export default function Home(props) {

  const getPosts = () =>{
    axios.get('/api/posts').then(response=>{
      console.log(response.data)
    })
  }

  console.log(props)

  return (
    <div className={styles.container}>
      <button onClick={getPosts}>
        Load posts  
      </button>      
    </div>
  )
}

export const getStaticProps = async() =>{
  const request = await axios.get('http://localhost:3000/api/posts');

  return{
    props:{
      posts:request.data
    }
  }

}