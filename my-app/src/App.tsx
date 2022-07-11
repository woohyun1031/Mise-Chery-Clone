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
import { getList, setList } from './store/modules/list';

const App = () => {
	const dispatch = useDispatch<AppDispatch>();
	const _isOpen = useSelector((state: RootState) => state.modal.isOpen);
	const _isList = useSelector((state: RootState) => state.list.list);
	const [isAllShow, setIsAllShow] = useState(true);

	useEffect(() => {
		dispatch(getList());
	}, []);

	const showAllCard = () => {
		const isOpenCheck = isAllShow;
		const newList = _isList.map((l: CardType) => {
			return { ...l, isOpen: isAllShow };
		});

		setIsAllShow(!isOpenCheck);
		dispatch(setList(newList));
	};

	return (
		<>
			<GlobalStyle />
			<HeaderContainer>
				<Header />
				<SubHeader />
				<CardHeader />
			</HeaderContainer>
			<CardList />
			<FloatButton _onClick={showAllCard} _isOpen={isAllShow} />
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
