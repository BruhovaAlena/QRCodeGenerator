import QRCode from 'qrcode';

type GenerateQRCodeParams = {
  color: string;
  url: string;
  onSuccess: (url: string) => void;
};

export const generateQRCode = ({
  color,
  onSuccess,
  url,
}: GenerateQRCodeParams) => {
  QRCode.toDataURL(
    url,
    {
      width: 800,

      margin: 2,
      color: {
        dark: color,
      },
    },

    (err, url) => {
      if (err) return console.error(err);

      onSuccess(url);
    }
  );
};
