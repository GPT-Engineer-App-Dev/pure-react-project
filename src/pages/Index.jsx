import { Box, Container, Flex, Text, VStack } from "@chakra-ui/react";

const Index = () => {
  return (
    <Flex direction="column" minHeight="100vh">
      {/* Navigation Bar */}
      <Box as="nav" bg="blue.500" color="white" py={4}>
        <Container maxW="container.md">
          <Text fontSize="xl" fontWeight="bold">My Website</Text>
        </Container>
      </Box>

      {/* Main Content Area */}
      <Container maxW="container.md" flex="1" py={8}>
        <VStack spacing={4}>
          <Text fontSize="2xl">Welcome to My Website</Text>
          <Text>This is the main content area. Start adding your content here.</Text>
        </VStack>
      </Container>

      {/* Footer */}
      <Box as="footer" bg="gray.700" color="white" py={4}>
        <Container maxW="container.md">
          <Text textAlign="center">© 2023 My Website. All rights reserved.</Text>
        </Container>
      </Box>
    </Flex>
  );
};

export default Index;