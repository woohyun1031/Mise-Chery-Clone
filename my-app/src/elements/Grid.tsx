import styled from 'styled-components';

type GridProps = {
	width?: string;
	height?: string;
	padding?: string;
	margin?: string;
	bg?: string;
	is_flex?: boolean;
	is_position?: string;
	children?: any;
	zIndex?: string;
	border?: boolean;
};

const Grid = (props: GridProps) => {
	const {
		is_flex,
		width,
		height,
		padding,
		margin,
		bg,
		zIndex,
		border,
		children,
	} = props;
	const styles = {
		is_flex,
		width,
		height,
		padding,
		margin,
		zIndex,
		border,
		bg,
	};

	return <GridBox {...styles}>{children}</GridBox>;
};

export default Grid;

const GridBox = styled.div<{
	is_flex?: boolean;
	is_shadow?: boolean;
	width?: string;
	height?: string;
	padding?: string;
	margin?: string;
	zIndex?: string;
	border?: boolean;
	bg?: string;
}>`
	width: ${({ width }) => (width ? width : '100%')};
	height: ${({ height }) => (height ? height : '100%')};

	padding: ${({ padding }) => (padding ? padding : '0px')};
	margin: ${({ margin }) => (margin ? margin : '0px')};

	background-color: ${({ bg }) => (bg ? bg : '#FFFFFF')};
	box-sizing: border-box;
	overflow: hidden;

	display: ${({ is_flex }) => (is_flex ? 'flex' : 'block')};
	${({ is_flex }) => (is_flex ? 'align-items: center' : '')};
	${({ is_flex }) => (is_flex ? 'justify-content: space-between' : '')};

	${({ border }) => (border ? 'border: 0.1px solid gray' : '')};
	${({ zIndex }) => (zIndex ? `z-index:${zIndex}` : '')};
`;
