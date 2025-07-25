import React from 'react';

const About = () => {
	return (
		<section
			id='about'
			className='bg-[#1C1B18] text-[#EADBC8] py-24 px-6 font-serif'>
			{/* Gornji deo: slika levo, tekst desno */}
			<div className='grid md:grid-cols-2 gap-14 items-center max-w-6xl mx-auto mb-4'>
				{/* Slika levo */}
				<img
					src='/sankceo.png'
					alt='Enterijer'
					className='rounded-xl shadow-lg w-full h-[420px] object-cover'
				/>

				{/* Tekst desno */}
				<div className='flex flex-col gap-6'>
					<h2 className='text-5xl md:text-6xl font-arizonia text-[#D7B47C]'>
						About BarFly
					</h2>
					<p className='text-lg leading-relaxed text-[#EADBC8]'>
						BarFly is more than a café — it's a space where aromas
						meet stories. Every detail, from our espresso to our
						atmosphere, is made to offer comfort, connection, and a
						splash of elegance.
					</p>

					{/* Navigate blok */}
					<div className='bg-[#2A2723] p-5 rounded-xl shadow-md border border-[#3E3B37]'>
						<p className='text-xl font-semibold mb-1 text-[#D7B47C]'>
							Navigate to BarFly
						</p>
						<a
							href='https://maps.google.com'
							target='_blank'
							rel='noopener noreferrer'
							className='flex items-center gap-2 text-[#EADBC8] hover:text-[#D7B47C] transition'>
							Check location <span className='text-2xl'>↗</span>
						</a>
					</div>
				</div>
			</div>

			{/* Donji deo: veća slika levo, 2 spojene desno */}
			<div className='w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6'>
				{/* Leva veća slika */}

				<div>
					<img
						src='/logoColor.png'
						alt='BarFly Logo'
						className='w-full h-[380px]  object-cover rounded-full'
					/>
				</div>

				{/* Desne dve slike */}
				<div className='flex flex-col gap-6'>
					<img
						src='/sankceo.png'
						alt='Enterijer 1'
						className='w-full h-[180px] object-cover rounded-xl'
					/>
					<img
						src='/basta.png'
						alt='Enterijer 2'
						className='w-full h-[180px] object-cover rounded-xl'
					/>
				</div>
			</div>
			<div className='text-center mt-10'>
				<a
					href='/gallery'
					className='inline-block bg-[#D7B47C] text-[#1C1B18] px-6 py-3 rounded-full font-semibold hover:bg-[#EADBC8] transition'>
					View More Moments →
				</a>
			</div>
		</section>
	);
};

export default About;
