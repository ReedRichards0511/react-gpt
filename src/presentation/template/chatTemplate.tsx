import { useState } from "react"
import { GPTMessage, MyMessage, TypingLoader } from "../components";
import { TextMessageBox } from "../components/chat-input-boxes/TextMessageBox";

interface Message {
  text: string;
  isGPT: boolean;
}

export const ChatTemplate = () => {

  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);

  const hanldePost = async (message: string) => {
    setLoading(true);
    setMessages((prev) => [...prev, { text: message, isGPT: false }]);

    //todo useCase

    setLoading(false);

    //todo añadir el mensaje de isGTP en true
  };


  return (
    <div className="chat-container">
      <div className="chat-messages">
        <div className="grid grid-cols-12 gap-y-2">

          {/* Bienvenida */}

          <GPTMessage text="¡Hola! Soy un modelo de lenguaje de OpenAI y estoy aquí para ayudarte con tus dudas de ortografía. ¿En qué puedo ayudarte hoy?" />

          {
            messages.map((message, index) => (
              message.isGPT ?
                (
                  <GPTMessage key={index} text="Esto es de OpenAI" />
                ) : (
                  <MyMessage key={index} text={message.text} />
                )
            ))
          }
          {
            loading && (
              <div className="col-start-1 col-end-12 fade-in">
                <TypingLoader className="" />
              </div>
            )
          }


        </div>
      </div>

      <TextMessageBox
        onSendMessage={
          hanldePost
        }
        placeholder="Escribe aqui lo que desees"
        disableCorrections

      />


    </div>
  )
}