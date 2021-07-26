import React from 'react';
import ReactDOM from 'react-dom';

const Person=({img,name,job,children})=>{
  const url = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`
  return(
    <article>
      <img src={url} alt="people"/>
      <h2>Name : {name}</h2>
      <h3>Job : {job}</h3>
      {children}
    </article>
  )
}

const PeopleList=()=>{
  return(
  <section>
    <Person img="1" name="Tony" job="Programmer">
    <p>Skill : C# JAVA PHP</p>
    </Person>
    <Person img="17" name="John" job="Tester" >
    <p>Skill : วิเคราะห์และทดสอบระบบ</p>
    </Person>
    <Person img="22" name="Thor" job="Designer" >
    <p>Skill : Photoshop, 3D Model</p>
    </Person>
    <Person img="18" name="Nick" job="Designer">
    <p>Skill : วิเคราะห์ออกแบบระบบ</p>
    </Person>
  </section>
  )
}
ReactDOM.render(<PeopleList />,document.getElementById('root'));

