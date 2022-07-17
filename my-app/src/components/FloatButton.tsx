import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { RootState } from '../store/configStore';
import { isAllOpen, setList } from '../store/modules/list';
import { CardType } from './CardList';

const FloatButton = () => {
	const dispatch = useDispatch();
	const _isOpen = useSelector((state: RootState) => state.list.isOpen);
	const showAllCard = () => {
		dispatch(isAllOpen(!_isOpen));
	};

	return (
		<FloatButtonBox onClick={showAllCard}>
			{_isOpen ? '전체 가리기' : '전체 보이기'}
		</FloatButtonBox>
	);
};

export default FloatButton;

const FloatButtonBox = styled.button`
	width: 128px;
	height: 45px;

	text-align: center;
	vertical-align: middle;

	font-size: 14px;
	color: #ffffff;
	background-color: #6f87ff;

	border: none;
	border-radius: 10px;

	box-sizing: border-box;

	position: fixed;
	bottom: 66px;
	right: 32px;

	box-shadow: 0 1px 4px rgba(0, 0, 0, 0.25);

	z-index: 99;
`;
