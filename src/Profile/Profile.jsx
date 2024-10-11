// import React from 'react'
// import style from './Profile.module.css'

// export const Profile = ({image,name,job,text}) => {
//   return (
//    <section className={style.main}>
//        <div className={style.review}>
//         <div className={style.image}>
//             <img src={image} className={style.image}/>
//         </div>
//         <div className={style.name}>
//             <h2>{name}</h2>
//         </div>
//         <div className={style.title}>
//             <p>{job}</p>
//         </div>
//        <div className={style.info}>
//             <p>{text}</p>
//        </div>
//     </div>
//    </section>
//   )
// }


import React from "react";
import style from "./Profile.module.css";
const Profile = ({ person }) => {
  const { image, name, job, text } = person;

  return (
    <div className="card">
      <img src={image} alt={name} className="person-img" />
      <h2>{name}</h2>
      <h4>{job}</h4>
      <p>{text}</p>
    </div>
  );
};

export default Profile;
