import Image from 'next/image'
import SnippetPro from './SnippetPro'

const Snippets = () => {
  return (
    <section className='my-32 mx-10'>
        <h2 className='mx-2 text-center font-bold text-2xl text-dGrayishBlue md:text-3xl'>Keep track of your snippets</h2>
        <p className='my-5 text-center text-gBlue md:max-w-2xl md:mx-auto md:mb-20'>Clipboard instantly stores any item you copy in the cloud, 
            meaning you can access your snippets immediately on all your 
            devices. Our Mac and iOS apps will help you organize everything.
        </p>
        <div className='lg:flex lg:items-center 2xl:gap-14 2xl:items-start'>
            <Image 
            src="/image-computer.png"
            alt="Computer"
            width={400}
            height={200}
            className='mx-auto my-16 lg:m-0 lg:w-[40em] lg:h-[20%] lg:relative lg:-left-20 2xl:w-[50em]'
            />
           <div className='2xl:mt-14'>
              <SnippetPro 
                proTitle="Quick Search"
                proDesc="Easily search your snippets by content, category, web address, application, and more."
              />
              <SnippetPro 
                proTitle="iCloud Sync"
                proDesc="Instantly saves and syncs snippets across all your devices."
              />
              <SnippetPro                 
                proTitle="Complete History"
                proDesc="Retrieve any snippets from the first moment you started using the app."
              />
           </div> 
        </div>
    </section>
  )
}

export default Snippets