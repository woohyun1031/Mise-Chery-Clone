import { MouseEvent } from 'react';
import styled from 'styled-components';
import Card from './Card';

const CardList = () => {
	const onclick = (e: MouseEvent<HTMLDivElement>) => {
		console.log(e);
	};

	return (
		<>
			<CardListWrap>
				<Card _onClick={onclick} />
				<Card _onClick={onclick} />
				<Card _onClick={onclick} />
				<Card _onClick={onclick} />
			</CardListWrap>
		</>
	);
};

export default CardList;

const CardListWrap = styled.div`
	width: 100%; //height값 유동적으로 받아오기
	padding: 0 16px;
	overflow-y: scroll;
	z-index: 999;
	border: 0.5px solid gray;
	background-color: gray;
`;
