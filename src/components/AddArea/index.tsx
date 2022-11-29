
import * as C from './styled'

export const AddArea = () => {
    return(
        <C.Container>
            <input type="text"
            placeholder='Adicione uma tarefa' />
            <div className='image'>➕ </div>
        </C.Container>
    )
}