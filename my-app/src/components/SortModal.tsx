import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { Grid } from '../elements/index';

const SortModal = () => {
	const dispatch = useDispatch();

	return (
		<>
			<Grid>
				<Line />
				<SortItem>ABC순</SortItem>
				<SortItem>X 많은 순</SortItem>
				<SortItem>O 많은 순</SortItem>
				<SortItem>학습 횟수 적은 순</SortItem>
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
`;

const Line = styled.div`
	border-top: 0.5px solid #dbdcdc; ;
`;
