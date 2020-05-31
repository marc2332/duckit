import * as React from 'react'
import styled from 'styled-components'
import SearchBar from './search_bar.jsx'

const AppStyled = styled.div`
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`

const App = () => {
	return (
		<AppStyled>
			<SearchBar/>
		</AppStyled>
	)
}

export default App