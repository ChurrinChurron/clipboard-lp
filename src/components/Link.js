const DwldBtns = ({link, platform, bgColor, borderC}) => {
  return (
    <a href={link} target="_blank" className={`${bgColor} text-white font-semibold tracking-widest text-center p-3 rounded-3xl border-b-4 ${borderC} md:px-8 duration-200 hover:brightness-110`}>Download for {platform}</a>
  )
}

export default DwldBtns