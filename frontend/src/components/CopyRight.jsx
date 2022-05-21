import React from 'react';

import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import Typography from "@mui/material/Typography";

const CopyRight = () => {
    return (
        <div style={{display:'flex',alignItems:'center',gap:'3px'}}>
            <Typography component="p" color="secondary.light"
            style={{
                color: 'secondary.light',
                fontFamily: 'poppins',
                fontSize: 'min(0.6rem, 0.7vw)',
            }}
            >Powered by <strong style={{color:'secondary'}}>Group C - Batch 1</strong></Typography>
            <ElectricBoltIcon style={{'fontSize':"small"}}></ElectricBoltIcon>
        </div>
    );
}

export default CopyRight;
