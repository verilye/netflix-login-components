import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from '@mui/material';
import './App.css';
import Layout from './layouts/layout';

function App() {


  const themeDark = createTheme({
    palette: {
      background: {
        default: "#222222"
      },
      text: {
        primary: "#ffffff"
      }
    }
  });

  return (
    <ThemeProvider theme={themeDark}>
      <CssBaseline/>
      <div className="App">
        <Layout/>
      </div>
    </ThemeProvider>
  );
}

export default App;
