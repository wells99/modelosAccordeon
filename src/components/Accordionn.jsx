import { useState } from "react";

    const Accordionn = ({pergunta,resposta}) => {
    const [accordionOpen,setaccordionOpen] = useState(false)
    return (
        <>
            <div className="p-5 m-2 bg-gray-200 rounded-lg ">
                <div id="FAQ" className="py-2">
                    <button onClick={() => setaccordionOpen(!accordionOpen)} className="flex justify-evenly gap-6 items-center w-full">
                        <span className="lg:font-semibold text-md text-left lg:text-lg ">
                            {pergunta}
                        </span>
                        {accordionOpen ? <span className="text-4xl text-bold text-red-700 hover:cursor-pointer">-</span>:<span className="text-4xl text-bold text-blue-700 hover:cursor-pointer">+</span>}
                    </button>
                    <div className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 
                        text-sm ${accordionOpen ? 'grid-rows-[1fr] opacity-100':'grid-rows-[0fr] opacity-0'}`}>
                        <div className="overflow-hidden text-left">{resposta}</div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Accordionn;