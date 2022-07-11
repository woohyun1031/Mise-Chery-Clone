import { type } from '@testing-library/user-event/dist/type';
import { MouseEvent } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { RootState } from '../store/configStore';
import Card from './Card';

export type CardType = {
	word: string;
	trans: string;
	pos: string;
	x_count: number;
	o_count: number;
	isOpen: boolean;
};

const CardList = () => {
	const isList = useSelector((state: RootState) => state.list.list);
	const _isConvert = useSelector((state: RootState) => state.list.isConvert);
	const onclick = (e: MouseEvent<HTMLDivElement>) => {
		console.log(e.target);
	};

	return (
		<>
			<CardListWrap>
				{isList &&
					isList.map((card: CardType) => {
						return (
							<Card
								key={card.word}
								{...card}
								_onClick={onclick}
								isConvert={_isConvert}
							/>
						);
					})}
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
`;
