import 'fontsource-roboto';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import NavigationDrawer from './components/NavigationDrawer'
import { BrowserRouter as Router } from "react-router-dom";

const darkTheme = createMuiTheme({
  palette: {
    type: 'light',
  },
});

function App() {

    return (

		<Router>
	    	<ThemeProvider theme={darkTheme}>
	        	<CssBaseline />
			</ThemeProvider>
			<NavigationDrawer/>
		</Router>
    );
}

export default App;

