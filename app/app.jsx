import React from 'react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import AppContainer from "./flux/containers/AppContainer.jsx";
import CssBaseline from '@material-ui/core/CssBaseline';
export default class App extends React.Component{
    constructor(props){
        super(props);
    }


    render(){
      const theme = createMuiTheme({
        palette: {
          primary: {
            // light: will be calculated from palette.primary.main,
            main: '#3f51b5',
            // dark: will be calculated from palette.primary.main,
            // contrastText: will be calculated to contast with palette.primary.main
          },
          secondary: {
            main: '#607d8b',
            // dark: will be calculated from palette.secondary.main,
          },
          // error: will use the default color
        },
      });
      debugger;
        return(
          <CssBaseline>
            <MuiThemeProvider theme={theme}>
                <AppContainer />
            </MuiThemeProvider>
          </CssBaseline>);
    }
}



ReactDOM.render(<App />, document.getElementById("app"));