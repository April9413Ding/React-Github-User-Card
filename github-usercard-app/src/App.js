import React from 'react';
import axios from 'axios';
import './App.css';
import styled from 'styled-components';
import Card from './components/Card';

class App extends React.Component {
  state={
    avatarURL:[],
    userName:[],
    userID:[],
    userBio:[],
    userBlog:[],
    userLocation:[],
    userFollowingNum:[],
    followingUser:[],
  }
  componentDidMount(){
    const getUser = () => {
      axios.get('https://api.github.com/users/April9413Ding')
        .then(res => {
          this.setState({
          avatarURL:res.data.avatar_url,
          userName:res.data.name,
          userID:res.data.login,
          userBio:res.data.bio,
          userBlog:res.data.blog,
          userLocation:res.data.location,
          userFollowingNum:res.data.following,})
        })
        .catch(err => console.log('noooo'));
  };

    const getFollowing = () =>{
      axios.get('https://api.github.com/users/April9413Ding/following')
      .then(res =>{
        this.setState({
          ...this.state,
          followingUser:res.data,
        })
        console.log(this.state.followingUser);
      })
      .catch(err => console.log('noooo'));
    }


  getUser();
  getFollowing();


  }

  render(){
  return (
    <div className="App">
      <SectionWrapper>
        <img src={this.state.avatarURL}/>
        <HeaderTextWrapper>
          <h1>{this.state.userName}</h1>
          <h3>{this.state.userID}</h3>
          <p>Bio: {this.state.userBio}</p>
          <p>Website: {this.state.userBlog}</p>
          <p>Location: {this.state.userLocation}</p>
          <p>Following: {this.state.userFollowingNum}</p>
        </HeaderTextWrapper>
      </SectionWrapper>
      <h2>Following:</h2>
      <SectionWrapper>
      {this.state.followingUser.map((item,id)=>{
        return <Card key={id} followingUser={item}/>
      })}
      </SectionWrapper>
    </div>
  );
  }
}

export default App;

const SectionWrapper = styled.div`
  display:flex;
  flex-wrap:wrap;
  margin:40px 0;
`;

const HeaderTextWrapper = styled.div`
  padding:40px;
`;

