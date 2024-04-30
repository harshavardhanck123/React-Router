import React from 'react'

const Cyber = () => {
  const user = [
    {
      id: 0,
      image: "https://res.cloudinary.com/dofdsgzno/image/upload/v1714453947/React-Router/cyber/ulkhvjqhaoo3gxlzfcul.webp",
      sub: "Is coding required for cybersecurity? If yes, how crucial is coding?...",
      user: "Tarun Singh",
      date: "25 Mar,2024",
      time: "4"
    },
    {
      id: 1,
      image: "https://res.cloudinary.com/dofdsgzno/image/upload/v1714453912/React-Router/cyber/lvlhimfeyam2hgixv71f.webp",
      sub: "The Cybersecurity Surge: 5 Must-Have Cybersecurity Certifications!",
      user: "Meghana D",
      date: "26 Mar,2024",
      time: "3"
    },
    {
      id: 2,
      image: "https://res.cloudinary.com/dofdsgzno/image/upload/v1714453935/React-Router/cyber/a4opvpvtag5z7fwkuznk.gif",
      sub: "What is Cybersecurity? Importance and its uses & the growing...",
      user: "Tushar Vinocha",
      date: "26 Mar,2024",
      time: "5"
    },
    {
      id: 3,
      image: "https://res.cloudinary.com/dofdsgzno/image/upload/v1714453909/React-Router/cyber/jp6nehseoxmagdrxvsme.webp",
      sub: "Non-Coding Jobs in Cybersecurity: A Comprehensive Guide",
      user: "Archana",
      date: "26 Mar,2024",
      time: "6"
    },
    {
      id: 4,
      image: "https://res.cloudinary.com/dofdsgzno/image/upload/v1714453909/React-Router/cyber/lkmwwvhppgvw8yvskbtl.webp",
      sub: "What Is Hacking? Types of Hacking & More",
      user: "Isha Sharma",
      date: "22 Mar,2024",
      time: "5"
    },
    {
      id: 5,
      image: "https://res.cloudinary.com/dofdsgzno/image/upload/v1714453912/React-Router/cyber/yfc92es4gmvdj5bqu1gg.webp",
      sub: "8 Different Types of Cybersecurity and Threats Involved",
      user: "Ramkumar",
      date: "25 Mar,2024",
      time: "3"
    },
    {
      id: 6,
      image: "https://res.cloudinary.com/dofdsgzno/image/upload/v1714453912/React-Router/cyber/egmhjn1ke3xf1i15z2gb.webp",
      sub: "The Ultimate Cybersecurity Roadmap for Beginners",
      user: "Isha Sharma",
      date: "22 Mar,2024",
      time: "5"
    },
    {
      id: 7,
      image: "https://res.cloudinary.com/dofdsgzno/image/upload/v1714453915/React-Router/cyber/m1zkvbmyxlckvau7xvvr.webp",
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