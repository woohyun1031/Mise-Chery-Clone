import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { Grid } from '../../elements/index';
import { RootState } from '../../store/configStore';
import { setList } from '../../store/modules/list';
import { closeModal } from '../../store/modules/modal';
import { CardType } from '../CardList';

const SortModal = () => {
	const dispatch = useDispatch();
	const isList = useSelector((state: RootState) => state.list);
	const isNewList = isList.isStudy ? isList.list : isList.completeList;

	const selectSortMode = (isType: string) => {
		const arrayForSort = [...isNewList];
		let result;
		switch (isType) {
			case 'sortAlphabet':
				result = arrayForSort.sort((a: CardType, b: CardType) =>
					a.word < b.word ? -1 : a.word > b.word ? 1 : 0
				);
				break;
			case 'sortX':
				result = arrayForSort.sort(
					(a: CardType, b: CardType) => b.x_count - a.x_count
				);
				break;
			case 'sortO':
				result = arrayForSort.sort(
					(a: CardType, b: CardType) => b.o_count - a.o_count
				);
				break;
			case 'sortlessStudy':
				result = arrayForSort.sort(
					(a: CardType, b: CardType) =>
						a.o_count + a.x_count - (b.o_count + b.x_count)
				);
				break;
			default:
				break;
		}
		dispatch(setList(result));
		dispatch(closeModal());
	};

	return (
		<>
			<Grid>
				<Line />
				<SortItem onClick={() => selectSortMode('sortAlphabet')}>
					ABC순
				</SortItem>
				<SortItem onClick={() => selectSortMode('sortX')}>X 많은 순</SortItem>
				<SortItem onClick={() => selectSortMode('sortO')}>O 많은 순</SortItem>
				<SortItem onClick={() => selectSortMode('sortlessStudy')}>
					학습 횟수 적은 순
				</SortItem>
			</Grid>
		</>
	);
};

export default SortModal;

const SortItem = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 20px;
	font-weight: 400;
	border-bottom: 0.5px solid #dbdcdc;
	:hover {
		background-color: #f5f7ff;
	}
`;

const Line = styled.div`
	border-top: 0.5px solid #dbdcdc; ;
`;
