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
      primary: '#0f2942',
      secondary: '#5d6f82',
    },
  },
  shape: {
    borderRadius: 16,
  },
  typography: {
    fontFamily: '"Manrope", "Segoe UI", "Helvetica Neue", Arial, sans-serif',
    h1: {
      fontWeight: 800,
      letterSpacing: '-0.03em',
      fontSize: 'clamp(2.1rem, 5vw, 4.5rem)',
      lineHeight: 1.1,
    },
    h2: {
      fontWeight: 800,
      letterSpacing: '-0.03em',
      fontSize: 'clamp(1.9rem, 4.2vw, 3.8rem)',
      lineHeight: 1.15,
    },
    h3: {
      fontWeight: 800,
      letterSpacing: '-0.02em',
      fontSize: 'clamp(1.7rem, 3.2vw, 3rem)',
      lineHeight: 1.2,
    },
    h4: {
      fontWeight: 780,
      letterSpacing: '-0.01em',
      fontSize: 'clamp(1.35rem, 2.5vw, 2.3rem)',
      lineHeight: 1.25,
    },
    h5: {
      fontWeight: 740,
      fontSize: 'clamp(1.08rem, 2vw, 1.6rem)',
      lineHeight: 1.35,
    },
    body1: {
      lineHeight: 1.7,
    },
    button: {
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
          borderRadius: 999,
          paddingInline: 18,
          paddingBlock: 8,
          minHeight: 40,
        },
        containedPrimary: {
          boxShadow: '0 10px 24px rgba(25,118,210,0.22)',
        },
        containedSecondary: {
          boxShadow: '0 10px 24px rgba(255,152,0,0.25)',
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
