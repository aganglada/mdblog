import Router from 'preact-router';
import { h, render } from 'preact';

import Blog from 'views/blog/blog';

import Header from 'components/header/header';
import posts from 'services/posts/posts';

import styles from 'styles/themes/default.pcss';

render((
    <article>
        <Header styles={styles} title="mdBlog" />
        <Router>
            <Blog styles={styles} posts={posts.getAll()} path="/"/>
        </Router>
    </article>
), document.getElementById('root'));