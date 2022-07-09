import { MouseEvent } from 'react';
import styled from 'styled-components';
import Grid from '../elements/Grid';

type CardProps = {
	_onClick(value: MouseEvent<HTMLDivElement>): any;
};

const Card = (props: CardProps) => {
	return (
		<>
			<CardBox onClick={props._onClick}>item</CardBox>
		</>
	);
};

export default Card;

const CardBox = styled.div`
	width: 100%;
	height: 80px;

	margin-bottom: 12px;

	border: 0.5px solid #e6ebff;
	border-radius: 6px;
`;
