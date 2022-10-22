import React, {useState} from 'react';
import './App.css';

function App() {
    const [intVal, setIntVal] = useState({input:'', codeColor: ''})

    const inputValue = ({target}) => {

        setIntVal(prevState => ({...prevState, input: target.value, codeColor: ''}))

        if (target.value.length === 7 ) {
            const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(target.value)
            if (result && result.length) {
                const r = parseInt(result[1], 16)
                const g = parseInt(result[2], 16)
                const b = parseInt(result[3], 16)
                setIntVal({input: target.value, codeColor: 'rgb(' + r + ', ' + g + ', ' + b + ')'})

            } else setIntVal({input: target.value, codeColor: 'Ошибка'})

        }
    }

  return (
    <div className={"fullscreen"}
        style={intVal.codeColor !== "Ошибка!"? {backgroundColor: `${intVal.codeColor}`} : null }
    >
        <div className={"inputBox"}>
            <input value={intVal.input} onChange={inputValue} className="input" type="text" maxLength="7"/>
            <div className={"colorCode"} >{intVal.codeColor}</div>
        </div>
    </div>
  );
}

export default App;
