(function(global) {
  var map = {
    'app': 'app',
    'ui-router-ng2':              'node_modules/ui-router-ng2/_bundles/ui-router-ng2.js',
    'rxjs':                       'node_modules/rxjs',
    'angular2-in-memory-web-api': 'node_modules/angular2-in-memory-web-api',
    '@angular':                   'node_modules/@angular',
    //rxjs dependencies
    //'symbol-observable':'node_modules/rxjs/node_modules/symbol-observable',
    // @ngrx/router package
    //'@ngrx/router':                   'node_modules/@ngrx/router',
    // @ngrx/router dependencies
    //'path-to-regexp':                   'node_modules/@ngrx/router/node_modules/path-to-regexp',
    //'isarray':                   'node_modules/@ngrx/router/node_modules/path-to-regexp/node_modules/isarray',
    //'query-string':                   'node_modules/@ngrx/router/node_modules/query-string',
    //'strict-uri-encode':                   'node_modules/@ngrx/router/node_modules/query-string/node_modules/strict-uri-encode',
  };
  var packages = {
    'app':                        {  main: 'main.js',  defaultExtension: 'js' },
    'rxjs':                       { defaultExtension: 'js' },
    'angular2-in-memory-web-api': { defaultExtension: 'js' },
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
    
    //rxjs dependencies
    //'symbol-observable',
    // @ngrx/router package
    //'@ngrx/router',
    // @ngrx/router dependencies
    //'path-to-regexp',
    //'isarray',
    //'query-string',
    //'strict-uri-encode'
  ];
  packageNames.forEach(function(pkgName) {
    packages[pkgName] = { main: 'index.js', defaultExtension: 'js' };
  });

  var config = {
    map: map,
    packages: packages
  }

  System.config(config);

})(this);