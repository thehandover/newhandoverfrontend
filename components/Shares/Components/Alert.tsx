import Snackbar, { SnackbarOrigin } from '@mui/material/Snackbar';
import { makeStyles } from '@mui/styles';
import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import { styled, useTheme, Theme, CSSObject, createTheme, ThemeProvider } from '@mui/material/styles';
import MuiAlert, { AlertProps } from '@mui/material/Alert';

export interface State extends SnackbarOrigin {
    open: boolean;
}

const theme = createTheme({
    components: {
        MuiAlert: {
            styleOverrides: {
                
            }
        },
        MuiSnackbar: {
        },
    },
})

const Alert = (props: any) => {

    const [state, setState] = useState<any>({
        open: props.open,
        vertical: 'top',
        horizontal: 'right',
    });
    const { vertical, horizontal, open } = state;

    const handleClick = (newState: SnackbarOrigin) => () => {
        setState({ open: true, ...newState });
    };

    const handleClose = () => {
        props.setAlert(false)
        setState({ ...state, open: false });
    };

    const buttons = (
        <React.Fragment>
            <Button
                onClick={handleClick({
                    vertical: 'top',
                    horizontal: 'center',
                })}
            >
                Top-Center
            </Button>
            <Button
                onClick={handleClick({
                    vertical: 'top',
                    horizontal: 'right',
                })}
            >
                Top-Right
            </Button>
            <Button
                onClick={handleClick({
                    vertical: 'bottom',
                    horizontal: 'right',
                })}
            >
                Bottom-Right
            </Button>
            <Button
                onClick={handleClick({
                    vertical: 'bottom',
                    horizontal: 'center',
                })}
            >
                Bottom-Center
            </Button>
            <Button
                onClick={handleClick({
                    vertical: 'bottom',
                    horizontal: 'left',
                })}
            >
                Bottom-Left
            </Button>
            <Button
                onClick={handleClick({
                    vertical: 'top',
                    horizontal: 'left',
                })}
            >
                Top-Left
            </Button>
        </React.Fragment>
    );

    const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert( props, ref, ) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });

    useEffect(()=> {
        setState({...state, open: props.open})
    }, [props])

    return (
        <ThemeProvider theme={theme}>
            <Snackbar 
                anchorOrigin={{ vertical, horizontal }}
                open={open}
                onClose={handleClose}
                key={vertical + horizontal} 
            >
                <Alert onClose={handleClose} severity={`info`} sx={{ width: '100%' }}>
                    {props.message}
                </Alert>
            </Snackbar>
        </ThemeProvider>
    );
}
Alert.defaultProps = {
    open: false,
    setAlert: () => {},
    message: ""
}

export default Alert;