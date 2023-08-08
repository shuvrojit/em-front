import Product from "../components/card";
import products from "../../data";
import { Box, SimpleGrid } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <SimpleGrid minChildWidth="320px">
        {products.map((product) => (
          <Link to="/products/:id">
          <Box margin="50px">
            <Product product={product} key={product._id} />
          </Box>
          </Link>
        ))}
      </SimpleGrid>
    </>
  );
};

export default Home;
