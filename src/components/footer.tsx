import { Flex, Image } from "@chakra-ui/react";
import styled from "styled-components";
import facebookIcon from "../assets/facebook.svg";

const Title3 = styled.div`
  font-size: 1.3rem;
`;

const FContainer = styled.div`
  display: flex;

  li {
    list-style: none;
  }
  flex-direction: column;
`;

const Container = styled.div`
  background-color: black;
  color: white;
  height: 350px;
  padding: 5rem 4rem;
  p {
    padding-top: 3rem;
    text-align: center;
  }
  bottom: 0;
`;

const Footer = () => {
  return (
    <Container>
      <Flex justify={"space-between"}>
        <FContainer>
          <Title3>Products</Title3>
          <ul>
            <li>Men</li>
            <li>Women</li>
            <li>Kids</li>
          </ul>
        </FContainer>
        <FContainer>
          <Title3>Collection</Title3>
          <ul>
            <li>Punjabi</li>
            <li>Fotua</li>
            <li>Shoes</li>
          </ul>
        </FContainer>
        <FContainer>
          <Title3>Info</Title3>
          <ul>
            <li>Locations</li>
            <li>Share</li>
            <li>Terms & Conditions</li>
          </ul>
        </FContainer>
        <FContainer>
          <Title3>Support</Title3>
          <ul>
            <li>Contact</li>
            <li>Email</li>
          </ul>
        </FContainer>
        <FContainer>
          <Title3>Follow Us</Title3>
          <ul>
            <li>
              <Image src={facebookIcon} alt="facebook" />
            </li>
            <li>I</li>
            <li>T</li>
            <li>P</li>
            <li>Y</li>
          </ul>
        </FContainer>
      </Flex>

      <p>Copyright @ 2023, EAZZL</p>
    </Container>
  );
};

export default Footer;
