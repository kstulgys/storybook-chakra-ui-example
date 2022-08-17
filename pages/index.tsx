import type { NextPage } from 'next';
import Head from 'next/head';
import { NumberInput } from '../ui/components/NumberInput';
import { Container, Button, Stack, Text, Box } from '@chakra-ui/react';

const Home: NextPage = () => {
  return (
    <Container p={4}>
      <Stack direction={['column', 'column', 'row']}>
        <Button variant="secondary" rounded={12}>
          Hello World
        </Button>
        <Text color="primary.100">Hi there</Text>
        <NumberInput />
        <Box boxSize="50px" bg="primary.100" rounded={12} />
      </Stack>
    </Container>
  );
};

export default Home;
