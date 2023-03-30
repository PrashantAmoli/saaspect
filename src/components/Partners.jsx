import F from '../assets/f.jpg';
import { Card, Container, Typography } from '@mui/material';
import pwa from '../assets/pwa.jpg';
import Paper from '@mui/material/Paper';
import Image from 'next/image';
import pinterest from '../assets/pinterest.jpg';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import sass from '../assets/saas.jpg';
import V from '../assets/v.jpg';

function PartnersRow() {
	return (
		<>
			<Grid item xs={2.4}>
				<Image height={200} width={200} alt="partners" src={pinterest} className="w-40 object-contain bg-transparent shadow-none bg-white" />
			</Grid>
			<Grid item xs={2.4}>
				<Image height={200} width={200} alt="partners" src={F} className="w-40 object-contain bg-transparent shadow-none bg-white" />
			</Grid>
			<Grid item xs={2.4}>
				<Image height={200} width={200} alt="partners" src={pwa} className="w-40 object-contain bg-transparent shadow-none bg-white" />
			</Grid>
			<Grid item xs={2.4}>
				<Image height={200} width={200} alt="partners" src={sass} className="w-40 object-contain bg-transparent shadow-none bg-white" />
			</Grid>
			<Grid item xs={2.4}>
				<Image height={200} width={200} alt="partners" src={V} className="w-40 object-contain bg-transparent shadow-none bg-white" />
			</Grid>
		</>
	);
}

export default function Partners() {
	return (
		<Container maxWidth className="py-20 md:pl-20">
			<Card variant="" style={{ borderRadius: '0px', marginBottom: '90px' }}>
				<Typography
					style={{
						fontFamily: 'Playfair Display',
					}}
					className="text-3xl sm:text-5xl md:text-7xl text-purple-950 font-bold"
				>
					Our <br /> Partners .
				</Typography>

				<Typography
					style={{
						fontFamily: 'Source Sans Pro',
					}}
					className="text-xl sm:text-2xl text-red-500"
				>
					Your success is our success.
				</Typography>
			</Card>

			<Box sx={{ flexGrow: 10, marginTop: { lg: '-50px', md: '-70px', sm: '-80px', xs: '-90px' } }}>
				<Grid container>
					<Grid container>
						<PartnersRow />
					</Grid>
					<Grid container>
						<PartnersRow />
					</Grid>
				</Grid>
			</Box>
		</Container>
	);
}
