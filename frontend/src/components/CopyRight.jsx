import React from 'react';

import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import Typography from "@mui/material/Typography";

const CopyRight = () => {
    return (
        <div style={{display:'flex',alignContent:'center',gap:'3px',position:'absolute',bottom:'20px'}}>
            <Typography component="p" color="secondary.light"
            style={{
                color: 'secondary.light',
                fontFamily: 'poppins',
                fontSize: 'min(0.55rem, 0.8vw)',
            }}
            >Powered by <strong style={{color:'secondary'}}>Group C - Batch 1</strong></Typography>
            <ElectricBoltIcon style={{'fontSize':"small"}} color='secondary.light'></ElectricBoltIcon>
        </div>
    );
}

export default CopyRight;
