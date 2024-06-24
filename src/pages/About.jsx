import { Container, Text, VStack, Heading } from "@chakra-ui/react";

const About = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" bg="teal.500" color="white">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">Sobre a Clínica BioLíder</Heading>
        <Text fontSize="xl">A Clínica BioLíder é dedicada a fornecer cuidados de saúde de alta qualidade com uma equipe de profissionais experientes.</Text>
      </VStack>
    </Container>
  );
};

export default About;