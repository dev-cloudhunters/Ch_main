import * as React from "react"
import Button from "../Button/Button"
import { ContactStyles } from "./ContactStyles"

const Contact = () => {
  return (
    <ContactStyles className="section">
      <h5 className="intro-contacts">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed nisi placerat. </h5>
      <form name="contact" netlify>
        <input placeholder="Nome" type="text" name="name" />
        <input placeholder="Email" type="email" name="email" />
        <textarea
          placeholder="Messaggio..."
          name="message"
          rows="5"
        ></textarea>
        <Button text="Invia Messaggio" />
      </form>
    </ContactStyles>
  )
}

export default Contact
