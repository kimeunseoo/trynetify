import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from 'react-router-dom';
import "./style.css";

const Home = () => {
  const username = useParams()
 //State management
 const [repos, setRepos] = useState(null);
 
 const gitRepos = async () => {
   const response = await axios.get(
     "https://api.github.com/search/repositories?q=XXX"
   );
   console.log(response.data.items);
   setRepos(response.data.items);
   return response.data;
 };
 useEffect(() => {
   gitRepos().catch((e) => console.error(e));
 }, []);

 



 return (
   <div className="users-cont">
     {repos ? (
       repos.map((repo) => (
         <div className="user-card-cont" key={repo.id}>
           <img
             src={repo.owner.avatar_url}
             alt="userAvatar"
             className="user-avatar"
           />
           <span className="username">{repo.name}</span>

           <span className="repo-lang-span">Language: {repo.language}</span>
           <div>
             By: <button className="repo-owner">{repo.owner.login}</button>
           </div>

           <button>
             <button>View Repo</button>
           </button>
         </div>
       ))
     ) : (
       <h1>Loading...</h1>
     )}
     <Link to="/users" >go to users</Link>
   </div>
 );
};
export default Home