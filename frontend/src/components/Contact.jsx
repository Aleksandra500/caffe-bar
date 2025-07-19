import React from 'react';

const Contact = () => {
	return (
		<section
			id='contact'
			className='bg-[#4E342E] text-[#FFF8F0] px-6 py-24'>
			<div className='max-w-3xl mx-auto text-center'>
				<h2 className='text-4xl md:text-5xl font-arizonia mb-6'>
					Contact Us
				</h2>
				<p className='text-md md:text-lg mb-12'>
					Imate pitanja, sugestije ili želite da rezervišete mesto?
					<br />
					 Slobodno nas kontaktirajte – uvek nam je drago da čujemo od
					vas!
				</p>

				<div className='grid gap-8 text-left sm:grid-cols-2'>
					<div>
						<h4 className='text-lg font-semibold mb-2'>📍 Adresa</h4>
						<p>Ulica Cara Dusana 13, Trstenik, Srbija</p>
					</div>
					<div>
						<h4 className='text-lg font-semibold mb-2'>📞 Telefon</h4>
						<p>+381 64 123 4567</p>
					</div>
					<div>
						<h4 className='text-lg font-semibold mb-2'>✉️ Email</h4>
						<p>info@barfly.rs</p>
					</div>
					<div>
						<h4 className='text-lg font-semibold mb-2'>
							🕒 Radno vreme
						</h4>
						<p>
							Ponedeljak - Cetvrtak: 07:00 - 00:00
							<br /> Petak - Subota: 07:00 - 01:00 <br /> Nedelja:
							09:00 - 00:00
						</p>
					</div>
				</div>

				<div className='mt-12'>
					<a
						href='mailto:info@barfly.rs'
						className='inline-block bg-[#FFF8F0] text-[#4E342E] font-semibold px-6 py-3 rounded-full hover:bg-[#e9e0d3] transition'>
						Pošalji poruku
					</a>
				</div>
			</div>
		</section>
	);
};

export default Contact;
