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
	const isList = useSelector((state: RootState) => state.list);
	const isNewList = isList.isStudy ? isList.list : isList.completeList;

	return (
		<>
			<CardListWrap>
				{isNewList &&
					isNewList.map((card: CardType) => {
						return (
							<Card key={card.word} {...card} isConvert={isList.isConvert} />
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
	z-index: 999;
	margin-top: 10px;
	overflow-y: hidden;
`;
