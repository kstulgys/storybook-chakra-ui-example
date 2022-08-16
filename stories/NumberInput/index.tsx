import React from 'react';
import { IconButton, HStack, Box, Stack } from '@chakra-ui/react';

export const NumberInput = () => {
  return (
    <Stack isInline>
      <Box>
        <IconButton aria-label="decrement" variant="outline" rounded="full" height="40px" width="40px" size="md" />
      </Box>
      <Box>
        <IconButton aria-label="indecrement" variant="outline" rounded="full" height="40px" width="40px" size="md" />
      </Box>
    </Stack>
  );
};
