var path = require('path');
path.normalize('/foo/bar//baz/abcdf/..');
// => '/foo/bar/baz/abcdf

path.join('/foo', 'bar', 'baz/abcdf', 'quux', '..');
//=> '/foo/bar/baz/abcdf'
