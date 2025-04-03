// webpack.config.js
module.exports = {
  entry: './index.js',
  plugins: [
    {
      apply(compiler) {
        compiler.hooks.emit.tap('DebugPlugin', (compilation) => {
          debugger; // 在此处触发断点
          console.log(compilation.assets);
        });
      }
    }
  ]
};
