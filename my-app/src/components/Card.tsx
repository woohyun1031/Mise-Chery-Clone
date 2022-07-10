import { MouseEvent } from 'react';
import styled from 'styled-components';
import { Grid, Text, Icon } from '../elements/index';

type CardProps = {
	_onClick(value: MouseEvent<HTMLDivElement>): any;
};

const Card = (props: CardProps) => {
	return (
		<>
			<CardBox>
				<SectionUpper>
					<SectionWrap>
						<Grid is_flex width='45px'>
							<Icon src='images/X_count_icon.svg' size='10px' />
							<Text size='10px' color='#F25555'>
								1
							</Text>
							<Icon src='images/O_count_icon.svg' size='11px' />
							<Text size='10px' color='#177AFF'>
								7
							</Text>
						</Grid>
					</SectionWrap>
				</SectionUpper>
				<Grid padding='12px' is_flex>
					<WordLeft>좌측그리드</WordLeft>
					<WordRight onClick={props._onClick}>우측그리드</WordRight>
				</Grid>
			</CardBox>
		</>
	);
};

export default Card;

const CardBox = styled.div`
	width: 100%;
	height: 80px;
	position: relative;
	margin-bottom: 12px;

	border: 0.5px solid #e6ebff;
	border-radius: 6px;
`;

const SectionUpper = styled.div`
	position: absolute;
	top: 0;
	left: 0;
`;

const SectionWrap = styled.div`
	padding: 12px 0 0 12px;
	display: flex;
	justify-content: flex-start;
`;

const WordLeft = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	//text-align: center;
`;

const WordRight = styled.div`
	width: 100%;
	height: 100%;
	//text-align: center;
	display: flex;
	justify-content: center;
	align-items: center;
	border-left: 1px solid #e6ebff;
`;
