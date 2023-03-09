import { Flex, Box } from '@chakra-ui/react';
import { COLORS, PICKER_COLORS } from '../constants/colors';

type ColorPickerProps = {
  onClickColor: (color: string) => void;
  selectedColor: string;
};

const ColorPicker = ({ onClickColor, selectedColor }: ColorPickerProps) => {
  return (
    <Flex gap="10px">
      {PICKER_COLORS.map((color) => (
        <Box
          w="40px"
          h="40px"
          bgColor={color}
          borderRadius="6px"
          onClick={() => onClickColor(color)}
          borderColor={
            color === selectedColor ? COLORS.white : COLORS.backgroundBlue
          }
          borderWidth="2px"
          cursor="pointer"
        />
      ))}
    </Flex>
  );
};

export default ColorPicker;
