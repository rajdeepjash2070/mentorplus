import React from 'react'
import "../App.css"
import { useState,useEffect } from 'react'
import axios from 'axios';


const Home = () => {
    const [course,setCourse]=useState([]);
 useEffect((e) => {
axios.get('http://demo3755793.mockable.io/plans').then(res=>{
    setCourse(res.data)
}).catch(err=>console.log(err))
        
 },[]);


     

 const Timer=()=>{
  var countDownDate = new Date("Apr 27, 2022 10:37:25").getTime();
  var x = setInterval(function() {
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;


 
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

 
  document.getElementById("demo").innerHTML = hours + "h "
  + minutes + "m " + seconds + "s ";
 
 
  if (distance < 0) {
    clearInterval(x);
    document.getElementsById("demo").innerHTML = "OFFER Closed Weekend Plan Booked 100%";
  }
}, 1000);

}
Timer();
  return (
    <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><img src='https://mentorplus.co.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FLogo.0db42e3e.svg&w=384&q=75'/></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link disabled" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#">Plan & Pricing</a>
        </li>
        <li class="nav-item">
        <a class="nav-link disabled" aria-current="page" href="#">FAQ's</a>
      </li>
      <li class="nav-item">
      <a class="nav-link disabled" aria-current="page" href="#">Contact us</a>
    </li>
    <li class="nav-item">
          <button class="btn btn-outline-primary login" type="submit">Login</button>
      </li>
      <li class="nav-item">
        <button class="btn btn-primary  signup" type="submit">Sign Up</button>
      </li>
      </ul>
   
    </div>
  </div>
</nav>
    <h2 className='text-center h2-heading'>Buy a Plan and Be Interview Ready</h2>
    <div>
    
    {
        course && course.map((plan,i)=>(
         
            <div className="card-container1" key={i}>
    <div className="card1" style={{backgroundColor: `${plan.backgroundColor}`}}>
      <div class="card-body">
      <p><img src={plan.thumbnail} class="img-fluid" alt="..."/></p>
      <div className='part1' id="demo">
        
       <h5 className='save-heading text-center'>FLAT {plan.save} OFF</h5>

        </div>
       
       <p className='planID' style={{backgroundColor:`${plan.offerColor}`}}>{plan.planId}</p>
       <div className='heading text-center'>
      {plan.heading}</div>
    
      <p className='content '> <i class="fa-solid fa-check"></i>{plan.content[0]}</p>
      <p className='content '><i class="fa-solid fa-check"></i>{plan.content[1]}</p>
      <p className='content '><i class="fa-solid fa-check"></i>{plan.content[2]}</p>
      <p className='content '><i class="fa-solid fa-check"></i>{plan.content[3]}</p>
      <p className='content '><i class="fa-solid fa-check"></i>{plan.content[4]}</p>
      <div className='text-center suit'>{plan.suit}</div>
   
     
      <div className='text-center save'>Flat {plan.save} OFF for being referred by{plan.referral}</div>
     <div className='border'></div>
      <div className='price'><i class="fa-solid fa-indian-rupee-sign"></i><div className='oprice'>{plan.originalPrice} </div><div className='save3'>Save{plan.save} </div><div className='prevprice'>{plan.price}</div><div className='border2'></div></div>
  
      </div>
      <button type="button" class="btn btn-primary">Book Now</button>
    </div>

  
            </div>
        ))
    }
    </div>
    </div>
  )
}

export default Home
