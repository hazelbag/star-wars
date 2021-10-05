import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = (props) => (
	<div className='w-full bg-main-cover bg-no-repeat bg-cover '>
		<Head>
			<title>Star Wars</title>

			<link
				rel='stylesheet'
				href='https://bootswatch.com/4/sketchy/bootstrap.min.css'
			/>
			<link
				rel='stylesheet'
				href='https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css'
			/>
			<link
				rel='stylesheet'
				href='https://use.fontawesome.com/releases/v5.8.2/css/all.css'
				integrity='sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay'
				crossOrigin='anonymous'
			/>
		</Head>
		<Navbar />
		{/*<div className='mainDiv '>*/}
		{/*<div className='w-full h-screen  bg-main-cover bg-contain bg-center'>*/}
		<div>
			<div className='displayItems'>{props.children}</div>
		</div>

		<Footer />

		<style jsx>
			{`
				.displayItems {
					padding-top: 4rem;
					text-align: center;
					font-family: "Neucha", -apple-system, system-ui, BlinkMacSystemFont,
						"Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
				}
				.mainDiv {
					background: url("background.png") no-repeat center center fixed;
					-webkit-background-size: cover;
					-moz-background-size: cover;
					-o-background-size: cover;
					background-size: cover;
					background-repeat: no-repeat;
					background-position: center;

					height: auto;
				}
			`}
		</style>
	</div>
);

export default Layout;
