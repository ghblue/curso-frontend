import { Button, TextField } from '@material-ui/core'
import styled from 'styled-components'

export const FormStyled = styled.form`
    
`

export const ButtonOrganization = styled.div`
    display: flex;
    justify-content: space-between;
    margin-inline: 32px;

`

export const ButtonCreate = styled(Button)`

    background-color: #267ACD;
    border-radius: 4px;
    width: 95px;
    height: 36px;

`

export const ButtonCancel = styled(Button)`

    background: #E0E0E0;
    border-radius: 4px;
    width: 95px;
    height: 36px;


`

export const CreateTitle = styled.h3`  


    height: 30px;    
    color: rgba(33, 33, 33, 1);    
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    margin-top: 32px;



`

export const CreateBody = styled.h3`
    
    height: 30px; 
    color: rgba(33, 33, 33, 1);    
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    margin-top: 25px;
`

export const NewTextField = styled(TextField)`

    border: 1px solid #C4C4C4;
    box-sizing: border-box;
    border-radius: 4px;
    width: 21rem;       
`
