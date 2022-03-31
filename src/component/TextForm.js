import React, {  useState } from 'react'
var epd;

export default function TextForm(props) {
  const {heading,title}=props; 
  let  [text ,setText]= useState("Enter your text hear"); 

  //  let [btntxt, setbtntxt]= useState("enable dark mode");
  //  let[darkmode , setdarkmode] =useState({ 
  //   color:'black', 
  //   backgroudColor:'white'
  // })

 function uppercase(){ 
   let upptxt = text.toUpperCase();
   setText(upptxt);
   props.showalert();
 } 
//  const changeMode=()=> { 
//    if(darkmode.color==="black" ){
//       setdarkmode({ 
//     color:'white',
//     backgroundColor:"black"    
//   })
//   setbtntxt ("enable light mode");
// } else { 
//   setdarkmode({ 
//     color:'black',
//     backgroundColor:"white"    
//   })
//   setbtntxt("enable dark mode")

// }
//  }



  function handleOnChange(event){
     console.log("on change fired ");
     setText(event.target.value);
  }
  // epd=darkmode;
  return (
   <>
   <div style={props.cdmode} >
    <div className='container' > 
    
    <div className="mb-3" style={props.cdmode}>
      <label htmlFor="" className="form-label m-3 text-success" ><h1> {heading}{title} </h1></label>
      <textarea style={props.cdmode}  type="text" value={text} onChange={handleOnChange} className="form-control " rows="4"placeholder="enter your text hear"/>
    
      <button onClick={uppercase} className='btn btn-primary m-3 '>Capital letters</button>
        

        {/* for dark mode */}
      {/* <button className='btn btn-primary ' > {btntxt} </button> */}
    </div>
  
  
 </div>
   <div className='container' style={props.cdmode}> 
    <h4> your text summery</h4>
     <p>  there are  {text.length} charecter in your sentence <br/> 
          {text.split(" ").filter((element)=>{return element.length!==0}).length } words  <br />
          can be read in {0.008 * (text.split(" ").length -1 )}   
      </p>
      <h4> Priview</h4>
      <p>{text.length>0?text:"enter some thing to priview here"}</p>
  
     
   </div>

   </div> 
   </>
  
  )
  }
  module.export={epd}
