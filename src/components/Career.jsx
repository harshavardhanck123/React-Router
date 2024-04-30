import './FullStack.css'

const FullStack = () => {
    const user=[
        {
          id:0,
          image:"https://res.cloudinary.com/dofdsgzno/image/upload/v1714456249/React-Router/career/bbwyvpsw4i32axqdnyiw.jpg",
          sub:"As a Software Engineer, How Do I Shift My Career to DevOps?",
          user:"Lahari Chandana",
          date:"16 Mar,2024",
          time:"4"
        },
        {
          id:1,
          image:"https://res.cloudinary.com/dofdsgzno/image/upload/v1714456250/React-Router/career/avjksit0fnciiwtlo6u5.webp",
          sub:"Is Data Science A Good Career Choice In 2024?",
          user:"Archana",
          date:"16 Mar,2024",
          time:"4"
        },
        {
          id:2,
          image:"https://res.cloudinary.com/dofdsgzno/image/upload/v1714456249/React-Router/career/kziakf1yxcudfs1xzsyo.webp",
          sub:"How to Become a Digital Marketer – Digital Marketing Career Roadmap",
          user:"Meghana D",
          date:"16 Mar,2024",
          time:"5"
        },
        {
            id:3,
            image:"https://res.cloudinary.com/dofdsgzno/image/upload/v1714456249/React-Router/career/reook9x3kxqvofeehmdp.webp",
            sub:"Is Choosing Automation Testing a Good Career Opportunity in 2024?",
            user:"Isha Sharma",
            date:"16 Mar,2024",
            time:"6"
          },
          {
            id:4,
            image:"https://res.cloudinary.com/dofdsgzno/image/upload/v1714456249/React-Router/career/ehuytpmdnsivjj3xgkcg.webp",
            sub:"Top Technologies to Learn in 2024: Jumpstart a Successful Tech Career",
            user:"Isha Sharma",
            date:"22 Mar,2024",
            time:"5"
          },
          {
            id:5,
            image:"https://res.cloudinary.com/dofdsgzno/image/upload/v1714456251/React-Router/career/zbe5fbh50dc1qzmhksoc.webp",
            sub:"Top 5 Tech Careers of the Future [2024]",
            user:"Ramkumar",
            date:"25 Mar,2024",
            time:"3"
          },
          {
            id:6,
            image:"https://res.cloudinary.com/dofdsgzno/image/upload/v1714456250/React-Router/career/lzcfkyf8m75o1thbn1wb.jpg",
            sub:"MEAN vs MERN: Career Growth & Salary",
            user:"admin",
            date:"22 Mar,2024",
            time:"5"
          },
          {
            id:7,
            image:"https://res.cloudinary.com/dofdsgzno/image/upload/v1714456255/React-Router/career/nzju1cisrhanyyjoeeyq.webp",
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