import React from 'react'
import {ChevronRight} from 'lucide-react'
const Categories = () => {
  return (
   <>
    <div className='p-5 pt-25 text-white'>
        <div>
          <h1 className='font-sans font-bold text-2xl mb-2 '>Browse</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4'>
                <a href="#"><img src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/discovery/PROD/browse-tray/Sparks.png" alt="Browse" className='h-40 rounded-md transition-transform duration-300 hover:scale-110'/></a>
                <a href="#"><img src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/discovery/PROD/browse-tray/News.jpg" alt="Browse" className='h-40 rounded-md transition-transform duration-300 hover:scale-110'/></a>
                <a href="#"><img src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/discovery/PROD/browse-tray/TV.jpg" alt="Browse" className='h-40 rounded-md transition-transform duration-300 hover:scale-110'/></a>
                <a href="#"><img src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/feature/categories/Movie.jpg" alt="Browse" className='h-40 rounded-md transition-transform duration-300 hover:scale-110'/></a>
                <a href="#"><img src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/discovery/PROD/browse-tray/Sports.jpg" alt="Browse" className='h-40 rounded-md transition-transform duration-300 hover:scale-110'/></a>
             </div>
          </div>
          <div>
           <div className='flex font-sans font-bold text-2xl mb-2 mt-10 items-center'>
             <h1>Studios</h1>
            <a href="#" className='text-right ml-auto text-black hover:text-white '> <p class=" font-extralight text-sm flex  ">View All <ChevronRight className='font-extralight w-5'/></p></a>
          </div>
           <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4'>
                <a href="#"><img src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/5598/1739441155598-a" alt="Browse" className='h-40 rounded-md transition-transform duration-300 hover:scale-110'/></a>
                <a href="#"><img src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/5223/1535223-a-292dbf42783d" alt="Browse" className='h-40 rounded-md transition-transform duration-300 hover:scale-110'/></a>
                <a href="#"><img src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/5731/1739780835731-a" alt="Browse" className='h-40 rounded-md transition-transform duration-300 hover:scale-110'/></a>
                <a href="#"><img src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/7816/1739359307816-a" alt="Browse" className='h-40 rounded-md transition-transform duration-300 hover:scale-110'/></a>
                <a href="#"><img src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/583/1739358280583-a" alt="Browse" className='h-40 rounded-md transition-transform duration-300 hover:scale-110'/></a>
             </div>
          </div>

          <div>
           <div className='flex font-sans font-bold text-2xl mb-2 mt-10 items-center'>
             <h1>Popular Languages</h1>
            <a href="#" className='text-right ml-auto text-black hover:text-white '> <p class=" font-extralight text-sm flex  ">View All <ChevronRight className='font-extralight w-5'/></p></a>
          </div>
           <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4'>
                <a href="/Hindi"><img src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/6661/1526661-a-00b818b5bc0e" alt="Browse" className='h-40 rounded-md transition-transform duration-300 hover:scale-110'/></a>
                <a href="/Hollywood"><img src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/6660/1526660-a-afdd1ecfd8ae" alt="Browse" className='h-40 rounded-md transition-transform duration-300 hover:scale-110'/></a>
                <a href="/Tamil"><img src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/6682/1526682-a-fd4e220ba563" alt="Browse" className='h-40 rounded-md transition-transform duration-300 hover:scale-110'/></a>
                <a href="/Telagu"><img src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/6685/1526685-a-5f5995a53f61" alt="Browse" className='h-40 rounded-md transition-transform duration-300 hover:scale-110'/></a>
                <a href="/Malyalam"><img src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/6672/1526672-a-eafe6913c6c8" alt="Browse" className='h-40 rounded-md transition-transform duration-300 hover:scale-110'/></a>
             </div>
          </div>
          <div>
           <div className='flex font-sans font-bold text-2xl mb-2 mt-10 items-center'>
             <h1>Popular Channels</h1>
            <a href="#" className='text-right ml-auto text-black hover:text-white '> <p class=" font-extralight text-sm flex  ">View All <ChevronRight className='font-extralight w-5'/></p></a>
          </div>
           <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4'>
                <a href="#"><img src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/4940/1424940-a-6486777c0aa5" alt="Browse" className='h-40 rounded-md transition-transform duration-300 hover:scale-110'/></a>
                <a href="#"><img src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/6331/1739528326331-a" alt="Browse" className='h-40 rounded-md transition-transform duration-300 hover:scale-110'/></a>
                <a href="#"><img src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/4955/1424955-a-832227cfe913" alt="Browse" className='h-40 rounded-md transition-transform duration-300 hover:scale-110'/></a>
                <a href="#"><img src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/4939/1424939-a-ed900757fe95" alt="Browse" className='h-40 rounded-md transition-transform duration-300 hover:scale-110'/></a>
                <a href="#"><img src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/4941/1424941-a-b57c5a18e60c" alt="Browse" className='h-40 rounded-md transition-transform duration-300 hover:scale-110'/></a>
             </div>
          </div>
          <div>
           <div className='flex font-sans font-bold text-2xl mb-2 mt-10 items-center'>
             <h1>Popular Genres</h1>
            <a href="#" className='text-right ml-auto text-black hover:text-white '> <p class=" font-extralight text-sm flex ">View All <ChevronRight className='font-extralight w-5'/></p></a>
          </div>
           <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4'>
                <a href="#"><img src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/5262/1535262-a-fbabfaf1176e" alt="Browse" className='h-40 rounded-md transition-transform duration-300 hover:scale-110'/></a>
                <a href="#"><img src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/5285/1535285-a-88035ca1ae69" alt="Browse" className='h-40 rounded-md transition-transform duration-300 hover:scale-110'/></a>
                <a href="#"><img src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/5284/1535284-a-656c6b45a905" alt="Browse" className='h-40 rounded-md transition-transform duration-300 hover:scale-110'/></a>
                <a href="#"><img src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/5264/1535264-a-9e7871687c76" alt="Browse" className='h-40 rounded-md transition-transform duration-300 hover:scale-110'/></a>
                <a href="#"><img src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/5292/1535292-a-5739f9c84b63" alt="Browse" className='h-40 rounded-md transition-transform duration-300 hover:scale-110'/></a>
             </div>
          </div>
          <div>
           <div className='flex font-sans font-bold text-2xl mb-2 mt-10 items-center'>
             <h1>Popular Sports</h1>
            <a href="#" className='text-right ml-auto text-black hover:text-white '> <p class=" font-extralight text-sm flex  ">View All <ChevronRight className='font-extralight w-5'/></p></a>
          </div>
           <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4'>
                <a href="#"><img src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/6630/1526630-a-9b9ea791cdaf" alt="Browse" className='h-40 rounded-md transition-transform duration-300 hover:scale-110'/></a>
                <a href="#"><img src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/4550/1534550-a-fc4b5ad51967" alt="Browse" className='h-40 rounded-md transition-transform duration-300 hover:scale-110'/></a>
                <a href="#"><img src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/6470/1735026006470-a" alt="Browse" className='h-40 rounded-md transition-transform duration-300 hover:scale-110'/></a>
                <a href="#"><img src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/5213/1745908815213-a" alt="Browse" className='h-40 rounded-md transition-transform duration-300 hover:scale-110'/></a>
                <a href="#"><img src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/6643/1526643-a-95b16247c411" alt="Browse" className='h-40 rounded-md transition-transform duration-300 hover:scale-110'/></a>
             </div>
          </div>
     </div>
   </>
  )
}

export default Categories
