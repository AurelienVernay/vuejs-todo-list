module.exports = {
    publicPath:
        process.env.NODE_ENV === 'production' ? '/vuejs-todo-list/' : '/',
    outputDir: 'docs',
};
