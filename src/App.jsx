import React from 'react'
import Header from "./components/Header";
import ShoeDetail from "./components/ShoeDetail";
import { Card } from './components/Card';
import { SHOE_LIST } from './Constants';
import NewArrivalSection from './components/NewArrivalSection';



export default function App() {
  return (
    <div className="p-10 animate-fadeIn">
      <Header/> 
       <ShoeDetail/>
       <NewArrivalSection items={SHOE_LIST}/>
  
       
     

    </div>
    
  )
}