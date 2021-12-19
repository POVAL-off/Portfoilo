import {createTheme} from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
            main: '#8388B8',
            light: '8591FF',
        },
        background: {
            default: '#141629',
            paper: '#24273E'
        },
        text: {
            primary: '#8388B8'
        }
    },
    typography: {
        fontFamily: 'Ubuntu'
    },
    shape: {
        borderRadius: 20
    },
    components: {
        MuiSvgIcon: {
            styleOverrides: {
                root: {
                    width: 30,
                    height: 30
                }
            }
        }
    }
});

export default theme;