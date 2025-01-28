import React, { useState,useRef} from 'react'

function Calsi() {


    const  [value,setvalue] = useState("");

   
    return (
        <> 
            <div className="calsicontaine">

         <h2>BASIC CALLCULATOR</h2>
                <input type="text" value={value}  className="display" />
                <div className="numbercontainer">

                    <input value="1" type="button" className="all" onClick={e => setvalue(value + e.target.value)} />
                    <input value="2" type="button" className="all" onClick={e => setvalue(value + e.target.value)} />
                    <input value="3" type="button" className="all" onClick={e => setvalue(value + e.target.value)} />
                    <input value="4" type="button" className="all" onClick={e => setvalue(value + e.target.value)} />
                    <input value="5" type="button" className="all" onClick={e => setvalue(value + e.target.value)} />
                    <input value="6" type="button" className="all" onClick={e => setvalue(value + e.target.value)} />
                    <input value="7" type="button" className="all" onClick={e => setvalue(value + e.target.value)} />
                    <input value="8" type="button" className="all" onClick={e => setvalue(value + e.target.value)} />
                    <input value="9" type="button" className="all" onClick={e => setvalue(value + e.target.value)} />
                    <input value="0" type="button" className="all" onClick={e => setvalue(value + e.target.value)} />
                    <input value="00" type="button" className="all" onClick={e => setvalue(value + e.target.value)} />
                    <input value="+" type="button" className="all" onClick={e => setvalue(value + e.target.value)} />
                    <input value="-" type="button" className="all" onClick={e => setvalue(value + e.target.value)} />
                    <input value="*" type="button" className="all" onClick={e => setvalue(value + e.target.value)} />
                    <input value="/" type="button" className="all" onClick={e => setvalue(value + e.target.value)} />
                    <input value="%" type="button" className="all" onClick={e => setvalue(value + e.target.value)} />
                    <input value="." type="button" className="all" onClick={e => setvalue(value + e.target.value)} />
                    <input value="=" type="button" className="all" onClick={e => setvalue(eval(value))} />
                    <input value="AC" type="button"  className="ac" onClick={e => setvalue("")} />
                    <input value="DE" type="button"  className="dc" onClick={e => setvalue(value .slice(0,-1))} />
                    
                    
                </div>

            </div>

  </>
            )
}
      
export default Calsi