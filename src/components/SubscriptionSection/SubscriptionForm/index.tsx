import { FormEvent } from "react";
import emailIcon from "../../../assets/mail.svg"
import { StyledSubscriptionForm } from "./styled";

export function SubscriptionForm() {
  function handleSubscribeUserOnNewsLetter(event:FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }
  
  return (
    <StyledSubscriptionForm.Container>
      <StyledSubscriptionForm.Presentation>
        <p>Sua casa com as</p>
        <h2>Melhores plantas</h2>
        <p>
          Encontre aqui uma vasta seleção de plantas para decorar a
          sua casa e torná-lo uma pessoa mais feliz no seu dia a dia.
          Entre com seu e-mail e assine nossa newsletter para saber das novidades da marca.
        </p>
      </StyledSubscriptionForm.Presentation>

      <StyledSubscriptionForm.Form 
        onSubmit={event => handleSubscribeUserOnNewsLetter(event)} 
      >
        <div className="inputContainer">
          <label htmlFor="userEmail">
            <img src={emailIcon} alt="email icon" />
          </label>
          <input type="email" id="userEmail" placeholder="insira seu email" />
        </div>
        <button type="submit">Assinar newsLetter</button>
      </StyledSubscriptionForm.Form>
    </StyledSubscriptionForm.Container>
  )
}