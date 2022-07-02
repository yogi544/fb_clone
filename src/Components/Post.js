import React from 'react';
import ThumbUpTwoToneIcon from '@mui/icons-material/ThumbUpTwoTone';
import InsertCommentTwoToneIcon from '@mui/icons-material/InsertCommentTwoTone';
import ShareTwoToneIcon from '@mui/icons-material/ShareTwoTone';
import './Post.css';

export default function Post() {
  return (
    <div className='Post'>
<div className='post-top'>
  <img src='https://www.w3schools.com/howto/img_avatar.png' className='profile-image' alt="avtar" />
  <div className='post-topinfo'/>
  <h3>Title</h3> 
  <div><p>Sponsored</p> </div>
   

</div>

<div className='post-details'>

Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
</div>
<div className='card-image'>
  <img src='https://media.istockphoto.com/photos/golden-retriever-picture-id506756303?k=20&m=506756303&s=612x612&w=0&h=Imx9y5Ds0TFLQVZVvvuHGKc89d35k4skU-N29A7wde0=' className='post-image' alt="post"/>
</div>




<div className = 'post-option'>

<div className = 'post-options'>  <ThumbUpTwoToneIcon /> Like    </div>
<div className = 'post-options'>   <InsertCommentTwoToneIcon /> Comment   </div>
<div className = 'post-options'>    <ShareTwoToneIcon /> Share     </div>




</div>

    </div>
  )
}
