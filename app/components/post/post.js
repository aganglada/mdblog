import { h } from 'preact';
import Markup from 'preact-markup';

const Post = (props) => {
    return (
        <article>
            <Markup markup={props.html} />
        </article>
    );
};

export default Post;