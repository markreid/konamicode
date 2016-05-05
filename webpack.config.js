module.exports = {
    entry: './src/konamicode.js',
    output: {
        libraryTarget: 'var',
        library: 'KonamiCode',
        filename: './dist/konamicode.js'
    },
    module: {
        loaders: [
            {
              test: /\.jsx?$/,
              loader: 'babel', // 'babel-loader' is also a legal name to reference
              query: {
                presets: ['es2015']
              }
            }
          ]
    }

}
