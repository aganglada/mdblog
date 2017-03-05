let collection = {};

function posts() {

    require.context('posts', false, /^\.\/.*\.md/).keys().map((post) => {
        const postFile = post.slice(2, post.length);
        collection = Object.assign({}, collection, { [postFile]: require(`posts/${postFile}`) });
    });

    function getAll() {
        return collection;
    }

    return {
        getAll
    };
}

export default posts();