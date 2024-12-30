import Image from "next/image"

const Support = () => {
  return (
    <section className="my-24 mx-10 flex flex-col justify-center items-center gap-16 md:my-28 lg:flex-row lg:gap-24">
        <Image 
            src="/logo-google.png"
            alt="Google"
            width={150}
            height={80}
        />
        <Image 
            src="/logo-ibm.png"
            alt="IBM"
            width={130}
            height={70}
        />
        <Image 
            src="/logo-microsoft.png"
            alt="Microsoft"
            width={140}
            height={80}

        />
        <Image 
            src="/logo-hp.png"
            alt="Hewlett Packard Enterprise"
            width={125}
            height={80}
        />
        <Image 
            src="/logo-vector-graphics.png"
            alt="Vector Graphics"
            width={120}
            height={80}
        />
    </section>
  )
}

export default Support