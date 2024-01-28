import React from "react";
import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';

const AntSwitch = styled(Switch)(({ theme }) => ({
    width: 28,
    height: 16,
    padding: 0,
    display: 'flex',
    '&:active': {
      '& .MuiSwitch-thumb': {
        width: 15,
      },
      '& .MuiSwitch-switchBase.Mui-checked': {
        transform: 'translateX(9px)',
      },
    },
    '& .MuiSwitch-switchBase': {
      padding: 2,
      '&.Mui-checked': {
        transform: 'translateX(12px)',
        color: '#fff',
        '& + .MuiSwitch-track': {
          opacity: 1,
          backgroundColor: "#154367"
        },
      },
    },
    '& .MuiSwitch-thumb': {
      boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
      width: 12,
      height: 12,
      borderRadius: 6,
      transition: theme.transitions.create(['width'], {
        duration: 200,
      }),
    },
    '& .MuiSwitch-track': {
      borderRadius: 16 / 2,
      opacity: 1,
      backgroundColor:
        theme.palette.mode === 'dark' ? 'rgba(255,255,255,.35)' : 'rgba(0,0,0,.25)',
      boxSizing: 'border-box',
    },
}));

export default function Toggle ({label, handleToggle, removeToggled, tooltipTitle}) {
    const handleCheckToggle = () => {
        handleToggle()
    }
    return (
        <>
          <Tooltip title={tooltipTitle} placement="top">
            <Stack direction="row" spacing={1} alignItems="center">
                <AntSwitch checked={removeToggled} onChange={handleCheckToggle} inputProps={{ 'aria-label': 'ant design' }} />
                {removeToggled ? (
                    <Typography style={{fontFamily: "Quicksand", cursor: "pointer"}} onClick={handleCheckToggle}>{label}</Typography>
                ) : (
                    <Typography className="disabled-color" style={{fontFamily: "Quicksand", cursor: "pointer"}} onClick={handleCheckToggle}>{label}</Typography>
                )}
            </Stack>
          </Tooltip>
        </>
    )
}