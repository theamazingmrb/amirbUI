import Carousel from './ui/landing/Carousel'
import ScrollableBox from './ui/landing/ScrollableContentBox';

const imagePaths = [
  '/BlackClassics.JPG',
  '/BlackCrown.JPG',
  '/BlueGirlSlide.JPG',
  '/BlueGirlSlideAlt.JPG',
];

export default function Home() {
  return (
    <main className='flex flex-col justify-center items-center max-w-screen-2xl mx-auto px-4 md:px-8'>
      {/* Hero Section with Brand Intro and Carousel */}
      <section className='w-full flex flex-col gap-8 md:gap-12 py-8 md:py-12'>
        <div className="text-center max-w-3xl mx-auto">
          <h1 className='text-4xl sm:text-6xl font-serif tracking-wider uppercase mb-4 md:mb-6'>AMIR BLAQ</h1>
          <p className='text-lg sm:text-xl text-white leading-relaxed'>
            A fashion product of creative conscious visions representing a new reign and luxury garments.
          </p>
        </div>
        
        <div className="w-full max-w-5xl mx-auto">
          <Carousel 
            images={imagePaths} 
            interval={6000}
            showControls={true}
            showIndicators={true}
          />
        </div>
      </section>
      
      <hr className="border-t border-gray-700 w-full max-w-5xl my-8 md:my-12" />
      
      {/* New Arrivals Section */}
      <section className='w-full max-w-5xl mx-auto py-8'>
        <div className='flex flex-col md:flex-row justify-between items-center gap-6 md:gap-10'>
          <div className='md:w-1/4'>
            <h2 className='text-3xl md:text-4xl font-serif tracking-wide mb-4'>New Arrivals</h2>
            <p className='text-gray-300 hidden md:block'>Discover our latest collection of premium fashion items.</p>
          </div>
          
          <div className='w-full md:w-3/4'>
            <ScrollableBox />
          </div>
        </div>
      </section>
    </main>
  )
}
