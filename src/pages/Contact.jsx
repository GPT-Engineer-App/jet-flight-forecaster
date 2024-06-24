import { Container, Text, VStack, Heading } from "@chakra-ui/react";

const Contact = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" bg="teal.500" color="white">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">Contato</Heading>
        <Text fontSize="xl">Entre em contato conosco para agendar uma consulta ou obter mais informações.</Text>
      </VStack>
    </Container>
  );
};

export default Contact;