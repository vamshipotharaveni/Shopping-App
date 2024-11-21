import {useState,useEffect} from 'react';

export default function Eventcomponent(){
    const[name,setName]=useState();
    function assignName(e){
        setName(e.target.value)
    }
    return(
        <div className='container-fluid'>
            <dl>
                <dt>Enter your name</dt>
                <dd><input type="text" value={name} onChange={assignName} placeholder='Enter your name'/></dd>
                <dt>Hello {name}!</dt>

            </dl>
        </div>
    )
}