import React from 'react';
import ReactDOM from 'react-dom';

const Person=({img,name,job})=>{
  const url = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`
  return(
    <article>
      <img src={url} alt="people"/>
      <h2>Name : {name}</h2>
      <h3>Job : {job}</h3>
    </article>
  )
}

const PeopleList=()=>{
  return(
  <section>
    <Person img="1" name="Tony" job="Programmer"/>
    <Person img="17" name="John" job="Tester" />
    <Person img="22" name="Thor" job="Designer" />
    <Person img="5" name="Chris" job="Programmer" />
  </section>
  )
}
ReactDOM.render(<PeopleList />,document.getElementById('root'));

