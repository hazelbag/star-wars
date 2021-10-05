import Layout from "../components/MyLayout";
import fetch from "isomorphic-unfetch";
import Link from "next/link";

const InfoPage = ({ data }) => {
	return (
		<Layout className=''>
			<div className='flex justify-center text-center lg:h-screen sm:h-full bg-cover'>
				<div className='landingPG'>
					<h1 className='welcomeHeading text-4xl '>{data.title}</h1>
					<br />
					<ul className='moreInfo'>
						<li>Episode: {data.episode_id}</li>
						<li>Release Date: {data.release_date}</li>
						<li>Director: {data.director}</li>
						<li>Producer: {data.producer}</li>
					</ul>
					<br />
					<p className=' container movieDescription text-center'>
						{data.opening_crawl}
					</p>
					<div className='buttonImage flex justify-center pt-4'>
						<Link href='/'>
							<a className='backButton '>
								<img src='/death_star.png' alt='' />
							</a>
						</Link>
					</div>
				</div>
			</div>

			<style jsx>{`
				.welcomeHeading {
					font-weight: bolder;
					text-shadow: 6px 1px #fff;
				}
				.movieTitle {
					font-weight: 600;
					font-size: 30px;
				}
				.movieDescription {
					font-size: 27px;
				}
				ul {
					list-style-type: none;
					font-size: 28px;
				}
				.backButton img {
					height: 64px;
				}
				.buttonImage:hover {
					-webkit-transform: scaleX(-1);
					transform: scaleX(-1);
				}
			`}</style>
		</Layout>
	);
};

InfoPage.getInitialProps = async function (context) {
	const { id } = context.query;
	const newID = id.replace("http://", "");
	const res = await fetch(`${newID}`);
	const data = await res.json();
	return { data };
};

export default InfoPage;
