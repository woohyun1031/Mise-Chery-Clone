import styled from 'styled-components';

type TextProps = {
	color?: string;
	size?: string;
	margin?: string;
	iscursor?: boolean;
	children?: any;
	isBorder?: boolean;
	callback?(event?: any): any;
};

const Text = (props: TextProps) => {
	const { color, size, margin, iscursor, isBorder, callback, children } = props;

	const styles = {
		color,
		size,
		margin,
		iscursor,
		isBorder,
	};

	return (
		<>
			<Ptag {...styles} onClick={callback}>
				{children}
			</Ptag>
		</>
	);
};

export default Text;

const Ptag = styled.p<{
	color?: string;
	size?: string;
	margin?: string;
	iscursor?: boolean;
	isBorder?: boolean;
}>`
	color: ${({ color }) => (color ? color : '#fffff')};
	font-size: ${({ size }) => (size ? size : '14px')};
	margin: ${({ margin }) => (margin ? margin : '0px')};
	${({ iscursor }) => (iscursor ? 'cursor: pointer' : '')};
	${({ isBorder }) => (isBorder ? 'border-bottom: 1px solid black;' : '')};
`;
