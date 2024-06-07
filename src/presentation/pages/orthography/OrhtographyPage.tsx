import { GPTMessage, MyMessage, TypingLoader } from "../../components"

export const OrhtographyPage = () => {
  return (
    <div className="chat-container">
      <div className="chat-messages">
        <div className="grid grid-cols-12 gap-y-2">

          {/* Bienvenida */}

          <GPTMessage text="¡Hola! Soy un modelo de lenguaje de OpenAI y estoy aquí para ayudarte con tus dudas de ortografía. ¿En qué puedo ayudarte hoy?" />
          <MyMessage text ="hola mundo"/>
        
          <TypingLoader className="fade-in"/>
        </div>
      </div>
    </div>
  )
}