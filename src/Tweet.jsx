import React from 'react';

var icon = {
  width: "70px",
  float: "left",
  padding: "5px",
  margin: "5px",
  borderRadius:"15%"
}

var tweetBox = {
  padding: "5px",
}

var tweet = {
  padding: "5px",
  color: "white"
}

function Tweet(props){
  return(
    <div style={tweetBox}>
      <p style={tweet}><img style={icon} alt="profile-picture" src="https://png.pngtree.com/png-vector/20191110/ourlarge/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg"></img><br/>{props.name}<br/>{props.content}</p>
    </div>
  );
}

export default Tweet;
