import React from 'react'
import { Drawer } from '@mui/material'
import { styled } from '@mui/system';

const NewDrawer = styled(Drawer)(({theme}) => ({
    background: 'transparent',
}))

const CustomDrawer = ({children}: any) => {
    return <NewDrawer>
        {children}
    </NewDrawer>
}

export default CustomDrawer