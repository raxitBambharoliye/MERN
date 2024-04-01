import { useRef } from 'react'
import { Quality, Banner, Collections, Models, Interior, InteriorIdea, Subscribe } from '../../components'
import { Button, Input } from '../../components/common'

function Home() {
  const testRef=useRef()
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
