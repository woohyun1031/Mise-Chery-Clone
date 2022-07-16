import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import Header from './components/Header';
import SubHeader from './components/SubHeader';
import CardList, { CardType } from './components/CardList';
import CardHeader from './components/CardHeader';
import Modal from './components/Modal';
import FloatButton from './components/FloatButton';
import { AppDispatch, RootState } from './store/configStore';
import { changeStudy, getList, isAllOpen, setList } from './store/modules/list';

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
