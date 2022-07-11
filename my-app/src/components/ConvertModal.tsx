import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { Grid, Text, Toggle } from '../elements/index';
import { RootState } from '../store/configStore';
import { convertWord } from '../store/modules/list';

const ConvertModal = () => {
	const dispatch = useDispatch();
	const isConvert = useSelector((state: RootState) => state.list.isConvert);

	const convertClick = () => {
		dispatch(convertWord());
	};

	return (
		<>
			<Grid is_flex padding='20px'>
				<SectionLeft>
					<Text>표기 전환</Text>
				</SectionLeft>
				<SectionRight>
					<Grid is_flex>
						<Text size='12px' color={!isConvert ? '#6f87ff' : '#B5B7BA'}>
							영단어
						</Text>
						<Toggle Convert={isConvert} _onClick={convertClick} />
						<Text size='12px' color={isConvert ? '#6f87ff' : '#B5B7BA'}>
							뜻
						</Text>
					</Grid>
				</SectionRight>
			</Grid>
		</>
	);
};

export default ConvertModal;

const SectionLeft = styled.div`
	display: flex;
	justify-content: flex-start;
`;

const SectionRight = styled.div`
	width: 100px;
	display: flex;
	justify-content: flex-end;
`;
