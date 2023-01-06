const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');


const glob = require('glob');
const list = {};

async function makeList(dirPath, list) {
    const files = glob.sync(`${dirPath}/**/index.js`);
    console.log('files: ', files);
    // files:  [ 'components/lib/card/index.js', 'components/lib/demo/index.js' ]
    for (let file of files) {
        const component = file.split(/[/.]/)[2]
        console.log('component: ', component);
        list[component] = `./${file}`
    }
    console.log('list: ', list);
}

// files:  [
//   'components/lib/card/index.js',
//   'components/lib/demo/index.js',
//   'components/lib/index.js'
// ]
// component:  card
// component:  demo
// component:  index
// list:  {
//   card: './components/lib/card/index.js',
//   demo: './components/lib/demo/index.js',
//   index: './components/lib/index.js'
// }

makeList('components/lib', list)
module.exports = {
    entry: list,
    output: {
        filename: '[name].umd.js',
        path: path.resolve(__dirname, 'dist'),
        library: 'mui',
        libraryTarget: 'umd'
    },
    plugins: [
        new VueLoaderPlugin()
    ],
    module: {
        rules: [{
          test: /\.vue$/,
          use: [{
              loader: 'vue-loader'
          }]
        }]
    }
}