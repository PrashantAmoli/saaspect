import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Button, Container } from '@mui/material';
import Nike from '../assets/nike.jpg';
import Starbucks from '../assets/starbucks.jpg';
import Image from 'next/image';

export default function Work() {
	return (
		<Container maxWidth className="flex flex-col items-start px-6 py-14 gap-10 relative bg-[#301E4E]">
			<Box sx={{ color: '#E2DAEB', padding: '10px' }}>
				<h1 className="relative flex font-semibold text-4xl mb-5" sx={{ fontFamily: 'Playfair Display' }}>
					OUR WORK
				</h1>
				<Button
					variant="contained"
					style={{ backgroundColor: '#FF6E6C' }}
					sx={{
						display: { lg: 'block', md: 'block', sm: 'block', xs: 'none' },
					}}
				>
					View All
				</Button>
			</Box>
			<Box sx={{ width: '100%', position: 'relative' }}>
				<Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
					<Grid item xs={12} sm={6} md={6}>
						<Image src={Starbucks} alt="" width={400} height={500} className="w-full object-cover " />
						<Box sx={{ color: '#fff' }}>
							<h6 style={{ color: '#FF6E6C', margin: '0' }}>Digital Marketing</h6>
							<h1
								style={{
									fontFamily: 'Playfair Display',
									fontStyle: 'normal',
									fontWeight: '300',
									fontSize: '40px',
								}}
							>
								Starbucks
							</h1>
							<h2
								style={{
									fontSize: '25px',
									fontFamily: 'Source Sans Pro',
									fontWeight: '200',
								}}
							>
								Our ad campaign brought 80% footfall to the company{' '}
							</h2>
						</Box>
					</Grid>
					<Grid item xs={12} sm={6} md={6}>
						<Image src={Nike} alt="" width={400} height={500} className="w-full  object-cover " />
						<Box sx={{ color: '#fff' }}>
							<h6 style={{ color: '#FF6E6C', margin: '0' }}>Digital Marketing</h6>
							<h1
								style={{
									fontFamily: 'Playfair Display',
									fontStyle: 'normal',
									fontWeight: '400',
									fontSize: '40px',
								}}
							>
								Nike
							</h1>
							<h2
								style={{
									fontSize: '20px',
									fontFamily: 'Source Sans Pro',
									fontWeight: '200',
								}}
							>
								Our ad campaign brought 80% footfall to the company{' '}
							</h2>
						</Box>
					</Grid>
					<Grid item xs={12} sm={6} md={6}>
						<Image src={Nike} alt="" width={400} height={500} className="w-full object-cover " />
						<Box sx={{ color: '#fff' }}>
							<h6 style={{ color: '#FF6E6C', margin: '0' }}>Digital Marketing</h6>
							<h1
								style={{
									fontFamily: 'Playfair Display',
									fontStyle: 'normal',
									fontWeight: '400',
									fontSize: '40px',
								}}
							>
								Nike
							</h1>
							<h2
								style={{
									fontSize: '20px',
									fontFamily: 'Source Sans Pro',
									fontWeight: '200',
								}}
							>
								Our ad campaign brought 80% footfall to the company{' '}
							</h2>
						</Box>
					</Grid>
					<Grid item xs={12} sm={6} md={6}>
						<Image src={Starbucks} alt="" width={400} height={500} className="w-full object-cover " />
						<Box sx={{ color: '#fff' }}>
							<h6 style={{ color: '#FF6E6C', margin: '0' }}>Digital Marketing</h6>
							<h1
								style={{
									fontFamily: 'Playfair Display',
									fontStyle: 'normal',
									fontWeight: '400',
									fontSize: '40px',
								}}
							>
								Starbucks
							</h1>
							<h2
								style={{
									fontSize: '20px',
									fontFamily: 'Source Sans Pro',
									fontWeight: '200',
								}}
							>
								Our ad campaign brought 80% footfall to the company{' '}
							</h2>
						</Box>
					</Grid>
				</Grid>
			</Box>
			<Button
				variant="contained"
				style={{
					backgroundColor: '#FF6E6C',
					width: '100%',
					marginTop: '10px',
					borderRadius: '7px',
				}}
				sx={{ display: { lg: 'none', md: 'none', sm: 'none', xs: 'block' } }}
			>
				View All
			</Button>
		</Container>
	);
}
