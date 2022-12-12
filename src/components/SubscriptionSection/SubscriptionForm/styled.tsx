import styled from "styled-components";

const Container = styled.div`
  max-width: 58.5rem;
  margin-top: 15rem;
`

const Presentation = styled.div`
  > h2 {
      font-size: 8.2rem;
      margin-block: 1.2rem 2.4rem; 
    }

    > p {
      color: #202020;
      line-height: 2.6rem;
    }
`

const Form = styled.form`
    display: flex;
    height: 7.5rem;
    margin-top: 3.7rem;
   
    .inputContainer {
      display: flex;
      align-items: center;
      flex-grow: 1;
      gap: 1.6rem;
      padding-inline: 1.6rem;
      background-color: #fff;

      &:focus-within {
        outline: 2px solid black;
      }

      > input {
        flex-grow: 1;
        height: 100%;
        background-color: transparent;
        border: none;

        &::placeholder {
          color:#202020          
        }

        &:focus {
          outline: none;
        }
      }
    }

    > button {
      width: 19.4rem;
      
      background-color:  #FFCB47;
      color: #fff;
      border: none;
      cursor: pointer;
    }
`

export const StyledSubscriptionForm = {
  Container,
  Presentation,
  Form
}