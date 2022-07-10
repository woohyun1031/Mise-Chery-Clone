import styled from 'styled-components';

type TextProps = {
	color?: string;
	size?: string;
	margin?: string;
	children?: any;
	callback?(event?: any): any;
};

const Text = (props: TextProps) => {
	const { color, size, margin, callback, children } = props;

	const styles = {
		color,
		size,
		margin,
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
}>`
	color: ${({ color }) => (color ? color : '#fffff')};
	font-size: ${({ size }) => (size ? size : '14px')};
	margin: ${({ margin }) => (margin ? margin : '0px')};
`;
