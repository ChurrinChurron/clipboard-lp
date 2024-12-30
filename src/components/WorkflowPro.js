import Image from "next/image"

const WorkflowPro = ({wProImg, imgAlt, wProTitle, wProDesc}) => {
  return (
    <div className="max-w-md mx-auto lg:w-96">
        <Image 
            src={wProImg}
            alt={imgAlt}
            width={44}
            className='mx-auto mt-20 mb-12 lg:w-10 lg:mb-10'
        />
        <h3 className="mx-2 text-center font-bold text-2xl text-dGrayishBlue">{wProTitle}</h3>
        <p className="my-6 leading-7 text-center text-gBlue">{wProDesc}</p>
    </div>
  )
}

export default WorkflowPro