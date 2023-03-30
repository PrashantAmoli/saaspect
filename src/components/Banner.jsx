import React from 'react';
import { Card, Typography } from '@mui/material';
import banner from '@/assets/banner.png';
import Image from 'next/image';

export default function Banner() {
	return (
		<Card variant="outlined" className="border-none mt-16 relative bg-transparent h-[66vh] sm:min-h-screen flex items-center">
			<div className="bg-white/50 w-full mt-12 sm:mt-32 sm:w-3/4 md:w-1/2 min-h-[16vh] sm:h-[60vh] my-auto overflow-hidden flex flex-col sm:gap-5  justify-center p-0.5 sm:p-5">
				<Typography
					style={{
						fontFamily: 'Playfair Display',
					}}
					className="text-4xl sm:text-8xl text-[#301E4E] font-bold tracking-tight text-center sm:text-left"
				>
					We are <br className="hidden sm:block" />
					<span
						style={{
							color: '#B7364A',
						}}
						className="text-[#B7364A] "
					>
						Extensive.
					</span>
				</Typography>

				<Typography
					style={{
						fontFamily: 'Playfair Display',
					}}
					className="text-xl text-center sm:text-left sm:text-4xl text-[#301E4E]"
				>
					Helping you stand out in a crowded market
				</Typography>
			</div>

			<Image
				src={banner}
				alt="Picture of the author"
				width={1000}
				height={600}
				className="w-full h-full  object-cover bg-center absolute inset-x-0 top-0 -z-10 pb-10"
			/>
		</Card>
	);
}
