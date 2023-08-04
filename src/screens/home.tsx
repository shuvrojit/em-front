import Product from "../components/card"
import products from "../../data"
import { Box, SimpleGrid } from "@chakra-ui/react"

const Home = () => {
  return (
    <>
      <SimpleGrid minChildWidth="320px">
      {products.map((product) => (
        <Box margin="50px">
          {console.log(product._id)}
        <Product product={product} key={product._id} />
        </Box>
      ))}
      </SimpleGrid>
    </>
  )
}

export default Home
