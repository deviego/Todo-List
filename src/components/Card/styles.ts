import styled from "styled-components";
type ContainerProps ={ 
    done: boolean;
}

export const Container = styled.div(({done}: ContainerProps) => (
    `
  display: flex;
  background-color: #20212c;
  padding: 10px;
  border-radius: 8px;
  margin-bottom: 15px;
  align-items: center;

    input{
        width: 25px;
        height: 25px;
        margin-right: 8px;
    }
    label{
        font-size: 18px;
        color: #ccc;
        text-decoration: ${done ? 'line-through' : 'initial' };
    }

`
));


