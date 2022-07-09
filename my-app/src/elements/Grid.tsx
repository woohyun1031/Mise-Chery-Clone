import styled from 'styled-components';

type GridProps = {
	is_flex?: boolean;
	width?: string;
	height?: string;
	padding?: string;
	margin?: string;
	bg?: string;
	children?: any;
};

const Grid = (props: GridProps) => {
	const { is_flex, width, height, padding, margin, bg, children } = props;
	const styles = {
		is_flex,
		width,
		height,
		padding,
		margin,
		bg,
	};

	return <GridBox {...styles}>{children}</GridBox>;
};

export default Grid;

const GridBox = styled.div<{
	is_flex?: boolean;
	width?: string;
	height?: string;
	padding?: string;
	margin?: string;
	bg?: string;
}>`
	width: ${({ width }) => (width ? width : '100%')};
	height: ${({ height }) => (height ? height : '100%')};

	padding: ${({ padding }) => (padding ? padding : '0px')};
	margin: ${({ margin }) => (margin ? margin : '0px')};

	display: ${({ is_flex }) => (is_flex ? 'flex' : 'block')};
	${({ is_flex }) => (is_flex ? 'align-items: center' : '')};
	${({ is_flex }) => (is_flex ? 'justify-content: space-between' : '')};

	background-color: ${({ bg }) => (bg ? bg : '#FFFFFF')};
	box-sizing: border-box;
	overflow: hidden;
`;
