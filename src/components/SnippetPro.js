const SnippetPro = ({proTitle, proDesc}) => {
  return (
    <div>
        <h3 className="mx-2 text-center font-bold text-2xl text-dGrayishBlue md:text-xl lg:text-left lg:mx-0">{proTitle}</h3>
        <p className="mt-2 mb-10 leading-7 text-center text-gBlue lg:text-left lg:max-w-sm">{proDesc}</p>
    </div>
  )
}

export default SnippetPro