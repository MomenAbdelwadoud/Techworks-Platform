import React,{useState} from 'react'
import { QrReader } from '@blackbox-vision/react-qr-reader';

const Qrcode = ({open,showResult}) => {
  
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
    <div> 
      {open ? 
      <QrReader
      onResult={onScan}
      containerStyle={{ width: '350px',height: '350px' }}
      /> : null}
      
        
    </div>
  );
};
export default Qrcode;