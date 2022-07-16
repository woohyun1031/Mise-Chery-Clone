import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import Header from './components/Headers/Header';
import SubHeader from './components/Headers/SubHeader';
import CardList from './components/CardList';
import CardHeader from './components/Headers/CardHeader';
import Modal from './components/Modals/Modal';
import FloatButton from './components/FloatButton';
import { AppDispatch } from './store/configStore';
import { getList } from './store/modules/list';

const App = () => {
	const dispatch = useDispatch<AppDispatch>();

	useEffect(() => {
		dispatch(getList());
	}, []);

	return (
		<>
			<GlobalStyle />
			<HeaderContainer>
				<Header />
				<SubHeader />
				<CardHeader />
			</HeaderContainer>
			<CardList />
			<FloatButton />
			<Modal />
		</>
	);
};

export default App;

const HeaderContainer = styled.div`
	position: fixed;
	top: 0;
	width: 100%;
	background-color: #ffffff;
	z-index: 100;
`;
