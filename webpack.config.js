module.exports = {
    entry: __dirname + '/src/ManageSystem.js',
	output: {
	    path: __dirname + '/build',
		filename: "bundle.js"
	},
	externals: {
	    'react': 'React'
	},
	devtool: 'eval-source-map',  //生成source file
	module: {
	    loaders: [
		  {
		    test: /\.js$/,
			exclude: /node_modules/,
			loader: 'babel',
			query: {
			  presets: ['es2015', 'react']
			}
		  }
		]
	}
};