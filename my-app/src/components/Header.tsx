import styled from 'styled-components';
import { Grid, Icon } from '../elements/index';

const Header = () => {
	return (
		<>
			<Grid width='100%' height='46px' is_shadow border>
				<Grid is_flex bg='#ffff' padding='0 16px'>
					<Icon src='images/back_icon.svg' />
					<div>기말고사 총 범위</div>
					<Icon src='images/menu_icon.svg' />
				</Grid>
			</Grid>
		</>
	);
};

export default Header;
