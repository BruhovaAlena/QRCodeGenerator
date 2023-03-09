import { Button, Flex, Image, Text } from '@chakra-ui/react';
import { COLORS } from '../constants/colors';
import { AiOutlineCloudDownload } from 'react-icons/ai';

type QRCodeSectionProps = {
  isQRCodeGenerated: boolean;
  qrCodeURL: string;
};

const QRCodeSection = ({
  isQRCodeGenerated,
  qrCodeURL,
}: QRCodeSectionProps) => {
  return (
    <>
      {isQRCodeGenerated ? (
        <Flex
          flexDir="column"
          alignItems="center"
          justifyContent="center"
          maxW="600px"
          w="full"
          paddingX="10px"
        >
          <Image
            borderRadius="20px"
            w="100%"
            h="auto"
            maxH="600px"
            display="block"
            src={qrCodeURL}
            marginBottom="20px"
          />
          <Button
            bgColor={COLORS.lightBlue}
            color={COLORS.white}
            _hover={{ bgColor: COLORS.blue }}
            _active={{ bgColor: COLORS.darkBlue }}
            w="200px"
            rightIcon={<AiOutlineCloudDownload size="24px" />}
          >
            <a href={qrCodeURL} download="qrcode.png">
              Download
            </a>
          </Button>
        </Flex>
      ) : (
        <>
          <Text
            fontSize="2xl"
            fontWeight="semibold"
            mt="30px"
            color={COLORS.white}
          >
            Add url and generate QR Code
          </Text>
        </>
      )}
    </>
  );
};

export default QRCodeSection;
