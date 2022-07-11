import styled from 'styled-components';

type ToggleProps = {
	Convert: boolean;
	_onClick?(): any;
};

const Toggle = (props: ToggleProps) => {
	return (
		<>
			<ToggleBtn onClick={props._onClick} toggle={props.Convert}>
				<Circle toggle={props.Convert} />
			</ToggleBtn>
		</>
	);
};

export default Toggle;

const ToggleBtn = styled.button<{ toggle: boolean }>`
	width: 38px;
	height: 21px;
	border-radius: 14px;
	border: none;
	cursor: pointer;
	background-color: #6f87ff;
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	transition: 0.5s;
`;
const Circle = styled.div<{ toggle: boolean }>`
	background-color: white;
	width: 17px;
	height: 17px;
	border-radius: 17px;
	position: absolute;
	left: 5%;
	transition: all 0.5s ease-in-out;
	${({ toggle }) =>
		toggle && ` transform: translate(17px, 0); transition: 0.5s;`}
`;
