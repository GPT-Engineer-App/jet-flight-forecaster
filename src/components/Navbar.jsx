import { Box, Flex, Link } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="teal.600" px={4} py={2} color="white">
      <Flex maxW="container.md" mx="auto" justify="space-between">
        <Link as={NavLink} to="/" _hover={{ textDecoration: "none" }} _activeLink={{ fontWeight: "bold" }}>
          Início
        </Link>
        <Link as={NavLink} to="/about" _hover={{ textDecoration: "none" }} _activeLink={{ fontWeight: "bold" }}>
          Sobre
        </Link>
        <Link as={NavLink} to="/services" _hover={{ textDecoration: "none" }} _activeLink={{ fontWeight: "bold" }}>
          Serviços
        </Link>
        <Link as={NavLink} to="/contact" _hover={{ textDecoration: "none" }} _activeLink={{ fontWeight: "bold" }}>
          Contato
        </Link>
      </Flex>
    </Box>
  );
};

export default Navbar;