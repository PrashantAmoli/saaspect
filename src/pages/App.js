import { makeStyles } from '@mui/styles';
import Container from '@mui/material/Container';
import NavigationBar from '@/components/NavBar';
import Banner from '@/components/Banner';
import Weare from '@/components/WeAre';
import Whatwedo from '@/components/Services';
import Ourwork from '@/components/Work';
import Ourpartners from '@/components/Partners';
import Testimonial from '@/components/Testimonial';
import Letschat from '@/components/LetsChat';
import Footer from '@/components/Footer';

const useStyles = makeStyles(() => ({
	main: {
		// backgroundColor: "red",
	},
}));

function App() {
	const classes = useStyles();
	return (
		<Container maxWidth="xl" className={classes.main}>
			<NavigationBar />
			<Banner />
			<Weare />
			<Whatwedo />
			<Ourwork />
			<Ourpartners />
			<Testimonial />
			<Letschat />
			<Footer />
		</Container>
	);
}

export default App;
