import styled from 'styled-components';
import Grid from '../elements/Grid';

const SubHeader = () => {
	return (
		<>
			<Grid width='100%' height='78px' padding='0 16px'>
				<Grid is_flex>
					<Icon>backIcon</Icon>
					<Icon>점점점</Icon>
				</Grid>
			</Grid>
		</>
	);
};

export default SubHeader;

const Icon = styled.div``;
