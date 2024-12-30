import Image from "next/image"

const Footer = () => {
  return (
    <footer className="mt-28 px-10 pt-10 bg-slate-100 lg:flex lg:items-start">
      <Image 
        src="/logo.svg"
        alt="Clipboard Logo"
        width={55}
        height={100}
        className='mx-auto mt-4 mb-10 lg:mx-20 xl:mx-28'
      />
      <div className="grid grid-cols-1 justify-items-center gap-5 lg:grid-cols-3 lg:gap-x-6 lg:justify-items-start xl:gap-x-12">
        <a href="#" className="text-dGrayishBlue duration-200 hover:text-cyan">FAQs</a>
        <a href="#" className="text-dGrayishBlue duration-200 hover:text-cyan">Contact Us</a>
        <a href="#" className="text-dGrayishBlue duration-200 hover:text-cyan lg:row-start-1 lg:col-start-2">Privacy Policy</a>
        <a href="#" className="text-dGrayishBlue duration-200 hover:text-cyan">Press Kit</a>
        <a href="#" className="text-dGrayishBlue duration-200 hover:text-cyan lg:row-start-1 lg:col-start-3">Install Guide</a>
      </div>
      <div className="flex items-center justify-center gap-12 lg:ms-auto lg:me-32 lg:gap-7 lg:mt-6">
        <a href="#" className='my-16 lg:my-0'>
          <Image 
            src="/icon-facebook.svg"
            alt="Facebook Logo"
            width={28}
            height={200}
            className='filter sepia-0 brightness-1 hue-rotate-0 saturate-0 duration-200 hover:brightness-[1.4] hover:hue-rotate-[-40deg] hover:saturate-[6] md:w-6'
          />
        </a>
        <a href="#" className='my-16 lg:my-0'>
          <Image 
            src="/icon-twitter.svg"
            alt="Twitter Logo"
            width={28}
            height={200}
            className='filter sepia-0 brightness-1 hue-rotate-0 saturate-0 duration-200 hover:brightness-[1.4] hover:hue-rotate-[-40deg] hover:saturate-[6] md:w-6'
          />
        </a>
        <a href="#" className='my-16 lg:my-0'>
          <Image 
            src="/icon-instagram.svg"
            alt="Instagram Logo"
            width={28}
            height={200}
            className='filter sepia-0 brightness-1 hue-rotate-0 saturate-0 duration-200 hover:brightness-[1.4] hover:hue-rotate-[-40deg] hover:saturate-[6] md:w-6'
          />
        </a>
      </div>
    </footer>
  )
}

export default Footer