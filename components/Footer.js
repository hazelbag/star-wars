import Link from "next/link";

let d = new Date();
let year = d.getFullYear();

const github = [
	{
		name: "Jacques Olivier",
		href: "https://github.com/hazelbag",
	},
];

const Footer = () => (
	<div className='footer bg-dark'>
		<footer id='sticky-footer' className='py-4 bg-greyish text-white-50'>
			<div className='container flex justify-center text-white font-cartoon'>
				<small>
					Copyright &copy;{" "}
					{github.map((item) => (
						<Link key={item.name} href={item.href}>
							{item.name}
						</Link>
					))}
					{" - "}
					{year}
				</small>
			</div>
			<style jsx>
				{`
					footer {
						position: fixed;
						bottom: 0;
						width: 100%;
					}
					div {
						text-align: center;
					}
				`}
			</style>
		</footer>
	</div>
);

export default Footer;
