module.exports = {
plugins: [
    new webpack.DefinePlugin({
      'process.env.id': JSON.stringify(process.env.id),
    })
],
}
