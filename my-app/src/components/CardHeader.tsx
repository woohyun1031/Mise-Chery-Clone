import styled from 'styled-components';
import Grid from '../elements/Grid';

const CardHeader = () => {
	return (
		<>
			<Grid width='100%' height='57px' padding='0 16px' is_flex border>
				<Grid width='35%'>
					<Text>학습중</Text>
					<Text>암기완료</Text>
				</Grid>
				<Grid width='35%'>
					<Text>set Icon</Text>
					<Text>Ran Icon</Text>
				</Grid>
			</Grid>
		</>
	);
};

export default CardHeader;

const Text = styled.div`
	display: inline-block;
	font-size: 13px;
	margin: 0 5px;
	text-align: center;
`;
