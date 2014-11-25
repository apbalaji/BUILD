'use strict';
module.exports = {
    dev: {
        files: [
            {
                expand: true,
                cwd: 'client',
                dest: 'dev',
                src: [
                    'index.html',
                    'welcome/*.html',
                    'assets/**/*',
                    '*.{ico,txt}',
                    '.htaccess'
                ]
            },
            {
                expand: true,
                dest: 'dev',
                src: [ 'node_modules/norman*/**/*.{html,png,gif,jpg,svg}' ]
            },


            // bootstrap css
            {
                expand: true,
                flatten: true,
                dest: 'dev/assets',
                src: [ 'node_modules/bootstrap/dist/css/bootstrap.css' ]
                // to copy .map file too; it's confusing in the dev-tools and not useful, as
                // bootstrap css should not be changed only overwritten
                // src: [ 'node_modules/bootstrap/dist/css/bootstrap.css*' ]
            },


            // font-awesome
            {
                expand: true,
                flatten: true,
                dest: 'dev/fonts',
                src: [ 'node_modules/font-awesome/fonts/*.*' ]
            },
            {
                expand: true,
                flatten: true,
                dest: 'dev/assets',
                src: [ 'node_modules/font-awesome/css/font-awesome.css' ]
            }


        ]
    },

    dist: {
        files: [
            {
                expand: true,
                dot: true,
                cwd: 'dev',
                dest: 'dist',
                src: '**/*'
            },
            {
                expand: true,
                cwd: 'server',
                dest: 'dist',
                src: [
                    '**/*.js'
                ]
            }

        ]
    }

};
