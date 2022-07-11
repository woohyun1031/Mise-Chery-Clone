import { MouseEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { Grid, Text, Icon } from '../elements/index';
import { RootState } from '../store/configStore';
import { addComplte, setList } from '../store/modules/list';
import { CardType } from './CardList';

type CardProps = CardType & {
	isConvert: boolean;
};

const Card = (props: CardProps) => {
	const { word, trans, pos, x_count, o_count, isOpen, isConvert } = props;

	const dispatch = useDispatch();
	const isList = useSelector((state: RootState) => state.list);
	const isNewList = isList.isStudy ? isList.list : isList.completeList;
	const openClick = () => {
		const newList = isNewList.map((l: CardType) => {
			if (l.word == word) return { ...l, isOpen: !isOpen };
			return l;
		});
		dispatch(setList(newList));
	};

	const addXCount = () => {
		const newList = isNewList.map((l: CardType) => {
			if (l.word == word) return { ...l, x_count: x_count + 1 };
			return l;
		});
		dispatch(setList(newList));
	};

	const addOCount = () => {
		const newList = isNewList.map((l: CardType) => {
			if (l.word == word) return { ...l, o_count: o_count + 1 };
			return l;
		});
		dispatch(setList(newList));
	};

	const addCompleteList = () => {
		let completeCard;
		const newList = isNewList.filter((l: CardType) => {
			if (l.word !== word) {
				return l;
			} else {
				completeCard = l;
				return;
			}
		});
		if (completeCard) dispatch(addComplte({ completeCard, newList }));
	};

	return (
		<>
			<CardWrap>
				<CardBox>
					<SectionTop>
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
					</SectionTop>
					<Grid is_flex zIndex=''>
						<WordLeft isConvert>{isConvert ? trans : word}</WordLeft>
						{isOpen && <Line />}
						<WordRight onClick={openClick}>
							{isOpen && (
								<TransSection isConvert>
									{isConvert ? word : trans}
								</TransSection>
							)}
						</WordRight>
					</Grid>
				</CardBox>
				<HideComponent>
					<Grid is_flex>
						<Item bg={'#F47777'} onClick={addXCount}>
							X
						</Item>
						<Item bg={'#4694FF'} onClick={addOCount}>
							O
						</Item>
						<Item bg={'#22E073'} onClick={addCompleteList}>
							암기완료
						</Item>
					</Grid>
				</HideComponent>
			</CardWrap>
		</>
	);
};

export default Card;

const CardWrap = styled.div`
	width: 100%;
	height: 80px;
	margin-bottom: 14px;
	position: relative;
	border: 1px solid #e6ebff;
	border-radius: 6px;
`;

const CardBox = styled.div`
	width: 100%;
	height: 100%;
	right: 261px;
	position: relative;
	z-index: 90;
`;

const SectionTop = styled.div`
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

const Line = styled.div`
	height: 80%;
	border: 1px solid #e6ebff;
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
	border-right: 6px solid #e6ebff;
	//border-left: 1px solid #e6ebff;
`;

const HideComponent = styled.div`
	position: absolute;
	width: 261px;
	height: 100%;
	border-radius: 0 6px 6px 0;
	top: 0;
	right: 0;
	z-index: 89;
`;

const Item = styled.div<{ bg: string }>`
	display: flex;
	width: 100%;
	height: 100%;
	justify-content: center;
	align-items: center;
	color: #ffff;
	background-color: ${({ bg }) => bg};
`;
