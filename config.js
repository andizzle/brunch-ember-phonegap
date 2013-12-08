var sysPath = require('path');

exports.config = {
    files: {
        javascripts: {
            joinTo: {
                'js/app.js': /^app/,
                'js/vendor.js': /^(vendor|bower_components)/
            },
            order: {
                before: ['vendor/scripts/console-polyfill.js', 'vendor/scripts/modernizr.js']
            }
        },
        stylesheets: {
            joinTo: {
                'css/app.css': /^(app|vendor|bower_components)/
            },
            order: {
                before: ['vendor/styles/normalize.css']
            }
        },
        templates: {
            precompile: true,
            root: 'templates',
            joinTo: {
                'js/app.js': /^app/
            }
        }
    }
};
