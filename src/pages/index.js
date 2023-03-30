import Head from 'next/head';
import NavBar from '@/components/NavBar';
import WeAre from '@/components/WeAre';
import Banner from '@/components/Banner';
import Services from '@/components/Services';
import Work from '@/components/Work';
import Partners from '@/components/Partners';
import Testimonials from '@/components/Testimonial';
import LetsChat from '@/components/LetsChat';
import Footer from '@/components/Footer';

export default function Home() {
	return (
		<>
			<Head>
				<title>SaaSpect Assignment</title>
				<meta charSet="utf-8" />
				<meta name="title" content="SaaSpect Assignment" />
				<meta name="author" content="Prashant Amoli" />
				<meta name="keywords" content="SaaSpect Assignment, react, next, tailwind, tailwindcss, mui, materialui" />
				<meta name="description" content="SaaSpect Assignment by Prashant Amoli (prashantamoli.github.io)" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={''}>
				<NavBar />
				<Banner />
				<WeAre />
				<Services />
				<Work />
				<Partners />
				<Testimonials />
				<LetsChat />
				<Footer />
			</main>
		</>
	);
}
