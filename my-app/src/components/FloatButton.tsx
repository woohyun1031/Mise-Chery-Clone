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
`;
