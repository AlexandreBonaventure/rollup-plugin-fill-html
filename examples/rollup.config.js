// import html from 'rollup-plugin-fill-html';
import html from '../src/index';

export default {
  input: 'src/index.js',
  output: {
    file: 'bug/dist/simple/bundle.js',
    format: 'iife',
  },
  plugins: [
    html({
      template: 'src/index.html',
      filename: 'index.html'
    })
  ]
};
