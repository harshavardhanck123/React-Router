import React from 'react'

const Cyber = () => {
  const user = [
    {
      id: 0,
      image: "src/assets/Cyber/8bfd01c18be1b5059bc0d7770d9dabf1.webp",
      sub: "Is coding required for cybersecurity? If yes, how crucial is coding?...",
      user: "Tarun Singh",
      date: "25 Mar,2024",
      time: "4"
    },
    {
      id: 1,
      image: "src/assets/Cyber/Blog-9-768x402.webp",
      sub: "The Cybersecurity Surge: 5 Must-Have Cybersecurity Certifications!",
      user: "Meghana D",
      date: "26 Mar,2024",
      time: "3"
    },
    {
      id: 2,
      image: "src/assets/Cyber/cybersecuity-.gif",
      sub: "What is Cybersecurity? Importance and its uses & the growing...",
      user: "Tushar Vinocha",
      date: "26 Mar,2024",
      time: "5"
    },
    {
      id: 3,
      image: "src/assets/Cyber/Feature-image-Non-Coding-Jobs-in-Cybersecurity.webp",
      sub: "Non-Coding Jobs in Cybersecurity: A Comprehensive Guide",
      user: "Archana",
      date: "26 Mar,2024",
      time: "6"
    },
    {
      id: 4,
      image: "src/assets/Cyber/Feature-image-What-Is-Hacking_-Types-of-Hacking-More.webp",
      sub: "What Is Hacking? Types of Hacking & More",
      user: "Isha Sharma",
      date: "22 Mar,2024",
      time: "5"
    },
    {
      id: 5,
      image: "src/assets/Cyber/Teal-Illustration-Digital-Business-Blog-Banner-1-2048x1152.webp",
      sub: "8 Different Types of Cybersecurity and Threats Involved",
      user: "Ramkumar",
      date: "25 Mar,2024",
      time: "3"
    },
    {
      id: 6,
      image: "src/assets/Cyber/The-Ultimate- Cybersecurity-Roadmap-for-Beginners.webp",
      sub: "The Ultimate Cybersecurity Roadmap for Beginners",
      user: "Isha Sharma",
      date: "22 Mar,2024",
      time: "5"
    },
    {
      id: 7,
      image: "src/assets/Cyber/Yellow-Blue-Illustration-Business-Blog-Banner-2048x1152.webp",
      sub: "Cybersecurity Vs Ethical Hacking: Top 10 Differences",
      user: "Isha Sharma",
      date: "22 Mar,2024",
      time: "5"
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

export default Cyber