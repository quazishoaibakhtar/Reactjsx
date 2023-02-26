import React from 'react'





const Compo = (props) => {

 
const {title, handle, image, description} = props
  
  return (
 
    
    
    <div className='card'>
  <div className="card-image">
    <figure className="image is-4by3">
    <img src={image} alt="img" />
    </figure>
  </div>

  <div className="card-content">
  
  <div class="media-content">
    
        <p class="title is-4">{title}</p>
        <p class="subtitle is-6">{handle}</p>
      </div>
      <div className='content'>{description}</div>
      </div>
    
      


     
    
    </div>
  )
}

export default Compo;


// This Method is used When we need to Pass props morethan 1 and two As variable 

// import React from 'react'

// const Compo = (props) => {

// {title}
// {handle}
// const {title,Batch,color} = props
  
//   return (
//     <div style={{color}}>Compo {title}  
//     {Batch}
//     </div>
//   )
// }

// export default Compo;

 
// Another Way Of Declaring Props

// import React from 'react'

// const Compo = ({title,Batch}) => {

// const Vocal = title
//   return (
//     <div>Compo {Vocal}  
//     {Vocal}
//     </div>
//   )
// }

// export default Compo;