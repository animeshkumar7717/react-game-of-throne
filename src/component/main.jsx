import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";


// 'https://thronesapi.com/api/v2/Characters'
const Main = () => {
    const [CharacterData, setCharacter] = useState([]);

    useEffect(()=> {
        getCharaterData();
    }, [])

    const getCharaterData = async() => {
        const api = await fetch('https://thronesapi.com/api/v2/Characters');
        const data = await api.json();
        setCharacter(data);
    }

    return (
        <div className="main">
            <h1 style={{textTransform: "uppercase", color:"white"}}>Popular character</h1>
            <div className="row">
            {
               CharacterData.map((items)=>(
                <div className="col-lg-4 col-md-6">
                <NavLink to={`${items.id}`} style={{textDecoration:"none", color: "white"}}>
                    <div className="projectCard">
                    <img src={items.imageUrl} alt='' />
                    <div className="info">
                        <div className="text">
                            <h2>{items.title}</h2>
                            <p>{items.fullName}</p>
                        </div>
                    </div>
                </div>
                </NavLink>
                </div>
               ))
            }
        </div>
        </div>
            
    )
}

export default Main;