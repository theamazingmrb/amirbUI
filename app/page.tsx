import Carousel from './ui/landing/Carousel'
import ScrollableBox from './ui/landing/ScrollableContentBox';
const imagePaths = [
  '/BlackClassics.JPG',
  '/BlackCrown.JPG',
  '/SlideSide.jpg',
];

export default function Home() {
  return (
    <main className='flex flex-col justify-center items-center'>
      <section className='w-2/3 flex flex-col text-center justify-center text-3xl sm:flex-row  sm:text-left first-letter:justify-between items-center'>
        <div className="flex-col">
          <div className='my-8 mt-10'>
            <h1 className='text-3xl sm:text-5xl timeNewRoman leading-tight whitespace-nowrap'>AMIR BLAQ</h1>
            {/* <h1 className='text-3xl sm:text-5xl timeNewRoman leading-tight'>FASHION GRANDEUR</h1> */}
          </div>
          <h1 className='text-2xl sm:text-2xl'>Amir Blaq is a fashion product of creative conscious visions representing a new reign and luxury garments.</h1>
        </div>
        <Carousel images={imagePaths} />
      </section>
      <hr className="border-t-[0.5px] relative border-gray-600 my-4" />
      <section className='w-2/3 flex flex-col sm:flex-row justify-between items-center'>
        <div className='p-20 sm:p-0 sm:mr-8'>
          <h1 className='text-5xl my-10'>New Arrivals</h1>
        </div>
        <ScrollableBox />
      </section>
    </main>
  )
}
