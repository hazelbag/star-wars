import Link from "next/link";
import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

const navigation = [{ name: "Home", href: "/", current: false }];

export default function Navbar() {
	return (
		<Disclosure as='nav' className='bg-greyish'>
			{({ open }) => (
				<>
					<div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'>
						<div className='relative flex items-center justify-between lg:h-16'>
							<div className='flex-1 flex items-center justify-center sm:items-stretch sm:justify-center'>
								<div className='hidden sm:block sm:ml-6'>
									<div className='flex space-x-4'>
										{navigation.map((item) => (
											<Link key={item.name} href={item.href}>
												<a className='text-white px-3 py-2 rounded-md font-cartoon text-lg'>
													{item.name}
												</a>
											</Link>
										))}
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className='sm:hidden sm:h-4'>
						<div className='px-2 pt-4 pb-3 space-y-1'>
							{navigation.map((item) => (
								<Link key={item.name} href={item.href}>
									<a className='text-white px-3 py-2 rounded-md font-cartoon text-lg'>
										{item.name}
									</a>
								</Link>
							))}
						</div>
					</div>
				</>
			)}
		</Disclosure>
	);
}
