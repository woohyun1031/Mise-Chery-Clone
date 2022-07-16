import { useDispatch } from 'react-redux';
import { Text, Icon } from '../elements/index';
import { openModal } from '../store/modules/modal';
import styled from 'styled-components';

const Header = () => {
	const dispatch = useDispatch();

	const modalOpen = () => {
		dispatch(openModal('convertModal'));
	};
	return (
		<HeaderWrap>
			<Icon src='images/back_icon.svg' />
			<Text>기말고사 총 범위</Text>
			<Icon src='images/menu_icon.svg' callback={modalOpen} />
		</HeaderWrap>
	);
};

export default Header;

const HeaderWrap = styled.div`
	width: 100%;
	height: 46px;
	box-sizing: border-box;
	padding: 0 16px;
	background-color: #ffffff;
	display: flex;
	align-items: center;
	justify-content: space-between;
	box-shadow: 0 2px 5px rgba(57, 63, 72, 0.3);
	z-index: 10;
	margin-bottom: 6px;
`;
