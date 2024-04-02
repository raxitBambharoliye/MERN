import { useEffect } from 'react'
import { Quality, Banner, Collections, Models, Interior, InteriorIdea, Subscribe } from '../../components'
import axiosClient from '../../utility/api/axiosClient'

function Home() {
  // useEffect(()=>{
  //   axiosClient.get('/')
  //   .then(response=>console.log(response))
  // },[])
  return (
      <>
      <Banner />
      <Quality />
      <Collections />
      <Models />
      <Interior />
      <InteriorIdea />
      <Subscribe />
      </>
  )
}

export default Home 
