import { useState } from "react";
const Accordion = (props) => {
    const [item, setItem] = useState(props.datas);
    const handleActive = () => {
        let newActive = item.active === 1 ? 0 : 1;
        setItem({...item,active: newActive});
    }
    return (
       <> 
                {/* begin item */}
                <div className={`bg-[#e9e9e9] p-5 border mb-5 border-[#c9c6c655] rounded-md w-[280px] duration-500 group ${item.active === 1 ? "is-active bg-white":""}`} >
                    <div className="flex items-center">
                        <div className="w-full group-[.is-active]:font-bold">{item.pergunta}</div>
                        <div className="text-xl font-bold rotate-90 group-[.is-active]:rotate-[270deg] group-[.is-active]:text-red-600  duration-500 cursor-pointer" onClick={handleActive}>{`${">"}`}</div>
                    </div>
                    <div className="overflow-hidden max-h-0 group-[.is-active]:max-h-[100px] duration-500">
                    {item.resposta}
                    </div>
                </div>            
                {/* end item */}
        </>
    )
}

export default Accordion