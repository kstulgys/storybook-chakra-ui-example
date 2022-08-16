import type { NextPage } from 'next';
import Head from 'next/head';
import { NumberInput } from '../ui/components/NumberInput';
import { Container, Button, Stack } from '@chakra-ui/react';

const Home: NextPage = () => {
  return (
    <Container p={4}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Stack>
        <Button>Hello World</Button>
        <NumberInput />
      </Stack>
    </Container>
  );
};

export default Home;
