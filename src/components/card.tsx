import { Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, Image, Stack, Text } from "@chakra-ui/react"

const Product = ({product}) => {
  return (
      <Card maxW="sm" >
      <CardBody>
        <Image src={product.image} alt={product.name} />
        <Stack>
          <Heading>{product.name}</Heading>
          <Text>{product.description}</Text>
          <Text>{product.price}</Text>
        </Stack>
      </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup>
            <Button>Buy Now</Button>
            <Button>Add to cart</Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
  )
}

export default Product
