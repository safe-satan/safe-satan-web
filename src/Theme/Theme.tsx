import { createMuiTheme, ThemeOptions, ThemeProvider } from '@material-ui/core'

const themeBase: ThemeOptions = {
  palette: {
    background: {
      default: '#47b1b1',
      paper: '#D3E8FB',
    },
    primary: {
      main: '#fff',
    },
    secondary: {
      main: '#8D3B72',
    },
  },
}

const theme = createMuiTheme(themeBase)

const Theme: React.FC = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

export default Theme
