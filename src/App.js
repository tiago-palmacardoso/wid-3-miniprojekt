import { useState } from "react";
import "./styles.css"
export default function App() {
  const [text, setText] = useState("")
  const [font, setFont] = useState(12)
  const [color, setColor] = useState("#ffffff")
  const [weight, setWeight] = useState("normal")
  const reset = () => {
    setText("")
    setFont(12)
    setColor("#ffffff")
    setWeight("normal")
  }

  return (
    <div className="App">
      <div className="BigContainer">
        <div className="HeaderRow">
          <div className="Logo">
            <img src="/Logo.png" alt="Logo miniproject WID-3" />
          </div>
          <div className="Title">
            <h1>Welcome to CSS Playground</h1>
            <h3>Here you can try different CSS effects on a text</h3>
          </div>
        </div>
        <div className="Body">
          <div className="Attributes">
            <div className="attRow">
              <label>
                Font size
              </label>
              <input type="number"
                value={font} onChange={(e) => setFont(e.target.valueAsNumber || 0)} />
              {font}
            </div>

            <div className="attRow">
              <label>
                Color
              </label>
              <input type="color"
                value={color} onChange={(e) => setColor(e.target.value)} />
              {color}
            </div>

            <div className="attRow">
              <label>
                Font weight
              </label>
              <select
                value={weight}
                onChange={(e) => setWeight(e.target.value)}>
                <option value="normal">  Normal</option>
                <option value="bold">  Bold</option>
              </select>
            </div>

            <div className="attRow">
              <button onClick={reset}> Reset
              </button>
            </div>
          </div>

          <div>
            <textarea className="TextInput"
              placeholder="Insert your text here"
              value={text}
              onChange={(e) => setText(e.target.value)}
              style={{ fontSize: `${font}px`, color: color, fontWeight: weight }}>

            </textarea>
          </div>
        </div>
      </div>
    </div >
  );
}
