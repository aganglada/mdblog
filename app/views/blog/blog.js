import { h, Component } from 'preact';

import PostList from 'components/post-list/post-list';

import styles from './blog.pcss';

class Home extends Component {
    render() {
        return (
            <main>
                <PostList posts={this.props.posts}></PostList>
            </main>
        );
    }
}

export default Home;
