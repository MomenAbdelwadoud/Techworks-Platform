import React,{useEffect} from 'react'
import { QrReader } from '@blackbox-vision/react-qr-reader';

const Qrcode = ({showResult}) => {
  
  useEffect(() => {
    return () => {
      console.log("cleaned up");
    };
  }, []);
  const onScan = (result,error) => {
    if (!!result) {
      console.log(result?.text)
      showResult(result?.text)
    }
    
    // if (!!error) {
    //   console.info(error);
    // }
  }

  return (
      <QrReader
      onResult={onScan}
      containerStyle={{ width: '350px',height: '350px' }}
      constraints={{video: {facingMode: "environment"}}}
      />
  );
};
export default Qrcode;