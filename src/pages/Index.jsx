import { Box, Container, Flex, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Flex direction="column" minHeight="100vh">
      {/* Navigation Bar */}
      <Box as="nav" bg="blue.500" color="white" py={4}>
        <Container maxW="container.md" display="flex" justifyContent="space-between">
          <Text fontSize="xl" fontWeight="bold">MyApp</Text>
          <Box>
            <Link to="/" style={{ margin: "0 10px" }}>Home</Link>
            <Link to="/about" style={{ margin: "0 10px" }}>About</Link>
            <Link to="/contact" style={{ margin: "0 10px" }}>Contact</Link>
          </Box>
        </Container>
      </Box>

      {/* Main Content Area */}
      <Container maxW="container.md" flex="1" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
        <VStack spacing={4}>
          <Text fontSize="2xl">Welcome to MyApp</Text>
          <Text>This is your main content area. Start building something amazing!</Text>
        </VStack>
      </Container>

      {/* Footer */}
      <Box as="footer" bg="gray.700" color="white" py={4}>
        <Container maxW="container.md" textAlign="center">
          <Text>&copy; {new Date().getFullYear()} MyApp. All rights reserved.</Text>
        </Container>
      </Box>
    </Flex>
  );
};

export default Index;