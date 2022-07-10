import styled from 'styled-components';
import { Grid, Text, Icon } from '../elements/index';

const Header = () => {
	return (
		<>
			<Grid width='100%' height='46px' is_shadow border>
				<Grid is_flex bg='#ffff' padding='0 16px'>
					<Icon src='images/back_icon.svg' />
					<Text>기말고사 총 범위</Text>
					<Icon src='images/menu_icon.svg' />
				</Grid>
			</Grid>
		</>
	);
};

export default Header;
