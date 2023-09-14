import { useParams } from "react-router-dom"


const SingleItem = () => {

  const {id} = useParams()

  return (
    <>
      <h1>{id}Product item</h1>
    </>
  )
}

export default SingleItem
