import React from 'react'

// Props are read-only inputs passed from a parent component to a child component, allowing the parent to provide data or behavior to the child.
// They allow components to be reusable and dynamic.
// Props are read-only. A child should not directly modify its props.
// Props can contain strings, numbers, booleans, arrays, objects, functions, or even JSX.
// props itself is not something that returns a value. In a React component, props is an object containing the data passed by the parent.
// Props = an object containing the values passed from the parent to the child.
// Props are not automatically all the parent's data. Props contain only the values that the parent explicitly passes to the child.
// Parent component → a component that renders another component.
// Child component → a component that is rendered inside another component.  
// ex here Card is the child component because it is rendered by app  & app is the parent component

// const Card = (props) => {
//     console.log(props)
//   return (
//     <div>
//       <div className='parent'>
//       <div className='card'>
//         <img src={props.img} alt="" />
//         <h1>{props.user},{props.age}</h1>
//         <p>
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis omnis ea fugiat doloremque atque repudiandae quam aperiam animi nam! Vel laboriosam ipsam animi quo non officia, itaque accusantium a ut?
//         </p>
//         <button className='button'>View Profile</button>
//       </div>
//     </div>
//     </div>
//   )
// }

// --------------------using destructuring---------------
// Destructuring is a JavaScript feature that allows you to extract values from arrays or properties from objects and store them directly in variables.
const Card =({user,age,img})=>{
  
  return(
    <>
    <div className='parent'>
      <div className='card'>
        <img src={img} alt="" />
        <h1>{user},{age}</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum eligendi deserunt, doloribus facere aperiam inventore. Error, impedit illo? Fuga voluptates alias aliquam tempora numquam et temporibus consectetur minus est esse.</p>
      </div>
    </div>
    </>
  )
}

export default Card
