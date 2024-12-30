import Image from 'next/image'

const Access = () => {
  return (
    <section className='mx-10'>
        <h2 className="mx-2 text-center font-bold text-2xl text-dGrayishBlue md:text-3xl">Access Clipboard Anywhere</h2>
        <p className="mt-4 mb-10 leading-7 text-center text-gBlue md:max-w-xl md:mx-auto">Whether you’re on the go, or at your computer, you can access all your Clipboard 
           snippets in a few simple clicks.
        </p>
        <Image 
          src="/image-devices.png"
          alt="Devices"
          width={400}
          height={200}
          className='mx-auto mt-20 mb-16 md:w-[40em] 2xl:w-[50em]'
        />
    </section>
  )
}

export default Access