import styled from 'styled-components';

type IconProps = {
	src: string;
	color?: string;
	callback?(event?: any): any;
};

const Icon = (props: IconProps) => {
	const { color, src, callback } = props;

	const styles = {
		color,
		src,
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
	color?: string;
}>`
	width: 20px;
	height: 16px;
	color: ${({ color }) => (color ? color : 'black')};
	background-image: url(${({ src }) => (src ? src : 'none')});
	background-size: contain;
	background-position: center center;
	background-repeat: no-repeat;
`;
