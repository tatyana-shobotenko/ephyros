import makeWebpackConfig from './make-webpack-config';
export default makeWebpackConfig({
  devServer: true,
  devtool: 'inline-source-map', // eval
  debug: true,
});
