const main_address = 'http://localhost:9000/api';
const extraConfig = {
    webSiteName: 'رهنما آزمایشی',
    api: {
        postsApi: `${main_address}/posts`,
        postLikeApi: `${main_address}/like`,
        postCommentApi: `${main_address}/comment`,
    },
    header: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'PUT, GET, POST, DELETE, OPTIONS'
    }
};

module.exports = extraConfig;