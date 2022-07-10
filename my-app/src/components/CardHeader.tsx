import styled from 'styled-components';
import { Grid, Text, Icon } from '../elements/index';

const CardHeader = () => {
	return (
		<>
			<Grid width='100%' height='57px' padding='0 16px' is_flex border>
				<SectionLeft>
					<Text size='14px' margin='0 13px 0 0'>
						학습중
					</Text>
					<Text size='14px'>암기완료</Text>
				</SectionLeft>
				<SectionRight>
					<Icon src='images/sort_icon.svg' />
					<Icon src='images/mix_icon.svg' margin='0 0 0 17px' />
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
