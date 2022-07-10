import styled from 'styled-components';

import GlobalStyle from './styles/GlobalStyle';

import Header from './components/Header';
import SubHeader from './components/SubHeader';
import CardList from './components/CardList';
import CardHeader from './components/CardHeader';
import Modal from './components/Modal';
import { RootState } from './store/configStore';
import { useSelector } from 'react-redux';

const App = () => {
	const _isOpen = useSelector((state: RootState) => state.modal.isOpen);

	return (
		<>
			<GlobalStyle />
			<HeaderContainer>
				<Header />
				<SubHeader />
				<CardHeader />
			</HeaderContainer>
			<CardList />
			{_isOpen && <Modal />}
		</>
	);
};

export default App;

const HeaderContainer = styled.div`
	position: fixed;
	top: 0;
	width: 100%;
	z-index: 100;
`;
