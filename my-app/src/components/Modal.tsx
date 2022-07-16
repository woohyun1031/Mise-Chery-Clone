import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { RootState } from '../store/configStore';
import { closeModal } from '../store/modules/modal';
import SortModal from './SortModal';
import ConvertModal from './ConvertModal';

const Modal = () => {
	const dispatch = useDispatch();
	const isType = useSelector((state: RootState) => state.modal.type);
	const _isOpen = useSelector((state: RootState) => state.modal.isOpen);
	let title;
	let contents;
	switch (isType) {
		case 'convertModal':
			title = '더보기';
			contents = <ConvertModal />;
			break;
		case 'sortModal':
			title = '정렬';
			contents = <SortModal />;
			break;
		default:
			contents = null;
	}
	const Modalclose = () => {
		dispatch(closeModal());
	};

	if (!_isOpen) return <></>;
	return (
		<>
			<BackGround onClick={Modalclose} />
			<ModalBox>
				<ModalHeader>{title}</ModalHeader>
				{contents}
			</ModalBox>
		</>
	);
};

export default Modal;
const ModalBox = styled.div`
	position: fixed;
	width: 100%;
	bottom: 0px;
	background-color: #ffff;
	border-radius: 10px 10px 0 0;
	z-index: 101;
	transition: 0.3s;
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
