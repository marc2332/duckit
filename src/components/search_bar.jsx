import * as React from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import styled from 'styled-components'
import Theme from '../theme.jsx'

const SearchBarStyled = styled.div`
	display: block;
	text-align: center;
	& button {
		margin: 15px;
	}
`

const SearchBar = () => {
	return  (
		<Theme>
			<SearchBarStyled>
				<TextField id="search-box" label="How are ducks" onKeyUp={goSearch}/>
				<br/>
				<Button variant="contained" color="primary" onClick={goSearch}>
					Duck it!
				</Button>
			</SearchBarStyled>
		</Theme>
	)
}
	  
function goSearch(e){
	if((e.keyCode && e.keyCode == 13 ) || e.type == "click"){
		const { value } = document.getElementById('search-box')
		window.location = getDDGUri(value)
	}
}

function getDDGUri(text){
	const ddg = "https://duckduckgo.com/"
	
	return ddg+text.replace(/ /gm,'%20')
}

export default SearchBar