import React from 'react';
import { IconButton, HStack, Box, Text } from '@chakra-ui/react';

type NumberInput = {
  initialValue?: number;
};

export const NumberInput = ({ initialValue = 0 }) => {
  return (
    <HStack>
      <Box>
        <IconButton aria-label="decrement" variant="outline" rounded="full" height="40px" width="40px" size="md" />
      </Box>
      <Text>{initialValue}</Text>
      <Box>
        <IconButton aria-label="indecrement" variant="outline" rounded="full" height="40px" width="40px" size="md" />
      </Box>
    </HStack>
  );
};
