import React from 'react';
import PostItem from './PostItem';

class PostList extends React.Component {
    render() {
        return (
            <div>
                {
                    this.props.posts.map((post, index) => {
                        return (
                        <PostItem 
                        key={index}
                        title={post.title}
                        body={post.body} 
                        />
                        )
                    })
                }
            </div>
        )
    }
}

export default PostList;