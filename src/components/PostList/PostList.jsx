import React from "react";
import PostItem from "../PostItem/PostItem";
import post1 from '../../assets/images/p1.jpg';
import post2 from '../../assets/images/p2.jpg';
import post3 from '../../assets/images/p3.jpg';
import post4 from '../../assets/images/p4.jpg';
import post5 from '../../assets/images/p5.jpg';
import post6 from '../../assets/images/p6.jpg';

class PostList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            posts: [],
            photos: [post1, post2, post3, post4, post5, post6]
        };
    }

    componentDidMount(){    
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then((objectPosts) => {
          const postsFiltered = objectPosts.filter((post) => post.id < 7);
          return this.setState({posts:postsFiltered});
        })
    }

    render(){
        console.log(this.state)
       return(
        <div className='row m-0 d-flex'>
            {
                this.state.posts.map((post, index) => {
                    return <PostItem
                    title = {post.title}
                    body = {post.body}
                    photo = {this.state.photos[index]}
                    key = {index} 
                    />
                })
            }
        </div>
       ) 
    }
}

export default PostList;