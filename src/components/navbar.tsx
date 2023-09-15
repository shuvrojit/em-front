import { Button, Text, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import CartLogo from "../assets/cart.svg";

const Navbar = () => {
  return (
    <>
      <Flex>
        <Link to="/cart">
          <Button>
            <img src={CartLogo} alt="Cart logo" />
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
