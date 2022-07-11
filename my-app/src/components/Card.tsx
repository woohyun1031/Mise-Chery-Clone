import { MouseEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { Grid, Text, Icon } from '../elements/index';
import { RootState } from '../store/configStore';
import { setList } from '../store/modules/list';
import { CardType } from './CardList';

type CardProps = CardType & {
	_onClick?(value: MouseEvent<HTMLDivElement>): any;
	isConvert: boolean;
};

const Card = (props: CardProps) => {
	const { word, trans, pos, x_count, o_count, isOpen, isConvert } = props;

	const dispatch = useDispatch();
	const isList = useSelector((state: RootState) => state.list.list);

	const openClick = () => {
		const newList = isList.map((l: CardType) => {
			if (l.word == word) return { ...l, isOpen: !isOpen };
			return l;
		});
		dispatch(setList(newList));
	};

	return (
		<>
			<CardBox>
				<SectionUpper>
					<SectionWrap>
						<Grid is_flex width='45px'>
							<Icon src='images/X_count_icon.svg' size='10px' />
							<Text size='10px' color='#F25555'>
								{x_count}
							</Text>
							<Icon src='images/O_count_icon.svg' size='11px' />
							<Text size='10px' color='#177AFF'>
								{o_count}
							</Text>
						</Grid>
					</SectionWrap>
				</SectionUpper>
				<Grid is_flex>
					<WordLeft isConvert>{isConvert ? trans : word}</WordLeft>
					<WordRight onClick={openClick}>
						{isOpen && (
							<TransSection isConvert>{isConvert ? word : trans}</TransSection>
						)}
					</WordRight>
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
	padding: 8px 0 0 8px;
	display: flex;
	justify-content: flex-start;
`;

const WordLeft = styled.div<{ isConvert: boolean }>`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	padding: 23px;
	padding-top: 40px;
	align-items: center;
	font-size: 13px;
`;

const WordRight = styled.div`
	width: 100%;
	height: 100%;
`;

const TransSection = styled.div<{ isConvert: boolean }>`
	width: 100%;
	height: 100%;
	padding: 0 10px;
	font-size: 8px;
	display: flex;
	justify-content: center;
	align-items: center;
	border-left: 1px solid #e6ebff;
`;
