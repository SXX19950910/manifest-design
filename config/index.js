/**
 * @name: index
 * @author: shixiaoxi
 * @date: 2021-04-02 14:40
 * @description：index
 * @update: 2021-04-02 14:40
 */

const env = process.env

module.exports = {
    router: {
        mode: env.VUE_APP_ROUTE_MODE,
        base: env.VUE_APP_ROUTE_BASE
    },
    isDev: env.ENV === 'dev',
    indexPath: env.VUE_APP_INDEX_PATH,
    publicPath: env.VUE_APP_PUBLIC_PATH
}
