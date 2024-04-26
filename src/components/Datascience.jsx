import React from 'react'


const Datascience = () => {
  const user=[
    {
      id:0,
      image:"./assets/Datascience/5.webp",
      sub:"Can A Commerce Student Do Data Science?",
      user:"Saakshi Priyadarshini",
      date:"16 Apr,2024",
      time:"3"
    },
    {
      id:1,
      image:"src/assets/Datascience/feature-image-product-based-companies-for-data-science-freshers.webp",
      sub:"Top Product-Based Companies for Data Science Freshers",
      user:"Jaishree Tomar",
      date:"10 Nov,2023",
      time:"3"
    },
    {
      id:2,
      image:"src/assets/Datascience/Feature-image-Top-High-Paying-Non-Coding-Jobs-in-Data-Science.webp",
      sub:"Top 10 High Paying Non-Coding Jobs in Data Science in 2024",
      user:"Isha Sharma",
      date:"16 Mar,2024",
      time:"6"
    },
    {
        id:3,
        image:"src/assets/Datascience/Feature-image-Top-Product-Based-Companies-for-Data-Scientists.webp",
        sub:"Top Product Based Companies for Data Scientists in 2024",
        user:"Jaishree Tomar",
        date:"26 Mar,2024",
        time:"6"
      },
      {
        id:4,
        image:"src/assets/Datascience/How-Long-Would-It-Take-to-Learn-Data-Science-2048x1072.webp",
        sub:"How Long Would It Take to Learn Data Science?",
        user:"Meghana D",
        date:"22 Mar,2024",
        time:"5"
      },
      {
        id:5,
        image:"src/assets/Datascience/image-4.webp",
        sub:"Roles and Responsibilities of a Data Scientist",
        user:"Ramkumar",
        date:"25 Mar,2024",
        time:"3"
      },
      {
        id:6,
        image:"src/assets/Datascience/Real-World-Data-Science-Examples-2048x1072.webp",
        sub:"12 Real-World Data Science Examples: Power Of Data Science",
        user:"Isha Sharma",
        date:"22 Mar,2024",
        time:"5"
      },
      {
        id:7,
        image:"src/assets/Datascience/Your-paragraph-text-2048x1024.webp",
        sub:"Data Science vs Data Analytics | Best Career Choice in 2024",
        user:"Ramkumar",
        date:"25 Mar,2024",
        time:"3"
      },
  ]

return (
<div>
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
</div>
)
}

export default Datascience