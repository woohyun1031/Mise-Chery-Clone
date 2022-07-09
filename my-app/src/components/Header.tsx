import styled from 'styled-components';
import Grid from '../elements/Grid';

const Header = () => {
	return (
		<>
			<HeaderBox>
				<Grid width='100%' height='46px'>
					<Grid is_flex bg='gray' padding='0 16px'>
						<Icon>backIcon</Icon>
						<div>기말고사 총 범위</div>
						<Icon>점점점</Icon>
					</Grid>
				</Grid>
			</HeaderBox>
		</>
	);
};

export default Header;

const HeaderBox = styled.header``;

const Icon = styled.div``;
