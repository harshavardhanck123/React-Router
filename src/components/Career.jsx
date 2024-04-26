import './FullStack.css'

const FullStack = () => {
    const user=[
        {
          id:0,
          image:"src/assets/Career/2202.i402.018.S.m004.c13.Devops-engineer-flat-composition-2048x1575.jpg",
          sub:"As a Software Engineer, How Do I Shift My Career to DevOps?",
          user:"Lahari Chandana",
          date:"16 Mar,2024",
          time:"4"
        },
        {
          id:1,
          image:"src/assets/Career/Blog-1-1-768x402.webp",
          sub:"Is Data Science A Good Career Choice In 2024?",
          user:"Archana",
          date:"16 Mar,2024",
          time:"4"
        },
        {
          id:2,
          image:"src/assets/Career/Feature-image-How-to-Become-a-Digital-Marketer-–-Digital-Marketing-Career-Roadmap.webp",
          sub:"How to Become a Digital Marketer – Digital Marketing Career Roadmap",
          user:"Meghana D",
          date:"16 Mar,2024",
          time:"5"
        },
        {
            id:3,
            image:"src/assets/Career/Feature-image-Is-Choosing-Automation-Testing-a-Good-Career-Opportunity.webp",
            sub:"Is Choosing Automation Testing a Good Career Opportunity in 2024?",
            user:"Isha Sharma",
            date:"16 Mar,2024",
            time:"6"
          },
          {
            id:4,
            image:"src/assets/Career/Feature-image-Top-Technologies-to-Learn.webp",
            sub:"Top Technologies to Learn in 2024: Jumpstart a Successful Tech Career",
            user:"Isha Sharma",
            date:"22 Mar,2024",
            time:"5"
          },
          {
            id:5,
            image:"src/assets/Career/Top-5-Tech-Careers-in-2023-1.webp",
            sub:"Top 5 Tech Careers of the Future [2024]",
            user:"Ramkumar",
            date:"25 Mar,2024",
            time:"3"
          },
          {
            id:6,
            image:"src/assets/Career/tumbnail-img-2-2048x1033.jpg",
            sub:"MEAN vs MERN: Career Growth & Salary",
            user:"admin",
            date:"22 Mar,2024",
            time:"5"
          },
          {
            id:7,
            image:"src/assets/Career/ui_ux_salary_guide_is_it_a_high_paying_career_feature_image.webp",
            sub:"UI/UX Salary Guide 2024: Is it a High-Paying Career?",
            user:"Srinithi Shankar",
            date:"22 Mar,2024",
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

export default FullStack