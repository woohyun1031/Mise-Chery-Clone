import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { Grid, Text, Icon } from '../elements/index';
import { AppDispatch, RootState } from '../store/configStore';
import { changeStudy, getList, setList } from '../store/modules/list';
import { openModal } from '../store/modules/modal';

type CardHeaderProps = {
	isList: [];
};

const CardHeader = (props: CardHeaderProps) => {
	const dispatch = useDispatch<AppDispatch>();
	const _isStudy = useSelector((state: RootState) => state.list.isStudy);
	const modalOpen = () => {
		dispatch(openModal('sortModal'));
	};
	const shuffleList = () => {
		const newList = [...props.isList];
		const result = newList.sort(() => Math.random() - 0.5);
		dispatch(setList(result));
	};
	const changeStudyList = () => {
		dispatch(changeStudy());
	};

	return (
		<>
			<Grid width='100%' height='57px' padding='0 16px' is_flex border>
				<SectionLeft>
					<Text
						size='14px'
						callback={changeStudyList}
						color={_isStudy ? '#292C34' : '#DBDCDC'}
					>
						학습중
					</Text>
					<Text
						size='14px'
						margin='0 13px'
						callback={changeStudyList}
						color={_isStudy ? '#DBDCDC' : '#292C34'}
					>
						암기완료
					</Text>
				</SectionLeft>
				<SectionRight>
					<Icon src='images/sort_icon.svg' callback={modalOpen} />
					<Icon
						src='images/mix_icon.svg'
						margin='0 0 0 17px'
						callback={shuffleList}
					/>
				</SectionRight>
			</Grid>
		</>
	);
};

export default CardHeader;

const SectionLeft = styled.div`
	width: 120px;
	height: 26px;

	line-height: 26px;

	display: flex;
	justify-content: flex-start;
`;

const SectionRight = styled.div`
	width: 70px;
	height: 26px;
	display: flex;
	justify-content: flex-end;
`;
