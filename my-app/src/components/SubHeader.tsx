import styled from 'styled-components';
import { Grid, Text } from '../elements/index';

const SubHeader = () => {
	return (
		<>
			<Grid width='100%' height='78px' padding='0 16px'>
				<Grid is_flex>
					<SectionLeft>
						<Text color='#5c5f66' size='12px'>
							0/70단어
						</Text>
						<Text color='#B5B7BA' size='12px'>
							58%
						</Text>
					</SectionLeft>
					<SectionRight>
						<Text color='#5471ff' size='12px'>
							큰 카드로 보기
						</Text>
					</SectionRight>
				</Grid>
			</Grid>
		</>
	);
};

export default SubHeader;

const SectionLeft = styled.div`
	width: 164px;
	height: 34px;

	line-height: 34px;

	padding: 0 16px;

	display: flex;
	justify-content: space-between;

	background-color: #f5f5f5;
	border-radius: 6px;
`;
const SectionRight = styled.div`
	width: 164px;
	height: 34px;

	line-height: 34px;
	text-align: center;

	background-color: #f5f7ff;
	border: 0.5px solid #e6ebff;
	border-radius: 6px;
`;
