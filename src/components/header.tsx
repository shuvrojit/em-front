import { Flex, Image, Spacer } from "@chakra-ui/react"
import Navbar from "./navbar"
import EazzlLogo from "../assets/eazzl-logo64x64.svg"

const Header = () => {
    return (
      <Flex p={"20px"} width={"100vw"} justify={"space-between"}>
            <Image src={EazzlLogo} alt="Eazzl" />
            <Navbar />
        </Flex>
    )
}

export default Header
