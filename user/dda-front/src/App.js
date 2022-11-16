import React, { useState, useEffect } from 'react';
import {BrowserRouter} from 'react-router-dom';
import AppRoute from './route/AppRoute';
import PropagateLoader from 'react-spinners/PropagateLoader';

function App() {

  const container = document.querySelector(".container");

  const anahuacpics = [
    {name: "logo", Image: "/assets/images/DDA-72x72.png"},
    {name: "login", Image: "/assets/images/login.png"},
    {name: "producto", Image: "/assets/images/producto.png"},
    {name: "register-pic", Image: "/assets/images/register-pic.png"}
  ];

  const welcome = () => {
    let salida ="";

    anahuacpics.forEach(
      ({name,Image}) => (
        (salida += `
        <div class="card">
          <img class="card-image" src=${Image}/>
          <h4 class= "card-name" > ${name} <h4>
          </div>
          `)
      )
    )
    container.innerHTML = salida;
  };

  document.addEventListener("DOMContentLoaded", welcome);

  if ("serviceWorker" in navigator) {
    window.addEventListener("load", function(){
      this.navigator.serviceWorker
      .register("/serviceWorker.js")
      .then(respond => console.log("Registrado"))
      .catch(error => console.log ("Hubo un error", error));
    });
  }
 
    const [loading, setLoading] = useState(false);

    useEffect(() => {
      setLoading(true)
      setTimeout(()=>{
        setLoading(false)
      }, 8000)
    }, [])

    return (
      <div className='App'>
        {
          loading ? (
            <PropagateLoader
            size={30}
            color={"#04494d"}
            loading={loading}
          />
          )
          
          :
            (
              <BrowserRouter>
            <AppRoute/>
        </BrowserRouter>
            )
        }
      </div>
        
    )
  }


export default App
