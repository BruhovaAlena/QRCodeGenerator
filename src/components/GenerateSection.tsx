import { Button, Flex, Input } from '@chakra-ui/react';
import { COLORS } from '../constants/colors';

type GenerateSectionProps = {
  value: string;
  onChangeValue: (value: string) => void;
  onClickButton: () => void;
};

const GenerateSection = ({
  value,
  onChangeValue,
  onClickButton,
}: GenerateSectionProps) => {
  return (
    <Flex flexWrap="wrap" justifyContent="center" gap="10px">
      <Input
        placeholder="e.g. https://google.com"
        type="text"
        value={value}
        onChange={(e) => onChangeValue(e.target.value)}
        borderColor={COLORS.white}
        focusBorderColor={COLORS.blue}
        variant="outline"
        textColor={COLORS.white}
        w="350px"
      />
      <Button
        onClick={onClickButton}
        bgColor={COLORS.lightBlue}
        color={COLORS.white}
        width="120px"
        _hover={{ bgColor: COLORS.blue }}
        _active={{ bgColor: COLORS.darkBlue }}
      >
        Generate
      </Button>
    </Flex>
  );
};

export default GenerateSection;
