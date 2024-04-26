import './FullStack.css'

const FullStack = () => {
    const user=[
        {
          id:0,
          image:"src/assets/Fullstack/person-front-computer-working-html.jpg",
          sub:"Best Full-Stack Development Project Ideas in 2024",
          user:"Tarun Singh",
          date:"25 Mar,2024",
          time:"4"
        },
        {
          id:1,
          image:"src/assets/Fullstack/how-long-it-would-it-take-to-learn-full-stack-development_-2048x1072.webp",
          sub:"How Long Would It Take to Be a Full Stack Developer?",
          user:"Meghana D",
          date:"26 Mar,2024",
          time:"3"
        },
        {
          id:2,
          image:"src/assets/Fullstack/1_6rDcIgFJQldloIERiUSmzw.png",
          sub:"How does Apache work? A detailed introduction to Apache",
          user:"Tushar Vinocha",
          date:"26 Mar,2024",
          time:"5"
        },
        {
            id:3,
            image:"src/assets/Fullstack/Full-Stack-Developer-course-syllabus.webp",
            sub:"Hot Topics That You Need To Know In Full Stack Developer Syllabus",
            user:"Archana",
            date:"26 Mar,2024",
            time:"6"
          },
          {
            id:4,
            image:"src/assets/Fullstack/DBMS1.webp",
            sub:"10 Best Database Management Systems For Software Developers",
            user:"Isha Sharma",
            date:"22 Mar,2024",
            time:"5"
          },
          {
            id:5,
            image:"src/assets/Fullstack/react-768x402.jpg",
            sub:"6 Essential Prerequisites For Learning ReactJS",
            user:"Ramkumar",
            date:"25 Mar,2024",
            time:"3"
          },
          {
            id:6,
            image:"src/assets/Fullstack/DBMS1.webp",
            sub:"10 Best Database Management Systems For Software Developers",
            user:"Isha Sharma",
            date:"22 Mar,2024",
            time:"5"
          },
          {
            id:7,
            image:"src/assets/Fullstack/react-768x402.jpg",
            sub:"6 Essential Prerequisites For Learning ReactJS",
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

export default FullStack