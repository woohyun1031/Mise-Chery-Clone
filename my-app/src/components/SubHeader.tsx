import styled from 'styled-components';
import Grid from '../elements/Grid';

const SubHeader = () => {
	return (
		<>
			<Grid width='100%' height='78px' padding='0 16px'>
				<Grid is_flex>
					<SectionLeft>
						<Text>0/70단어</Text>
						<Text>58%</Text>
					</SectionLeft>
					<SectionRight>큰 카드로 보기</SectionRight>
				</Grid>
			</Grid>
		</>
	);
};

export default SubHeader;

const SectionLeft = styled.div`
	width: 164px;
	height: 34px;

	background-color: #f5f5f5;
	border-radius: 6px;
`;
const SectionRight = styled.div`
	width: 164px;
	height: 34px;
	line-height: 34px;
	text-align: center;
	font-size: 12px;
	color: #5471ff;

	background-color: #f5f7ff;
	border: 0.5px solid #e6ebff;
	border-radius: 6px;
`;

const Text = styled.p`
	line-height: 34px;
	color: #5c5f66;
	font-size: 12px;
`;
