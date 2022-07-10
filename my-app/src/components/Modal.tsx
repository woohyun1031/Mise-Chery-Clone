import { useState } from 'react';
import styled from 'styled-components';
import { Grid } from '../elements/index';

const Modal = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<BackGround />
			<ModalBox>
				<ModalHeader>정렬</ModalHeader>
			</ModalBox>
		</>
	);
};

export default Modal;
const ModalBox = styled.div`
	position: fixed;
	width: 100%;
	bottom: 0;
	background-color: #ffff;
	border-radius: 10px 10px 0 0;
	z-index: 101;
`;
const ModalHeader = styled.div`
	width: 100%;
	height: 56px;
	padding: 20px;
	text-align: center;
`;

const BackGround = styled.div`
	position: fixed;
	left: 0;
	right: 0;
	bottom: 0;
	top: 0;
	background-color: rgba(0, 0, 0, 0.1);
	backdrop-filter: blur(2px);
	z-index: 100;
`;
