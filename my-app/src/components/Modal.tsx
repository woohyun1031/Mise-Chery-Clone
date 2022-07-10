import { MouseEvent } from 'react';
import styled from 'styled-components';

type ModalProps = {
	_onClick(value: MouseEvent<HTMLDivElement>): any;
};

const Modal = (props: ModalProps) => {
	return (
		<>
			<CardBox onClick={props._onClick}>item</CardBox>
		</>
	);
};

export default Modal;

const CardBox = styled.div`
	width: 100%;
	height: 80px;

	margin-bottom: 12px;

	border: 0.5px solid #e6ebff;
	border-radius: 6px;
`;
