import { Flex, Image, Spacer } from "@chakra-ui/react";
import Navbar from "./navbar";
import EazzlLogo from "../assets/eazzl-logo48x48.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Flex width={"100vw"} justify={"space-between"}>
      <Link to="/">
        <Image m={"1rem"} src={EazzlLogo} alt="Eazzl" />
      </Link>
      <Navbar />
    </Flex>
  );
};

export default Header;
