import React from 'react'
import './All.css'
const All = () => {

  const user=[
    {
      id:0,
      image:"src/assets/All/Render-array-of-objects-in-ReactJs.webp",
      sub:"How to Render an Array of Objects in React? [in 3 easy steps]",
      user:"Tarun Singh",
      date:"21 Mar,2024",
      time:"7"
    },
    {
      id:1,
      image:"src/assets/All/Fetch-Data-using-API-in-React.webp",
      sub:"Use ReactJS to Fetch and Display Data from API – 5 Simple Steps",
      user:"Tarun Singh",
      date:"21 Mar,2024",
      time:"5"
    },
    {
      id:2,
      image:"src/assets/All/feature-image-unique-project-ideas.jpg",
      sub:"Top 10 Unique Project Ideas for College Students",
      user:"Lukesh S",
      date:"21 Mar,2024",
      time:"5"
    },
    {
        id:3,
        image:"src/assets/All/blog-2-768x402.webp",
        sub:"Top 30 Mini Project Ideas For College Students [UPDATED]",
        user:"Srinithi Shankar",
        date:"25 Mar,2024",
        time:"6"
      },
      {
        id:4,
        image:"src/assets/All/Feature-image-Mechanical-Engineering-Project-Ideas.webp",
        sub:"20 Mechanical Engineering Project Ideas",
        user:"Meghana D",
        date:"25 Mar,2024",
        time:"9"
      },
      {
        id:5,
        image:"src/assets/All/animated-javascript-project-image.jpg",
        sub:"30 Best JavaScript Project Ideas For You [3 Bonus Portfolio Projects]",
        user:"Meghana D",
        date:"25 Mar,2024",
        time:"8"
      },
      {
        id:6,
        image:"src/assets/All/programming-lang-features-image.jpg",
        sub:"10 Hardest and Easiest Programming Languages in 2024",
        user:"Saakshi Priyadarshini",
        date:"22 Mar,2024",
        time:"6"
      },
      {
        id:7,
        image:"src/assets/All/How-to-set-up.webp",
        sub:"How to Setup React Router v6? | Tutorial 2024",
        user:"Tarun Singh",
        date:"25 Mar,2024",
        time:"5"
      },
  ]

  return (
    
    <div className='content'>
   <div className='style'>
 {user.map(item => (
  
         <div key={item.id} className="card" >
         <img src={item.image} className="card-img-top" alt="..." />
         <h6 className="card-subtitle p-2">{item.sub}</h6>
         <div className="card-body text-muted">
           <p className="card-text text-decoration-none">By {item.user}</p><p className="card-text text-decoration-none">{item.date}<span className="gap">{item.time} Min Read</span></p> 
         </div>
       </div>
    
       )
 )}
    </div>
   </div>
   
  )
}

export default All