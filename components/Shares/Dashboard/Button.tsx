import React from 'react'
import { Button, Grid } from '@mui/material'
import { ButtonProps } from "@mui/material/Button"
import { styled } from '@mui/system';
import { Add } from '@mui/icons-material';
import Link from 'next/link';
import { blue } from '@mui/material/colors';

const DefaultButton = styled(Button)<ButtonProps>(({theme}) => ({
    backgroundColor: blue[700] + ' !important',
    borderRadius: '10px',
    boxShadow: 'rgb(137 137 137 / 10%) 0px 6px 10px 0px',
    textTransform: 'capitalize',
    color: "#fff",
    height: 'fit-content',
    '&:hover': {
        backgroundColor: blue[700] + ' !important',
        boxShadow: '#1565c0 0px 5px 10px 0px inset',
    }
}))

const AddItemButton = ({href='', loading=false, startIcon ,children}: any) => {

    return loading==true ? (
    <DefaultButton type='button' variant="contained" startIcon={startIcon!='' ? startIcon : <Add />} disabled>
        {children}
    </DefaultButton>
    ) : (
        href !== '' ? (
        <Link href={href} passHref>
            <a>
                <DefaultButton variant="contained" startIcon={startIcon!='' ? startIcon : <Add />}>
                    {children}
                </DefaultButton>
            </a>
        </Link>
        ) : (
            <DefaultButton type='submit' variant="contained" startIcon={startIcon!='' ? startIcon : <Add />}>
                {children}
            </DefaultButton>
        )
    )
}

export default AddItemButton