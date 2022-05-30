import React,{useState,useEffect} from 'react'
import { QrReader } from '@blackbox-vision/react-qr-reader';

const Qrcode = ({open}) => {
  const [data, setData] = useState('No result');


  return (
    <div> 
      <QrReader
      onResult={(result, error) => {
        if (!!result) {
          setData(result?.text);
        }
        
        // if (!!error) {
        //   console.info(error);
        // }
      }}
      containerStyle={{ width: '320px',height: '280px' }}
      />
        
    </div>
  );
};
export default Qrcode;