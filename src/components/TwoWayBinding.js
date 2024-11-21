import { useState } from "react";

export default function TwoWayBinding(){
    
    const[info,setinfo]= useState({Name:" ",surname:" ",state:" ",state:false})
    const[infosecond,setsecond]= useState({Name:" ",surname:" ",state:" ",state:false})

    function forName(e){
        setinfo(
            {
                Name:e.target.value,
                surname:info.surname,
                state:info.state,
                stock:info.stock
            }
        )
    }
    function forsurname(e){
        setinfo(
            {
                Name:info.Name,
                surname:e.target.value,
                state:info.state,
                stock:info.stock
            }
        )
    }
    function forstate(e){
        setinfo(
            {
                Name:info.Name,
                surname:info.surname,
                state:e.target.value,
                stock:info.stock
            }
        )
    }
    function forstock(e){
        setinfo(
            {
                Name:info.Name,
                surname:info.surname,
                state:info.state,
                stock:e.target.checked
            }
        )
    }
    function forAll(){
        setsecond(info)
    }

    return(
        <div className=" container-fluid d-flex">
        <div className="m-4">
            <dl>
                <dt>Name</dt>
                <dd><input  type="text" className="form-control" onChange={forName}/></dd>
                <dt>Surname</dt>
                <dd><input type="text" className="form-control" onChange={forsurname}/></dd>
                <dt>Select state</dt>
                <select onChange={forstate} className="form-control">
                    <option>Select</option>
                    <option>Teangana</option>
                    <option>Andrapradesh</option>
                    <option>Banglore</option>
                </select>
                <dt>stock
                </dt>
                <dd className="form-switch">
                <input type="checkbox" onChange={forstock} className="form-check-input"/></dd>
            </dl>
            <btn className="btn btn-primary w-100" onClick={forAll}>Register</btn>
        </div>
        <div className="m-4">
            <dl>
                <dt>Name</dt>
                <dd>{infosecond.Name}</dd>
                <dt>Surname</dt>
                <dd>{infosecond.surname}</dd>
                <dt>City</dt>
                <dd>{infosecond.state}</dd>
                <dt>Stock</dt>
                <dd>{(infosecond.stock===true)?"Available":"out of stock"}</dd>
            </dl>

        </div>

        </div>
    )
}
