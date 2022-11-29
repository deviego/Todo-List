
import { useState } from 'react'
import * as C from './styled'

type Props = {
    onSaved: (taskName: string) => void
}

export const AddArea = ({onSaved}: Props) => {
    const [inputText, setInputText] = useState('')
    

    const handleKeyUp = (event: KeyboardEvent)=> {
        
        if(event.code === 'Enter' && inputText!== ''){
            console.log('adicionado')
            onSaved(inputText)
            setInputText('')
        }
    }

    return(
        <C.Container>  
            <div className='image'>➕ </div>
            <input type="text"
            value={inputText}
            onChange={e => setInputText(e.target.value)}
            onKeyUp={handleKeyUp}
            placeholder='Adicione uma tarefa' />
          
        </C.Container>
    )
}