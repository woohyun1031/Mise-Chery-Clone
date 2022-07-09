import styled from 'styled-components';
import Grid from '../elements/Grid';
import CardHeader from './CardHeader';
import CardList from './CardList';

const Main = () => {
	return (
		<>
			<MainBox>
				<CardHeader />
			</MainBox>
		</>
	);
};

export default Main;

const MainBox = styled.div`
	width: 100%;
	box-sizing: border-box;
`;
