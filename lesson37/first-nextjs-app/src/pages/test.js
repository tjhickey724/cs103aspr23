import {useState,useEffect} from 'react';

export default function Test(){
    const [time,setTime]=useState('loading....')

    useEffect(() => {
        setTime(JSON.stringify(new Date()))
    })

    return (
        <>
          <h1> This is a test page! </h1>
          current time is {time}
        </>
    )
}