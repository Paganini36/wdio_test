process.env.http_proxy = ""
process.env.https_proxy = ""
process.env.HTTP_PROXY = ""
process.env.HTTPS_PROXY = ""

const register = require('@babel/register').default;

require('amd-loader');
require('coffeescript/register');
require("regenerator-runtime");

register({
  extensions: ['.coffee', '.js'],
  extends: './.babelrc',
  ignore: [],
});
