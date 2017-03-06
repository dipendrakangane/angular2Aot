System.config({
    baseUrl: '/',
    paths: {
        'core:*': 'http://localhost:8080/angular2Aot/node_modules/*'
    }
});

System.config({
    transpiler: 'typescript',
    typescriptOptions: { emitDecoratorMetadata: true },

    meta: {
        '*': {
            deps: [ 'zone.js', 'reflect-metadata' ]
        }
    }
});

System.config({
    packageConfigPaths: [
        "core:@*/*/package.json"
    ],

    map: {
    	/*'app': 'angular2Aot/app',*/
    	'app': 'angular2Aot/app',
    	'rxjs': 'core:rxjs',
        'zone.js': 'core:zone.js/dist/zone.js',
        'reflect-metadata': 'core:reflect-metadata/Reflect.js',
        "crypto": "@empty",
        
    	'@angular/core': 'core:@angular/core',
        '@angular/compiler': 'core:@angular/compiler',
        '@angular/common': 'core:@angular/common',
        '@angular/forms': 'core:@angular/forms',
        '@angular/http': 'core:@angular/http',
        '@angular/router': 'core:@angular/router',
        '@angular/platform-browser': 'core:@angular/platform-browser',
        '@angular/platform-browser-dynamic': 'core:@angular/platform-browser-dynamic',
        
        'moment' : 'core:moment/moment.js',
        "@moment-timezone": 'core:moment-timezone/moment-timezone.js',
        
        'ng2-bootstrap/ng2-bootstrap': 'core:ng2-bootstrap/bundles/ng2-bootstrap.umd.min.js',
        "file-saver" : "https://cdnjs.cloudflare.com/ajax/libs/FileSaver.js/2014-11-29/FileSaver.min.js"
    },

    packages: {
    	app: {
            /*defaultExtension: 'js'*/
            defaultExtension: 'js'
        },
	    rxjs: {
	    	defaultExtension: 'js'
		}
    }
});
