import styled from 'styled-components';
import Grid from '../elements/Grid';

const CardHeader = () => {
	return (
		<>
			<HeaderWrap>
				<Grid is_flex>
					<Grid width='25%' is_flex>
						<div>학습중</div>
						<div>암기완료</div>
					</Grid>
					<Grid width='25%' is_flex>
						<div>settingIcon</div>
						<div>RandomIcon</div>
					</Grid>
				</Grid>
			</HeaderWrap>
		</>
	);
};

export default CardHeader;

const HeaderWrap = styled.div`
	width: 100%;
	height: 57px;
`;
