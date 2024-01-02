import Image from 'next/image'
import Carousel from './ui/landing/Carousel'
import ScrollableBox from './ui/landing/ScrollableContentBox';

const imagePaths = [
  '/BlackClassics.JPG', // assuming you have an image at public/images/photo1.jpg
  '/BlackCrown.JPG', // and public/images/photo2.jpg
  '/SlideSide.jpg', // and public/images/photo3.jpg
];

const items = [
  { price: 100, rating: '⭐️⭐️⭐️⭐️⭐️', name: 'Classics', imageSrc: '/BlackClassics.JPG' },
  { price: 100, rating: '⭐️⭐️⭐️⭐️⭐️', name: 'Crown', imageSrc: '/BlackCrown.JPG' },
  { price: 100, rating: '⭐️⭐️⭐️⭐️⭐️', name: 'Blue Girl Slides', imageSrc: '/BlueGirlSlide.JPG' },
  { price: 100, rating: '⭐️⭐️⭐️⭐️⭐️', name: 'Green Girl Slides', imageSrc: '/GreenGirlSlide.JPG' },
  { price: 100, rating: '⭐️⭐️⭐️⭐️⭐️', name: 'Pink Girl Slides', imageSrc: '/PinkGirlSlide.JPG' },
];

export default function Home() {
  return (
    <main>
      <section className='flex flex-col text-center justify-center w-screen text-3xl sm:flex-row  sm:text-left first-letter:justify-between items-center'>
        <div className=''>
          <h1 className='text-3xl sm:text-5xl timeNewRoman leading-tight whitespace-nowrap'>AMIR BLAQ</h1>
          <h1 className='text-3xl sm:text-5xl timeNewRoman leading-tight'>FASHION GRANDEUR</h1>
          <h1 className='text-2xl sm:text-2xl'>Amir Blaq is a fashion product of creative conscious visions representing a new reign and luxury garments.</h1>
        </div>
        <Carousel images={imagePaths} />
      </section>
      <hr className="border-t-[0.5px] border-gray-600 my-4" />
      <section className='flex flex-col sm:flex-row justify-between items-center'>
        <div className='sm:p-20'>
          <h1 className='text-5xl my-3'>New Arrivals</h1>
        </div>
        <ScrollableBox items={items} />
      </section>
    </main>
  )
}
