import React from "react"
 
export default function MainContent(){
    return(
    <div className="MainContent">
           <h1>Pijus Ran (Frust)</h1>
           <p className="skill">Beginner Developer</p>
           <div  className="Email">
               <button type="button" href="mailto:pijusranonis@gmail.com">✉ Email</button>
           </div>
           <h3 className="About">About me</h3>
           <p>Hi! I am a begginer developer with a particular interest in making websites with modern and simple design. I am always looking for new things to learn and try to use what my new-found knowledge to best practices.</p>
           <h3>Languages/Libraries</h3>
           <ul>
               <li>Python: 3+ Years</li>
               <li>Unity C#: 1+ Year</li>
               <li>Javascript: 2+ Months</li>
               <li>HTML: 2+ Months</li>
               <li>React.js: 1+ Months</li>
               <li>CSS: 1+ Months</li>
           </ul>
   </div>
   )
}