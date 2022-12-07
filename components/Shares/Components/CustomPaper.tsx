import React from 'react'
import { Paper as MuiPaper } from '@mui/material'
import { ButtonProps } from "@mui/material/Button"
import { styled } from '@mui/system';

const NewPaper = styled(MuiPaper)(({theme}) => ({
    borderRadius: '10px',
    boxShadow: 'rgb(137 137 137 / 10%) 0px 6px 10px 0px',
    margin: '2rem auto',
    width: '100%'
}))

const CustomPaper = ({children}: any) => {
    return <NewPaper>
        {children}
    </NewPaper>
}

export default CustomPaper