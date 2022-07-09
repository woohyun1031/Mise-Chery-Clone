import GlobalStyle from './styles/GlobalStyle';

import Header from './components/Header';
import SubHeader from './components/SubHeader';
import styled from 'styled-components';
import CardList from './components/CardList';
import CardHeader from './components/CardHeader';
const App = () => {
	return (
		<>
			<GlobalStyle />
			<HeaderContainer>
				<Header />
				<SubHeader />
				<CardHeader />
			</HeaderContainer>
			<CardList />
		</>
	);
};

export default App;

const HeaderContainer = styled.div`
	position: fixed;
	top: 0;
	width: 100%;
`;
