
// const App = () => {
//   function Clicked(event){
//     if(event.type == "click")
//       {
//       console.log("button is clicked");}
//     else if (event.type== "dblclick"){
//     console.log("button is double clicked");
//     }
//   }


//   return (
//     <div>

//       <button onClick={Clicked} onDoubleClick={Clicked}>Click Here</button>

//       <button onClick={function(){
//         console.log("Hello guys");
//       }}>Hello</button>

//       <input onChange={function(elem){
//         console.log(elem.target.value);
//       }} type="text" placeholder='ENTER NAME' />

//       <div onMouseMove={(elem)=>{
//         console.log(elem.clientY);
//       }} className='box'></div>

//     </div>
//   )
// }

// export default App


const App = () => {

  function btnClicked(){
    console.log("button is clicked")
  }

  function inputChanging(val){
    console.log(val)
  }

  return (
    <div>
      <h1>Hello</h1>
      <button onClick={btnClicked}  onDoubleClick={()=>{
        console.log("button clicked twice")
      }} >change</button>
      
      <input onChange={function(elem){
        inputChanging(elem.target.value)
      }} 
      type="text" 
      placeholder="Enter Name" />
    </div>
  )
}

export default App
