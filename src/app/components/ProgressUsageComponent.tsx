"use client"


import React from 'react'
import { useEffect, useState } from 'react';
import Progress from './Progress';

export default function ProgressUsage(){

    const [progress,setProgress]=useState(0);
  

  useEffect(()=>{
    if(progress<100){
     setTimeout(()=>{
      const p=progress+1;
      setProgress(p);
      console.log(p);
     },100) 
    }

    
  },[progress]);
  return (
    <Progress value={progress} />
  )

}