(function(global) {
  var map = {
    'app': 'app',
    'rxjs':                       'node_modules/rxjs',
    '@angular':                   'node_modules/@angular',
    '@ngrx/router':                   'node_modules/@ngrx/router',
    'path-to-regexp':                   'node_modules/@ngrx/router/node_modules/path-to-regexp',
    'isarray':                   'node_modules/@ngrx/router/node_modules/path-to-regexp/node_modules/isarray',
    'query-string':                   'node_modules/@ngrx/router/node_modules/query-string',
    'strict-uri-encode':                   'node_modules/@ngrx/router/node_modules/query-string/node_modules/strict-uri-encode',
    
    'symbol-observable':'node_modules/rxjs/node_modules/symbol-observable'
  };
  var packages = {
    'app':                        { defaultExtension: 'js' },
    'rxjs':                       { defaultExtension: 'js' }
  };

  var packageNames = [
    '@angular/common',
    '@angular/compiler',
    '@angular/core',
    '@angular/http',
    '@angular/platform-browser',
    '@angular/platform-browser-dynamic',
    '@angular/router',
    '@angular/router-deprecated',
    '@angular/testing',
    '@angular/upgrade',
    
    // @ngrx/router package
    '@ngrx/router',
    // @ngrx/router dependencies
    'path-to-regexp',
    'isarray',
    'query-string',
    'strict-uri-encode',
    
    'symbol-observable'
  ];
  packageNames.forEach(function(pkgName) {
    packages[pkgName] = { main: 'index.js', defaultExtension: 'js' };
  });

  var config = {
    map: map,
    packages: packages
  }
  if (global.filterSystemConfig) { global.filterSystemConfig(config); }

  System.config(config);

})(this);