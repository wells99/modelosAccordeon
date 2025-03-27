import { useState } from "react";
import Accordion from "./components/Accordion";
import Accordionn from "./components/Accordionn";
function App() {
  const [list, setList] = useState([
    {
      pergunta:"Qual o seu nome ?",
      resposta:"Meu nome é Well",
      active:1,
    },
    {
      pergunta:"O que você faz ?",
      resposta:"Desenvolvo aplicativos web",
    },
    {
      pergunta:"Em quais linguagens você desenvolve ?",
      resposta:"React, PHP, Javascript, React Native, Python",
    },
  ]);
  return (
    <div className="bg-[#8e8888] h-screen flex justify-evenly items-center">
            <div className="list">
              {list.map((item, key)=>(
                <Accordion key={key} datas={item} />
              ))}
            </div>

            <div className="flex flex-col">

            <Accordionn 
              pergunta={"Primeira pergunta"}
              resposta={"Certa resposta"}
            />
            <Accordionn 
              pergunta={"Segunda pergunta"}
              resposta={"Resposta incorreta"}
            />
            <Accordionn 
              pergunta={"Terceira pergunta"}
              resposta={"Certa resposta"}
            />
            </div>

    </div>
  )

 
}

export default App
