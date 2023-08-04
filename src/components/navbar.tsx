import { Button, Text, Flex, Link } from "@chakra-ui/react"

const Navbar = () => {
  return (
    <>
      <Flex p="20px">
        <Button>
          <Text>Cart</Text>
        </Button>
        <Button>
          <Text>Sign Up</Text>
        </Button>

        </Flex>
    </>
  )
}

export default Navbar
