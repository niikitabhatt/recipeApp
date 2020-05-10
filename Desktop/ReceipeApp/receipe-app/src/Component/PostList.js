import React, { Component } from 'react'
import axios from 'axios'

 class PostList extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              posts: [],
              errormsg: ''
         }
     }
     componentDidMount(){
        //  axious is promise based library
         axios.get('https://jsonplaceholder.typicode.com/post1s').then(response=> {
             console.log(response);
             this.setState({
                 posts: response.data,

             })
         }).catch(error => {
              console.log(error)
              this.setState({
                  errormsg: "error retriveing data"
              })
         })
         console.log('component did mount function')
     }
    render() {
        console.log('render method');
       const {posts} = this.state;
        return (
            <div>
                List of posts
                {
                    posts.length ? posts.map(post => {
                      return <div key= {post.id}>{post.title}</div>
                    }): "no post available"
                }
              {
                  <div>{this.state.errormsg}</div>
              }
            </div>
        )
    }
}

export default PostList
