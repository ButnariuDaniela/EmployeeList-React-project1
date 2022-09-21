import React from "react";
import PostItem from "../PostItem/PostItem";

class PostList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            posts: []
        };
    }

    componentDidMount(){    
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then((objectPosts) => {
          const postsFiltered = objectPosts.filter((post) => post.id < 6);
          return this.setState({posts:postsFiltered});
        })
    }

    render(){
        console.log(this.state)
       return(
        <div className='post-list'>
            {
                this.state.posts.map((post, index) => {
                    return <PostItem
                    title = {post.title}
                    body = {post.body}
                    key = {index} 
                    />
                })
            }
        </div>
       ) 
    }



}

export default PostList;