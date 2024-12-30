import WorkflowPro from "./WorkflowPro"
import blackList from "../../public/icon-blacklist.svg"
import text from "../../public/icon-text.svg"
import preview from "../../public/icon-preview.svg"

const Workflow = () => {
  return (
    <section className="mx-10">
        <h2 className="mx-2 text-center font-bold text-2xl text-dGrayishBlue md:text-3xl">Supercharge your workflow</h2>
        <p className="mt-4 mb-10 leading-7 text-center text-gBlue">We’ve got the tools to boost your productivity.</p>
        <div className="max-w-6xl mx-auto lg:flex lg:justify-center lg:items-center lg:gap-12">
            <WorkflowPro 
                wProImg={blackList}
                imgAlt="blacklist"
                wProTitle="Create blacklists"
                wProDesc="Ensure sensitive information never makes its way to your clipboard by excluding certain sources."
            />
            <WorkflowPro 
                wProImg={text}
                imgAlt="text"
                wProTitle="Plain text snippets"
                wProDesc="Remove unwanted formatting from copied text for a consistent look."
            />
            <WorkflowPro 
                wProImg={preview}
                imgAlt="preview"
                wProTitle="Sneak preview"
                wProDesc="Quick preview of all snippets on your Clipboard for easy access."
            />
        </div>
    </section>
  )
}

export default Workflow