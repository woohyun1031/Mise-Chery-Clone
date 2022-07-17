import styled from 'styled-components';

type IconProps = {
	src: string;
	size?: string;
	color?: string;
	margin?: string;
	nocursor?: boolean;
	callback?(event?: any): any;
};

const Icon = (props: IconProps) => {
	const { size, color, src, margin, nocursor, callback } = props;

	const styles = {
		size,
		color,
		src,
		margin,
		nocursor,
	};

	return (
		<>
			<IconWrap {...styles} onClick={callback} />
		</>
	);
};

export default Icon;

const IconWrap = styled.div<{
	src: string;
	size?: string;
	color?: string;
	margin?: string;
	nocursor?: boolean;
}>`
	width: ${({ size }) => (size ? size : '20px')};
	height: ${({ size }) => (size ? size : '20px')};
	margin: ${({ margin }) => (margin ? margin : '0px')};
	color: ${({ color }) => (color ? color : 'black')};
	background-image: url(${({ src }) => (src ? src : 'none')});
	background-size: contain;
	background-position: center center;
	background-repeat: no-repeat;
	${({ nocursor }) => (!nocursor ? 'cursor: pointer' : '')};
`;
