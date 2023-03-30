import { Button, Card, Typography } from '@mui/material';
import { Container } from '@mui/system';

export default function WeAre() {
	return (
		<Container maxWidth>
			<Card variant="" className="py-12 lg:px-20">
				<Typography
					style={{
						fontFamily: 'Playfair Display',
					}}
					className="text-xl text-[#463366] uppercase"
				>
					Who we are
				</Typography>

				<Typography
					style={{
						fontFamily: 'Playfair Display',
					}}
					className="text-4xl sm:text-8xl my-3 leading-10 font-bold text-[#251939]"
				>
					We are Extensive.
				</Typography>

				<Typography className="mt-7 text-lg sm:text-xl  leading-snug text-[#494949]">
					Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation
					veniam consequat sunt nostrud amet.
				</Typography>

				<Button variant="contained" className="w-full max-w-xs mt-12 px-0.5 py-4 flex justify-center rounded-2xl bg-[#301E4E]">
					<Typography className="uppercase text-sm sm:text-base font-semibold text-center">Book A Free Marketing Audit</Typography>
				</Button>
			</Card>
		</Container>
	);
}
