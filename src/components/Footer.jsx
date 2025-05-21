import 'boxicons/css/boxicons.min.css';

const Footer = () => {
  return (
    <div>
      <footer className='flex items-center justify-between lg:m5-[15%] mt-[25%] py-8 lg;px-32 md:px-16 px-8 border-t-[0.3px] border-[#babaff]'>
        <img className='h-10' src="public/image/illu-text.png" alt="" />

        <img className='h-16 md:inline hidden' src="public/image/illu-logo.png" alt="" />

    <div className='flex gap-4'>
    <a className='md:text-3xl text-2xl hover:text-violet-600 duration-300' href="#"><i class='bx bxl-twitter'></i></a>
    <a className='md:text-3xl text-2xl hover:text-violet-600 duration-300' href="#"><i class='bx bxl-youtube'></i></a>
    <a className='md:text-3xl text-2xl hover:text-violet-600 duration-300' href="#"><i class='bx bxl-discord'></i></a>
    <a className='md:text-3xl text-2xl hover:text-violet-600 duration-300' href="#"><i class='bx bxl-linkedin-square'></i></a>
    </div>

      </footer>
    </div>
  )
}

export default Footer
