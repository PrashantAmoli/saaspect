import { Container, Box, Card, useTheme, useMediaQuery, CardMedia, Typography } from '@mui/material';
import profile from '../assets/profile.png';
import Image from 'next/image';

export default function Testimonials() {
	const theme = useTheme();
	const isMatch = useMediaQuery(theme.breakpoints.down('md'));
	return (
		<Container maxWidth className="my-20 flex flex-col items-start relative">
			<Container maxWidth>
				{isMatch ? (
					<>
						<Box maxWidth sx={{ marginBottom: '50px' }}>
							<h2 sx={{ fontFamily: 'Playfair Display' }} className="text-purple-950 font-bold text-5xl" style={{ padding: '0', margin: '0' }}>
								Testimonials
							</h2>
						</Box>

						<Container maxWidth>
							<Card>
								<Box
									sx={{
										display: 'flex',
										flexDirection: 'column',
										alignItems: 'flex-start',
										paddingTop: '30px',
									}}
								>
									<Image
										src={profile}
										alt=""
										style={{
											mixBlendMode: 'color-blend',
											width: '168px',
											height: '168px',
											top: '-10px',
											border: '1px solid grey',
											borderRadius: '100%',
										}}
										width={80}
										height={80}
										className="w-20 h-20 object-cover mx-auto"
									/>

									<p
										style={{
											fontFamily: 'Source Sans Pro',
											textAlign: 'center',
											margin: '10px auto',
										}}
									>
										“Working with Extensive is great”
									</p>
								</Box>
								<Box
									sx={{
										display: 'flex',
										flexDirection: 'column',
										alignItems: 'flex-end',
										padding: '0px 80px',
									}}
								>
									<Box
										sx={{
											display: 'flex',
											flexDirection: 'column',
											alignItems: 'center',
											color: '#301E4E',
											flex: 'none',
											fontWeight: '400',
											order: 1,
											alignSelf: 'stretch',
											flexGrow: '0',
											fontStyle: 'none',
										}}
									>
										<p className="p-0 m-0">-Hershel</p>
										<p className="text-red-500">Head of director GGPL PVT LTD.</p>
									</Box>
								</Box>

								<hr className="w-16 h-1.5 rounded-2xl bg-purple-950 mt-2" />
							</Card>
						</Container>
					</>
				) : (
					<>
						<Box maxWidth sx={{ marginBottom: '50px' }}>
							<h1
								style={{
									padding: '0',
									margin: '0',
									position: 'relative',
									color: '#301E4E',
									display: 'flex',
									fontFamily: 'Playfair Display',
									fontStyle: 'normal',
									fontWeight: '689',
									fontSize: '5vw',
									lineHeight: '80px',
									letterSpacing: '-0.015em',
									width: 'auto',
									marginBottom: '20px',
								}}
							>
								Testimonials
							</h1>
						</Box>
						<Container maxWidth>
							<Card className="{classes.card}">
								<Box
									sx={{
										display: 'flex',
										flexDirection: 'row',
										alignItems: 'flex-start',
										paddingTop: '30px',
										paddingLeft: '70px',
									}}
								>
									<Image
										src={profile}
										alt=""
										style={{
											mixBlendMode: 'color-blend',
											width: '168px',
											height: '168px',
											top: '-10px',
											border: '1px solid grey',
											borderRadius: '100%',
										}}
										width={80}
										height={80}
										className="w-20 h-20 object-cover"
									/>
									<Typography
										sx={{
											display: 'flex',
											position: 'relative',
											color: '#301E4E',
											fontFamily: 'Playfair Display',
											fontStyle: 'normal',
											fontWeight: '100',
											lineHeight: '80px',
											letterSpacing: '-0.015em',
											width: 'auto',
											margin: '0',
											alignItems: 'flex-end',
											flexDirection: 'row',
											marginLeft: { lg: '90px', md: '70px' },
											fontSize: { lg: '50px', md: '35px' },
										}}
									>
										“Working with Extensive is great”
									</Typography>
								</Box>

								<Box
									sx={{
										display: 'flex',
										flexDirection: 'column',
										alignItems: 'flex-end',
										padding: '0px 80px',
										fontFamily: 'Playfair Display',
										fontStyle: 'normal',
									}}
								>
									<Box
										sx={{
											display: 'flex',
											flexDirection: 'row',
											alignItems: 'flex-start',
											color: '#301E4E',
											justifyContent: 'center',
											fontSize: { lg: '49px', md: '30px' },
											textAlign: 'right',
										}}
									>
										<p className="text-right mx-auto p-2">Hershel</p>
									</Box>
									<Box sx={{ fontSize: { lg: '23px', md: '15px' }, color: '#FF6E6C' }}>
										<div>
											Head of director
											<br /> GGPL PVT LTD.
										</div>
									</Box>
								</Box>

								<hr className="w-40 h-2 rounded-2xl bg-[#301E4E] mt-2" />
							</Card>
						</Container>
					</>
				)}
			</Container>
		</Container>
	);
}
