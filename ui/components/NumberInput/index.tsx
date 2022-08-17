import React from 'react';
import { IconButton, HStack, Box, Text, Input } from '@chakra-ui/react';

type NumberInputProps = {
  initialValue?: number;
  error?: string;
  label?: string;
};

export function NumberInput(props: NumberInputProps) {
  const { initialValue } = props;
  const { value, onDecrement, onIncrement, setValue, onInputChange } = useNumberInput({ initialValue });

  return (
    <HStack spacing={0}>
      <Box>
        <IconButton
          onClick={onDecrement}
          aria-label="decrement"
          variant="outline"
          rounded="full"
          height="40px"
          width="40px"
          size="md"
          icon={
            <Text as="span" fontSize="2xl" fontWeight="light" mb={0.5}>
              -
            </Text>
          }
        />
      </Box>
      <Input
        type="number"
        onChange={onInputChange}
        rounded="none"
        w="38px"
        textAlign="center"
        variant="unstyled"
        _focus={{
          borderBottomColor: 'green',
          borderBottomWidth: '1px',
        }}
        value={value}
      />
      <Box>
        <IconButton
          onClick={onIncrement}
          aria-label="indecrement"
          variant="outline"
          rounded="full"
          height="40px"
          width="40px"
          size="md"
          icon={
            <Text as="span" fontSize="2xl" fontWeight="light" mb={0.5}>
              +
            </Text>
          }
        />
      </Box>
    </HStack>
  );
}

function useNumberInput({ initialValue = 0 }) {
  const [value, setValue] = React.useState(initialValue);

  const onIncrement = () => {
    setValue((prev) => prev + 1);
  };
  const onDecrement = () => {
    setValue((prev) => prev - 1);
  };
  const onInputChange = (e) => {
    setValue(e.target.valueAsNumber);
  };

  return {
    onDecrement,
    value,
    onIncrement,
    setValue,
    onInputChange,
  };
}
