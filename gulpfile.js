var elixir = require('laravel-elixir');

var bower_path = 'vendor/bower_components';

var paths = {
    'adminlte'        : bower_path + '/AdminLTE',
    'ace'             : bower_path + '/ace-min-noconflict',
    'backbone'        : bower_path + '/backbone',
    'underscore'      : bower_path + '/underscore',
    'moment'          : bower_path + '/moment',
    'jquery'          : bower_path + '/jquery',
    'jquery_sortable' : bower_path + '/jquery-sortable',
    'bootstrap'       : bower_path + '/bootstrap-sass-official/assets',
    'fontawesome'     : bower_path + '/fontawesome',
    'socketio_client' : bower_path + '/socket.io-client',
    'ionicons'        : bower_path + '/ionicons',
    'html5shiv'       : bower_path + '/html5shiv',
    'respond'         : bower_path + '/respond',
    'cropper'         : bower_path + '/cropper',
    'toastr'          : bower_path + '/toastr',
};

elixir(function(mix) {
    mix.sass('vendor.scss', 'public/css/vendor.css', {
        includePaths: [
            paths.bootstrap   + '/stylesheets',
            paths.fontawesome + '/scss',
            paths.ionicons    + '/scss'
        ]
    })
    .styles([
        'public/css/vendor.css',
        paths.adminlte + '/dist/css/AdminLTE.css',
        paths.adminlte + '/dist/css/skins/_all-skins.css',
        paths.toastr   + '/toastr.css',
        paths.cropper  + '/dist/cropper.css',
    ], 'public/css/vendor.css', './')
    .styles([
        'resources/assets/css/app.css'
    ], 'public/css/app.css', './')
    .scripts([
        paths.html5shiv + '/dist/html5shiv.js',
        paths.respond   + '/dest/respond.src.js'
    ], 'public/js/ie.js', bower_path)
    .scripts([
        paths.jquery          + '/dist/jquery.js',
        paths.jquery_sortable + '/source/js/jquery-sortable.js',
        paths.underscore      + '/underscore.js',
        paths.moment          + '/moment.js',
        paths.bootstrap       + '/javascripts/bootstrap.js',
        paths.adminlte        + '/dist/js/app.js',
        paths.backbone        + '/backbone.js',
        paths.socketio_client + '/socket.io.js',
        paths.toastr          + '/toastr.js',
        paths.cropper         + '/dist/cropper.js',
        paths.ace             + '/ace.js',
        paths.ace             + '/mode-sh.js',
        paths.ace             + '/mode-php.js',
        paths.ace             + '/mode-yaml.js',
        paths.ace             + '/mode-ini.js'
    ], 'public/js/vendor.js', bower_path)
    .scripts([
        'app.js',
        'projects.js',
        'templates.js',
        'servers.js',
        'heartbeats.js',
        'notifications.js',
        'notifyEmails.js',
        'shareFiles.js',
        'projectFiles.js',
        'checkUrls.js',
        'variables.js',
        'deployment.js',
        'commands.js',
        'users.js',
        'groups.js',
        'uploader.js',
        'profile.js'
    ], 'public/js/app.js', 'resources/assets/js')
    .copy(paths.bootstrap   + '/fonts/bootstrap/**', 'public/fonts')
    .copy(paths.fontawesome + '/fonts/**',           'public/fonts')
    .copy(paths.ionicons    + '/fonts/**',           'public/fonts')
    .version([
        'public/css/app.css',
        'public/css/vendor.css',
        'public/js/app.js',
        'public/js/ie.js',
        'public/js/vendor.js'
    ])
    .copy('public/fonts', 'public/build/fonts');
});
