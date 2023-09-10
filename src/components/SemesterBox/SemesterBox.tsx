import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Button,
} from "@chakra-ui/react";

const SemesterBox = () => {
  return (
    <Card maxW="sm" bgColor="#FEF9E7">
      <CardBody>
        <Image
          src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          alt="Green double couch with wooden legs"
          borderRadius="1g"
        />
        <Stack mt="6" spacing="3">
          <Heading size="lg" textAlign="center" fontWeight="bold">
            Semester 1
          </Heading>
        </Stack>
      </CardBody>
      <CardFooter>
        <Button
          size="md"
          height="48px"
          width="200px"
          border="2px"
          borderColor="yellow.500"
        >
          Click Here
        </Button>
      </CardFooter>
    </Card>
  );
};

export default SemesterBox;
