import Image from 'next/image'
import Link from '../components/Link'

const Hero = () => {
  return (
    <header className='mx-10'>
      <Image 
        src="/logo.svg"
        alt="Clipboard logo"
        width={110}
        height={200}
        className='mx-auto mt-32 mb-16'
      />
      <h1 className="text-4xl text-center font-bold text-dGrayishBlue">A history of everything you copy</h1>
      <p className='mt-6 mb-12 leading-7 text-center text-gBlue md:max-w-xl md:mx-auto'>Clipboard allows you to track and organize everything you copy. 
        Instantly access your clipboard on all your devices.
      </p>
      <div className='flex flex-col gap-6 md:flex-row md:justify-center md:items-center'>
        <Link 
          link="https://www.apple.com/la/ios/ios-18/"
          bgColor="bg-cyan"
          borderC="border-Dcyan"
          platform="iOS"
        />
        <Link 
          link="https://www.apple.com/la/mac/"
          bgColor="bg-lBlue"
          borderC="border-DlBlue"
          platform="Mac"
        />
      </div>
    </header>
  )
}

export default Hero