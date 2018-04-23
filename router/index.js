
const crypto = require('crypto');
const request = require('request');
const Router = require('koa-router');
const send = require('koa-send');

const router = new Router();
// let charts = require("./charts");

module.exports = (app) => {
    router
        .get('/', async (ctx, next) => {

            ctx.redirect("http://blog.hanggi.me");
            console.log("/")
            // await ctx.render('home', {
            //     name: 'think php build '
            // });
            // ctx.body = 'think ph build';
        })
        .get('/test', async (ctx, next) => {
            let query = JSON.stringify(ctx.query);
            console.log(typeof(query));
            ctx.body = `This is the test page GET:${query}`;
        })

        .get('/adm*', async (ctx, next) => {
            console.log(__dirname);
            await send(ctx, '/public/d/index.html');
        })
        .get('/qwe', async (ctx, next) => {

            await ctx.render('home', {
                name: 'koa2 '
            });
        });

    app.use(router.routes());
    app.use(router.allowedMethods());
}


function getRequest(url) {
    return new Promise(function (resolve, reject) {
        request(url, function (error, res, body) {
            if (!error && res.statusCode == 200) {
                resolve(body);
            } else {
                reject(error);
            }
        });
    });
}
function postRequest(options) {
    return new Promise(function (resolve, reject) {
        request.post(options, function (error, res, body) {
            if (!error && res.statusCode == 200) {
                resolve(body);
            } else {
                reject(error);
            }
        });
    });
}

function dateDisplayed(timestamp) {
    let date = new Date(timestamp);
    return (date.getMonth() + 1 + '/' + date.getDate() + '/' + date.getFullYear());
}