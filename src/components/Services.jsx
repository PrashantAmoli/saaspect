import { Box, Button, CardMedia, Container, Grid, ListItem, Typography } from '@mui/material';
import ellipse from '../assets/ellipse.jpg';
import Image from 'next/image';

export default function Services() {
	return (
		<Box maxWidth className="py-12">
			<Box maxWidth>
				<Box>
					<Grid container spacing={2} style={{ display: 'flex' }} className="flex flex-col sm:flex-row">
						<Grid item xs={12} md={6}>
							<Box className="flex overflow-hidden">
								<Image
									src={ellipse}
									alt="ellipse"
									width={1000}
									height={1000}
									className="relative sm:right-12 -z-10 scale-x-150 sm:scale-x-100 w- sm:w-5/6 h-48 object-cover sm:object-contain sm:h-auto"
								/>

								<Typography
									sx={{
										fontFamily: 'Playfair Display',
									}}
									className="absolute p-3 sm:py-10 sm:left-10 text-4xl sm:text-7xl font-bold text-purple-950"
								>
									WHAT <br /> WE DO.
									<Typography
										sx={{
											fontFamily: 'Source Sans Pro',
										}}
										className="text-xl sm:text-3xl mt-2"
									>
										We do lots of stuffs, basically <br />
										adding value to your product.
									</Typography>
								</Typography>
							</Box>
						</Grid>

						<Grid item xs={12} sm={6}>
							<Box className="flex flex-col items-start sm:pl-16 gap-5">
								<list>
									<ListItem className="sm:p-4">
										<Typography
											sx={{
												color: '#301E4E',
												fontSize: '54px',
												fontFamily: 'Playfair Display',
												fontWeight: '400',
												fontStyle: 'normal',
												letterSpacing: '-0.005em',
												lineHeight: '83px',
											}}
											className="text-3xl sm:text-4xl lg:text-5xl"
										>
											Digital Marketing
										</Typography>
									</ListItem>

									<ListItem className="p-4">
										<Typography
											sx={{
												color: '#301E4E',
												fontSize: '54px',
												fontFamily: 'Playfair Display',
												fontWeight: '400',
												fontStyle: 'normal',
												letterSpacing: '-0.005em',
												lineHeight: '83px',
											}}
											className="text-3xl sm:text-4xl lg:text-5xl"
										>
											Digital Marketing
										</Typography>
									</ListItem>

									<ListItem className="p-4">
										<Typography
											sx={{
												color: '#301E4E',
												fontSize: '54px',
												fontFamily: 'Playfair Display',
												fontWeight: '400',
												fontStyle: 'normal',
												letterSpacing: '-0.005em',
												lineHeight: '83px',
											}}
											className="text-3xl sm:text-4xl lg:text-5xl"
										>
											Digital Marketing
										</Typography>
									</ListItem>

									<ListItem className="p-4">
										<Typography
											sx={{
												color: '#301E4E',
												fontSize: '54px',
												fontFamily: 'Playfair Display',
												fontWeight: '400',
												fontStyle: 'normal',
												letterSpacing: '-0.005em',
												lineHeight: '83px',
											}}
											className="text-3xl sm:text-4xl lg:text-5xl"
										>
											Digital Marketing
										</Typography>
									</ListItem>
								</list>

								<Button
									variant="contained"
									sx={{
										fontFamily: 'Source Sans Pro',
									}}
									className="bg-purple-950 rounded-lg font-semibold uppercase px-8 py-3 relative left-4 text-lg"
								>
									View All
								</Button>
							</Box>
						</Grid>
					</Grid>
				</Box>
			</Box>
		</Box>
	);
}
