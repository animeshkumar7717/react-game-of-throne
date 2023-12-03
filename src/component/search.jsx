// import { House, Person } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Search = () => {
    const params = useParams();

    const [searchedCharacter, setSearchedCharacter] = useState([]);

    useEffect(()=> {
        getSearched(params.search);
    }, [params.search])

    const getSearched = async(name) => {
        const api = await fetch(`https://thronesapi.com/api/v2/Characters/${name}`);
        const data = await api.json();
        setSearchedCharacter(data);
    }

// https://api.gameofthronesquotes.xyz/v1/author/tyrion/2


    const [quotes, setQuotes] = useState([]);

    useEffect(()=> {
        getQuotes(searchedCharacter.firstName);
    }, [searchedCharacter.firstName])

    const getQuotes = async(name) => {
        const url = `https://api.gameofthronesquotes.xyz/v1/author/${name}/2`;
        const input = url.toLowerCase();
        const api = await fetch(input);
        const data = await api.json();
        setQuotes(data);
    }

    // return (
    //     <div className="search">
    //         <div className="search-details">
    //             <img src={searchedCharacter.imageUrl} alt="" />
    //         </div>
    //         <div className="search-details">
    //             <h4>{searchedCharacter.fullName}</h4>
    //             <h5>{searchedCharacter.title}</h5>
    //             <p>{searchedCharacter.family}</p>
    //         {
    //             quotes.map((items)=> (
    //                 <div>
    //                     {items.sentence}
    //                 </div>
    //             ))
    //         }
    //         </div>

    //     </div>
    // )

    return (
        <div className='search'>
          <div className='search-detail'>
            <img src={searchedCharacter.imageUrl} alt="" />
          </div>
          <div>
          
            <h4>  {searchedCharacter.fullName}</h4>
              <h5>{searchedCharacter.title}</h5>
              <p>  {searchedCharacter.family}</p>
              {quotes.map((item) => {
                return (  <p>{item.sentence}</p> )})
              }
            </div>
          </div>
        )
}

export default Search;
