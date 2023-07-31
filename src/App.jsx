import { useState } from "react"

function App() {
  const [password, setPassword] = useState("")
	const [copyText, setCopyText] = useState("Copiar")
  const [passwordSize, setPasswordSize] = useState(12)
  const [showInput, setShowInput] = useState(false)
  

	function generate() {
    const characters = "'1234567890-=!@#$%¨&*()_+qwertyuiop[asdfghjklç~]zxcvbnm,.;/QWERTYUIOP{ASDFGHJKLÇ^}ZXCVBNM<>:?"
    
    let newPassword = ""
    for (let i = 0; i < passwordSize; i++) {
      const position = Math.floor(Math.random() * characters.length)
      newPassword += characters[position]
    }
    setPassword(newPassword)
		setCopyText("Copiar")
  }

	function copyToClipboard() {
    window.navigator.clipboard.writeText(password)
    setCopyText("Copiado!")
  }

  return (
    <div>
      <h1>Gerador de senhas</h1>
      <div>
        <label htmlFor="showInput">Customizar tamanho da senha:</label>
        <input
         type="checkbox" 
         id="showInput"
         value={showInput}
         onChange={() => setShowInput(currentState => !currentState)}
         />
      </div>
      {showInput ? (
        <div>
        <label htmlFor="passwordSize">Tamanho:</label>
        <input 
          type="number"
          id="passwordSize"
          min={1}
          value={passwordSize}
          onChange={(ev) => setPasswordSize(ev.target.value)}
        />
      </div>

      ) : null}

      
			<button onClick={generate}>Gerar senha de {showInput ? passwordSize : 12} caracteres!</button>
			<button onClick={copyToClipboard}>{copyText}</button>
      <div>{password}</div>
    </div>
  )
}

export default App