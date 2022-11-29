import { useState } from "react";
import * as C from "./App.styles";
import "./global.css";
import { CardLIst } from "./components/Card"

import { Item } from "./types/Item";
import { AddArea } from "./components/AddArea";

function App() {
  const [list, setList] = useState<Item[]>([
    {
      id: 1,
      name: "comprar agua",
      done: false,
    },
    {
      id: 2,
      name: "comprar açucar",
      done: true,
    },
  ]);


  return (
    <C.Container>
      <C.Area>
        <C.Header> Task List</C.Header>

        <AddArea></AddArea>
        {list.map((item, index) => (<CardLIst key={index} item={item} />))}
        
      </C.Area>
    </C.Container>
  );
}

export default App;
