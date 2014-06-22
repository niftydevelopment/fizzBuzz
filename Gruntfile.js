module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
            },
            build: {
                src: "src/<%= pkg.name %>.js",
                dest: "build/<%= pkg.name %>.min.js"
            }
        },
        karma: {
            unit: {
                configFile: 'karma.conf.js'
            }
        }
    });

    // Load the plugin that provides the “uglify” task.
    grunt.loadNpmTasks("grunt-contrib-uglify");

    // Default task(s).
    grunt.registerTask("defult", ["uglify"]);

    grunt.loadNpmTasks("grunt-karma");
    // Default task(s).
    grunt.registerTask("tdd", ["karma"]);
}