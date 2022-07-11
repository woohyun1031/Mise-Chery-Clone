import { useState } from 'react';
import styled from 'styled-components';

type FloatButtonProps = {
	_onClick?(): any;
	_isOpen: boolean;
};

const FloatButton = (props: FloatButtonProps) => {
	return (
		<FloatButtonBox onClick={props._onClick}>
			{props._isOpen ? '전체 보이기' : '전체 가리기'}
		</FloatButtonBox>
	);
};

export default FloatButton;

const FloatButtonBox = styled.button`
	width: 128px;
	height: 45px;
	text-align: center;
	vertical-align: middle;
	border: none;
	border-radius: 10px;
	background-color: #6f87ff;
	color: #ffffff;
	box-sizing: border-box;
	font-size: 14px;
	position: fixed;
	bottom: 66px;
	right: 32px;
`;
