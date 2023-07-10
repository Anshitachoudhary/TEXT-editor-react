import React, {useState} from "react";

export default function TextForm(props) {

const UpCaseHandler = ()=>{
// console.log("Button uppercase is clicked" + text);
let newText = text.toUpperCase()
setText(newText); 
props.showAlert("Convert to uppercase!" , "success")
}

const loCaseHandler = ()=>{
    // console.log("Button uppercase is clicked" + text);
    let newText = text.toLowerCase()
    setText(newText) ;
props.showAlert("Convert to Lowercase!" , "success")

    }

    const clickHandler = ()=>{
        setText(" "); 
props.showAlert("clear Text." , "success")

        }

 const HandleCopy = () =>{
let text = document.getElementById("myBox");
 text.select();
 navigator.clipboard.writeText(text.value);
 document.getSelection().removeAllRanges();
props.showAlert("Text is copied!" , "success")

 }

const HandleExtraSpace = () =>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
props.showAlert("Extra spaces are removed" , "success")

}

const HandlerOnChan =(event)=>{
// console.log("On Change");
setText(event.target.value);
}

const[text,setText] = useState('');
    return (
        <>
        <div className="container" style={{color:props.mode ==='dark'?'white':'black'}}>

            <h1 className="mb-4">{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" style={{backgroundColor: props.mode === 'dark' ? '#86b7fe':'white',color:props.mode ==='dark'? 'white':'black'}} value={text}id="myBox" onChange={HandlerOnChan} rows="8"></textarea>
            </div>
            <button disabled={text.length===0}className="btn btn-primary mx-2 my-1" onClick={UpCaseHandler}>Convert to UpperCase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2  my-1" onClick={loCaseHandler}>Convert to LowerCase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2  my-1" onClick={clickHandler}>Clear</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2  my-1" onClick={HandleExtraSpace }>Remove Extra Space</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2  my-1" onClick={HandleCopy}>Copy</button>

        </div>
        <div className="container my-4" style={{color:props.mode ==='dark'?'white':'black'}}>
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").filter((element)=> {return element.length!==0}).length}Words & {text.length}Character</p>
        <p>{0.008 * text.split(" ").filter((element)=> {return element.length!==0}).length} Minute to read.</p>
        <h2>Preview Summary</h2>
        <p>{text.length>0 ? text:"Enter above to Preview somthing"}</p>
        </div>
       </> 
    );
}