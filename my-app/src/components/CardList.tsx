import styled from 'styled-components';
import Card from './Card';

const CardList = () => {
	return (
		<>
			<CardListWrap>
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
			</CardListWrap>
		</>
	);
};

export default CardList;

const CardListWrap = styled.div`
	width: 100%;
	overflow-y: scroll;
	z-index: 999;
`;
