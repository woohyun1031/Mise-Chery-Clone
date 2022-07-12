import { MouseEvent, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { Grid, Text, Icon } from '../elements/index';
import { RootState } from '../store/configStore';
import { addComplte, addStudy, setList } from '../store/modules/list';
import { CardType } from './CardList';
import { useDrag } from 'react-use-gesture';

type CardProps = CardType & {
	isConvert: boolean;
};

const Card = (props: CardProps) => {
	const { word, trans, pos, x_count, o_count, isConvert } = props;
	const dispatch = useDispatch();
	const isList = useSelector((state: RootState) => state.list);

	const [isPosition, setIsPosition] = useState(0);
	const [isOpen, setIsOpen] = useState(false);

	const bindPosition = useDrag(
		({ down, movement }) => {
			if (down) {
				setIsPosition(movement[0]);
			} else {
				const isToggled = movement[0] > -261 / 2;
				setIsPosition(isToggled ? 0 : -261);
			}
		},
		{
			initial: () => [0, 0],
		}
	);

	const openClick = (e: MouseEvent<HTMLDivElement>) => {
		e.preventDefault();
		setIsOpen((prev) => !prev);
	};

	const addXCount = () => {
		const newList = isList.list.map((l: CardType) => {
			if (l.word == word) return { ...l, x_count: x_count + 1 };
			return l;
		});
		dispatch(setList(newList));
	};

	const addOCount = () => {
		const newList = isList.list.map((l: CardType) => {
			if (l.word == word) return { ...l, o_count: o_count + 1 };
			return l;
		});
		dispatch(setList(newList));
	};

	const addCompleteList = () => {
		let completeCard;
		const newList = isList.list.filter((l: CardType) => {
			if (l.word !== word) {
				return l;
			} else {
				completeCard = l;
				return;
			}
		});
		if (completeCard) dispatch(addComplte({ completeCard, newList }));
	};

	const returnStudyList = () => {
		let studyCard;
		const newList = isList.completeList.filter((l: CardType) => {
			if (l.word !== word) {
				return l;
			} else {
				studyCard = l;
				return;
			}
		});
		if (studyCard) dispatch(addStudy({ studyCard, newList }));
	};

	return (
		<>
			<CardWrap>
				<CardBox isPosition={isPosition} {...bindPosition()}>
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

					<SectionMain>
						<WordLeft isConvert>{isConvert ? trans : word}</WordLeft>
						{isOpen && <Line />}
						<WordRight className={WordRight} onClick={openClick}>
							{isOpen && (
								<TransSection isConvert>
									{isConvert ? word : trans}
								</TransSection>
							)}
						</WordRight>
					</SectionMain>
				</CardBox>

				<HideComponent>
					{isList.isStudy ? (
						<Grid is_flex>
							<Item bg={'#F47777'} onClick={addXCount}>
								X
							</Item>
							<Item bg={'#4694FF'} onClick={addOCount}>
								O
							</Item>
							<Item isBorder bg={'#22E073'} onClick={addCompleteList}>
								암기완료
							</Item>
						</Grid>
					) : (
						<Item isBorder bg={'#E6EBFF'}>
							<Text color='#5471FF' callback={returnStudyList}>
								재학습
							</Text>
						</Item>
					)}
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
`;

const CardBox = styled.div<{ isPosition: number }>`
	width: 100%;
	height: 100%;
	position: relative;
	z-index: 90;
	transition: 0.3s;
	right: ${({ isPosition }) => -isPosition}px;
	border-radius: 6px;
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

const SectionMain = styled.div`
	width: 100%;
	height: 100%;

	display: flex;
	align-items: center;
	justify-content: space-between;

	border-radius: 6px;
	border: 1px solid #e6ebff;

	background-color: #ffffff;
	box-sizing: border-box;
	overflow: hidden;
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
	border-radius: 6px;
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
	height: 100%;
	border-radius: 0 6px 6px 0;
	top: 0;
	right: 0;
	z-index: 89;
`;

const Item = styled.div<{ bg: string; isBorder?: boolean }>`
	display: flex;
	width: 87px;
	height: 100%;
	justify-content: center;
	align-items: center;
	color: #ffff;
	background-color: ${({ bg }) => bg};
	${({ isBorder }) => isBorder && 'border-radius: 0 6px 6px 0'};
`;
