import Router from 'preact-router';
import { h, render } from 'preact';

import Blog from 'views/blog/blog';

import Header from 'components/header/header';
import posts from 'services/posts/posts';

import styles from 'styles/themes/default.pcss';

const renderApp = () => {
    render((
        <article>
            <Header styles={styles} title="mdBlog" />
            <Router>
                <Blog styles={styles} posts={posts.getAll()} path="/"/>
            </Router>
        </article>
    ), document.getElementById('root'));
};

renderApp();

if (module.hot) {
    module.hot.accept('views/blog/blog', renderApp);
}

if (process.env.NODE_ENV === 'production') {
    const runtime = require('offline-plugin/runtime');

    runtime.install({
        onUpdateReady: () => {
            // Tells to new SW to take control immediately
            runtime.applyUpdate();
        },
        onUpdated: () => {
            // Reload the webpage to load into the new version
            window.location.reload();
        },
    });
}