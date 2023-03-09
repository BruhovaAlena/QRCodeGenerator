import { useState } from 'react';
import { Flex, Heading } from '@chakra-ui/react';
import ColorPicker from './components/ColorPicker';
import { COLORS } from './constants/colors';
import { generateQRCode } from './utils/generate';
import Form from './components/GenerateSection';
import QRCodeSection from './components/QRCodeSection';

function App() {
  const [url, setUrl] = useState('');
  const [qrCode, setQrCode] = useState('');
  const [selectedColor, setSelectedColor] = useState(COLORS.black);

  return (
    <Flex
      flexDir="column"
      alignItems="center"
      bgColor={COLORS.backgroundBlue}
      height="full"
      gap="10px"
      my="20px"
    >
      <Heading textAlign="center" my="10px" color={COLORS.white}>
        QR Code Generator
      </Heading>
      <Form
        onChangeValue={(e) => setUrl(e)}
        onClickButton={() =>
          generateQRCode({
            color: selectedColor,
            onSuccess: (generatedUrl) => setQrCode(generatedUrl),
            url: url,
          })
        }
        value={url}
      />
      <ColorPicker
        onClickColor={(color) => setSelectedColor(color)}
        selectedColor={selectedColor}
      />
      <QRCodeSection isQRCodeGenerated={Boolean(qrCode)} qrCodeURL={qrCode} />
    </Flex>
  );
}

export default App;
