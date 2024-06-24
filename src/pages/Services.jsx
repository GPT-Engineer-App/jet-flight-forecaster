import { Container, Text, VStack, Heading } from "@chakra-ui/react";

const Services = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" bg="teal.500" color="white">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">Nossos Serviços</Heading>
        <Text fontSize="xl">Oferecemos uma ampla gama de serviços médicos para atender às suas necessidades de saúde.</Text>
      </VStack>
    </Container>
  );
};

export default Services;