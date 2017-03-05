import { h } from 'preact';

import Post from 'components/post/post';

const BlogList = ({ posts }) => (
    <section>{
        Object.keys(posts).map((post) => <Post file={post} html={posts[post]} />)
    }</section>
);

export default BlogList;
