import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import * as React from 'react'

const Pallete = createMuiTheme({
	palette: {
		primary: {
			main: "#D94A27"
		}
	},
})

function Theme({ children }){
	return <ThemeProvider theme={Pallete}>{children}</ThemeProvider>
}

export default Theme