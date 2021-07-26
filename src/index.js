import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
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
    <section className="person-list">
      <h1>ข้อมูลบุคลากร</h1>
      <div class="row">
      <div class="column">
        <div class="card">
          <Person img="1" name="Tony" job="Programmer">
            <p>Skill : C# JAVA PHP</p>
          </Person>
        </div>
      </div>
      <div class="column">
        <div class="card">
          <Person img="11" name="Tom" job="Data Science">
            <p>Skill : PYTHON SQL R</p>
          </Person>
        </div>
      </div>
      <div class="column">
        <div class="card">
          <Person img="32" name="Nick" job="Desiner">
            <p>Skill : HTML CSS PHOTOSHOP</p>
          </Person>
        </div>
      </div>
      <div class="column">
        <div class="card">
          <Person img="36" name="John" job="Tester">
            <p>Skill : วิเคราะห์ทดสอบระบบ</p>
          </Person>
        </div>
      </div>
      </div>
      <div class="row">
      <div class="column">
        <div class="card">
          <Person img="34" name="Jojo" job="Desiner">
            <p>Skill : PHOTOSHOP INDESIGN</p>
          </Person>
        </div>
      </div>
      <div class="column">
        <div class="card">
          <Person img="17" name="Conan" job="Programmer">
            <p>Skill : HTML CSS JAVASCRIPT</p>
          </Person>
        </div>
      </div>
      <div class="column">
        <div class="card">
          <Person img="5" name="Loki" job="tester">
            <p>Skill : วิเคราะห์ทดสอบระบบ</p>
          </Person>
        </div>
      </div>
      <div class="column">
        <div class="card">
          <Person img="8" name="Vin" job="Data Science">
            <p>Skill : PYTHON SQL R</p>
          </Person>
        </div>
      </div>
      </div>
  </section>
  )
}
ReactDOM.render(<PeopleList />,document.getElementById('root'));

