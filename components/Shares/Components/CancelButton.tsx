import React from 'react'
import { Button } from '@mui/material'
import { ButtonProps } from "@mui/material/Button"
import { styled } from '@mui/system';
import { Delete } from '@mui/icons-material';

const DefaultButton = styled(Button)<ButtonProps>(({theme}) => ({
    backgroundColor: '#c10000',
    borderRadius: '10px',
    boxShadow: 'rgb(0 193 148 / 43%) 0px 2px 10px 0px',
    textTransform: 'capitalize',
    height: 'fit-content',
    margin: '0 1rem',
    '&:hover': {
        backgroundColor: '#c10000',
        boxShadow: 'rgb(0 193 148 / 43%) 0px 5px 10px 0px inset',
    }
}))

const CancelButton = ({children}: any) => {
    return (
        <DefaultButton type='submit' variant="contained" startIcon={<Delete />}>
            {children}
        </DefaultButton>
    )
}

export default CancelButton