import Link from "./Link"

const Download = () => {
  return (
    <section className="mx-10 md:my-32">
        <h2 className='mx-2 text-center font-bold text-2xl text-dGrayishBlue md:text-3xl'>Clipboard for IOS and <br className="block md:hidden"/> Mac OS</h2>
        <p className='mt-6 mb-12 text-center text-gBlue md:max-w-xl md:mx-auto'>Available for free on the App Store. Download for Mac or iOS, sync with iCloud 
            and you’re ready to start adding to your clipboard.
        </p>
        <div className='flex flex-col gap-6 md:flex-row md:justify-center'>
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
    </section>
  )
}

export default Download