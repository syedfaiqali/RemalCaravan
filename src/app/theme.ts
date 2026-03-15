import { createTheme, responsiveFontSizes } from '@mui/material/styles'

let theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
      dark: '#125ea8',
      light: '#4b9aea',
    },
    secondary: {
      main: '#ff9800',
      dark: '#de7f00',
      light: '#ffb547',
    },
    background: {
      default: '#f3f7fc',
      paper: '#ffffff',
    },
    text: {
      primary: '#0F172A',
      secondary: '#334155',
    },
  },
  shape: {
    borderRadius: 16,
  },
  typography: {
    fontFamily: '"Plus Jakarta Sans", "Manrope", "Segoe UI", "Helvetica Neue", Arial, sans-serif',
    h1: {
      fontFamily: '"Poppins", sans-serif',
      fontWeight: 800,
      color: '#0F172A',
      letterSpacing: '-0.03em',
      fontSize: 'clamp(2.1rem, 5vw, 4.5rem)',
      lineHeight: 1.1,
    },
    h2: {
      fontFamily: '"Poppins", sans-serif',
      fontWeight: 800,
      color: '#0F172A',
      letterSpacing: '-0.03em',
      fontSize: 'clamp(1.9rem, 4.2vw, 3.8rem)',
      lineHeight: 1.15,
    },
    h3: {
      fontFamily: '"Poppins", sans-serif',
      fontWeight: 800,
      color: '#0F172A',
      letterSpacing: '-0.02em',
      fontSize: 'clamp(1.7rem, 3.2vw, 3rem)',
      lineHeight: 1.2,
    },
    h4: {
      fontFamily: '"Poppins", sans-serif',
      fontWeight: 800,
      color: '#0F172A',
      letterSpacing: '-0.01em',
      fontSize: 'clamp(1.35rem, 2.5vw, 2.3rem)',
      lineHeight: 1.25,
    },
    h5: {
      fontFamily: '"Poppins", sans-serif',
      fontWeight: 800,
      color: '#0F172A',
      fontSize: 'clamp(1.08rem, 2vw, 1.6rem)',
      lineHeight: 1.35,
    },
    h6: {
      fontFamily: '"Plus Jakarta Sans", sans-serif',
      fontWeight: 400,
      color: '#334155',
    },
    body1: {
      fontFamily: '"Plus Jakarta Sans", sans-serif',
      lineHeight: 1.7,
      color: '#334155',
    },
    button: {
      fontFamily: '"Plus Jakarta Sans", sans-serif',
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
          backgroundImage: 'linear-gradient(180deg, #ffffff 0%, #fbfdff 100%)',
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
        containedPrimary: {
          backgroundColor: '#141414',
          color: '#FFFFFF',
          '&:hover': {
            backgroundColor: '#2a2a2a',
          },
        },
        containedSecondary: {
          backgroundColor: '#141414',
          color: '#FFFFFF',
          '&:hover': {
            backgroundColor: '#2a2a2a',
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
