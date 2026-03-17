import { createTheme, responsiveFontSizes } from '@mui/material/styles'

let theme = createTheme({
  palette: {
    primary: {
      main: '#fea116',
      dark: '#f29407',
      light: '#ffb84d',
    },
    secondary: {
      main: '#fea116',
      dark: '#f29407',
      light: '#ffb84d',
    },
    background: {
      default: '#fff9f3',
      paper: '#ffffff',
    },
    text: {
      primary: '#2b2b2b',
      secondary: '#5b5b5b',
    },
  },
  shape: {
    borderRadius: 16,
  },
  typography: {
    fontFamily: '"Manrope", "Plus Jakarta Sans", "Segoe UI", "Helvetica Neue", Arial, sans-serif',
    h1: {
      fontFamily: '"Sora", sans-serif',
      fontWeight: 700,
      color: '#2b2b2b',
      letterSpacing: '-0.03em',
      fontSize: 'clamp(2.1rem, 5vw, 4.5rem)',
      lineHeight: 1.1,
    },
    h2: {
      fontFamily: '"Sora", sans-serif',
      fontWeight: 700,
      color: '#2b2b2b',
      letterSpacing: '-0.03em',
      fontSize: 'clamp(1.9rem, 4.2vw, 3.8rem)',
      lineHeight: 1.15,
    },
    h3: {
      fontFamily: '"Sora", sans-serif',
      fontWeight: 700,
      color: '#2b2b2b',
      letterSpacing: '-0.02em',
      fontSize: 'clamp(1.7rem, 3.2vw, 3rem)',
      lineHeight: 1.2,
    },
    h4: {
      fontFamily: '"Sora", sans-serif',
      fontWeight: 700,
      color: '#2b2b2b',
      letterSpacing: '-0.01em',
      fontSize: 'clamp(1.35rem, 2.5vw, 2.3rem)',
      lineHeight: 1.25,
    },
    h5: {
      fontFamily: '"Sora", sans-serif',
      fontWeight: 700,
      color: '#2b2b2b',
      fontSize: 'clamp(1.08rem, 2vw, 1.6rem)',
      lineHeight: 1.35,
    },
    h6: {
      fontFamily: '"Manrope", sans-serif',
      fontWeight: 400,
      color: '#5b5b5b',
    },
    body1: {
      fontFamily: '"Manrope", sans-serif',
      lineHeight: 1.7,
      color: '#5b5b5b',
    },
    button: {
      fontFamily: '"Manrope", sans-serif',
      fontWeight: 700,
      textTransform: 'none',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        ':root': {
          colorScheme: 'light',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 18,
          backgroundImage: 'linear-gradient(180deg, #ffffff 0%, #fff7ef 100%)',
          transition: 'transform 320ms cubic-bezier(0.22, 1, 0.36, 1), box-shadow 320ms cubic-bezier(0.22, 1, 0.36, 1), border-color 320ms ease',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 18,
          transition: 'transform 320ms cubic-bezier(0.22, 1, 0.36, 1), box-shadow 320ms cubic-bezier(0.22, 1, 0.36, 1), border-color 320ms ease',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          paddingInline: 24,
          paddingBlock: 12,
          minHeight: 48,
          fontSize: '1rem',
        },
        outlined: {
          borderColor: '#fea116',
          color: '#fea116',
          '&:hover': {
            borderColor: '#f29407',
            backgroundColor: '#f29407',
            color: '#ffffff',
          },
        },
        containedPrimary: {
          backgroundColor: '#fea116',
          color: '#FFFFFF',
          '&:hover': {
            backgroundColor: '#f29407',
          },
        },
        containedSecondary: {
          backgroundColor: '#fea116',
          color: '#FFFFFF',
          '&:hover': {
            backgroundColor: '#f29407',
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: 600,
          transition: 'transform 260ms cubic-bezier(0.22, 1, 0.36, 1), background-color 260ms ease, border-color 260ms ease',
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          transition: 'color 260ms ease, transform 340ms cubic-bezier(0.22, 1, 0.36, 1)',
        },
      },
    },
  },
})

theme = responsiveFontSizes(theme)

export const appTheme = theme

