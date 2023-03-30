import { Container, Typography } from '@mui/material';

export default function LetsChat() {
	return (
		<Container maxWidth className="flex bg-[#301E4E] items-start h-auto mb-5 p-5">
			<Typography
				variant="h2"
				sx={{
					color: '#A17FC9',
					fontFamily: 'Playfair Display',
					fontStyle: 'normal',
					fontWeight: '689',
					fontSize: { lg: '88px', md: '70px', sm: '60px', xs: '50px' },
					lineHeight: { lg: '132px', md: '100px', sm: '70px', xs: '50px' },
					position: 'relative',
					letterSpacing: '-0.015em',
				}}
			>
				Looking to drive
				<br />
				results?{' '}
				<span style={{ color: '#FF6E6C' }}>
					<u>Lets chat</u>
				</span>
			</Typography>
		</Container>
	);
}
