import { Button, Text, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <Flex p="20px">
        <Link to="/cart">
        <Button>
          <Text>Cart</Text>
        </Button>
          </Link>

        <Link to="/login">
          <Button>
            <Text> Sign Up</Text>
          </Button>
        </Link>
      </Flex>
    </>
  );
};

export default Navbar;
