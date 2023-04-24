import React,{useState} from "react";
import "./styles.css";
import ToDo,{testing} from './ToDo';
import About from './About';
import NavBar from './NavBar';
import Main from './Main';

export default function App(){
  let [page,setPage]=useState('Main')

  let theApp
  if        (page=='ToDo')  {theApp= <ToDo />
  } else if (page=="About") {theApp = <About />
  } else if (page=="Main")  {theApp = <Main />
  } 
  return(
    <>
      <NavBar setPage={setPage} />
      {theApp}
    </>

  )
}
