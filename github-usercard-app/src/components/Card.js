import React,{useState,useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Card = ({followingUser}) =>{
    useEffect(()=>{
        axios.get(`${followingUser.url}`).then(res=>{
            console.log(res.data)
            setUserInfo(res.data)
        })
    },[])
    
    const [userInfo,setUserInfo] = useState([]);

    return(
        <CardSf>
            <Avatar src={userInfo.avatar_url}/>
            
            <div>{userInfo.name}</div>
            <div>{userInfo.login}</div>
            <div>Bio: {userInfo.bio}</div>
            <div>Website: {userInfo.blog}</div>
            <div>Location: {userInfo.location}</div>
            <div>Followers: {userInfo.followers}</div>
            
        </CardSf>
    )
}

export default Card;

const CardSf = styled.div`
    box-shadow: 0px 5px 10px rgba(0,0,0,0.3);
    width:280px;
    margin:20px;
    padding:5px;
`;

const Avatar = styled.img`
    width:100%;
`;