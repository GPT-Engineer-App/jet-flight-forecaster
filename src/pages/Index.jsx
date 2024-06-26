import { Container, Text, VStack, Heading } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" bg="teal.500" color="white">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">Bem-vindo à Clínica BioLíder</Heading>
        <Text fontSize="xl">Sua saúde em boas mãos</Text>
      </VStack>
    </Container>
  );
};

export default Index;