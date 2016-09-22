'use strict';
var util   = require('util');
var path   = require('path');
var yeoman = require('yeoman-generator');
var yosay  = require('yosay');
var chalk  = require('chalk');
var mkdirp = require('mkdirp');

var dhBoilerplateGenerator = yeoman.generators.Base.extend({

    init: function () {
        this.pkg = require('../package.json');
    },

    askFor: function () {
        var done = this.async();

        // Have Yeoman greet the user.
        this.log(yosay(
            'Welcome to the impressive ' + chalk.red('dhBoilerplate') + ' generator natively baked in Australia!'
        ));

        var welcome =
'\n ————————————————————————————————————————————————————————————————————————————————— '+
'\n            _____     _               __  __       _         _  '+
'\n           / ____|   | |             |  \/  |     | |       | | '+
'\n          | |  __  __| | __ _ _   _  | \  / | __ _| |_ ___  | | '+
'\n          | | |_ |/ _` |/ _` | | | | | |\/| |/ _` | __/ _ \ | | '+
'\n          | |__| | (_| | (_| | |_| | | |  | | (_| | ||  __/ |_| '+
'\n           \_____|\__,_|\__,_|\__, | |_|  |_|\__,_|\__\___| (_) '+
'\n                               __/ |                            '+
'\n                              |___/                             '+
'\n             This is a starting point for most of my work. '+
'\n             --------------------------------------- '+
'\n             Author   :   Jinzhe Li '+
'\n             Email    :   jinjinwudi@gmail.com '
'\n ————————————————————————————————————————————————————————————————————————————————— ';

        console.log(welcome);

        return this.prompt([
            {
                type:    'input',
                name:    'projectName',
                message: 'Please give your project a name (without Spaces)',
                default: 'gdaymate'
            }, {
                type:    'input',
                name:    'projectDescription',
                message: 'Short description of the Project',
                default: 'undefined'
            }, {
                type:    'input',
                name:    'proxyUrl',
                message: 'Proxy URL',
                default: false
            }, {
                type: 'confirm',
                name: 'projectIECompatible',
                message: 'IE8 compatibility needed?',
                default: false
            },{
                type:    'list',
                name:    'projectUsage',
                message: 'Which purpose does this Project have? Choose the appropriate option',
                choices: [
                    "Prototyping",
                    // "WordPress",
                    // "Craft CMS"
                ]
            },{
                when: function(answers) {
                    return answers.projectUsage === 'Craft CMS';
                },
                type: 'confirm',
                name: 'craftHearty',
                message: 'Do you want to use Hearty Config?',
                default: true
            },{
                when: function(answers) {
                    return answers.projectUsage === 'Craft CMS';
                },
                type: 'confirm',
                name: 'craftImager',
                message: 'Do you want to use Imager?',
                default: true
            },{
                when: function(answers) {
                    return answers.craftHearty === true;
                },
                type: 'confirm',
                name: 'craftMultilang',
                message: 'Do you want to use Multilang Config?',
                default: false
            },{
                type: 'confirm',
                name: 'projectjQuery',
                message: 'Include new (3.x.x => y) or Old (1.11.3 => n) jQuery Version?',
                default: true
            }, {
                type: 'confirm',
                name: 'projectVue',
                message: 'Do you want to use Vue.js?',
                default: false
            }, {
                type:    'input',
                name:    'projectVersion',
                message: 'Project Version Number',
                default: '0.0.1'
            }, {
                type:    'input',
                name:    'projectAuthor',
                message: 'Project Author or company',
                default: 'undefined'
            }, {
                type:    'input',
                name:    'projectMail',
                message: 'Mailadress of the author',
                default: 'undefined'
            }, {
                type:    'input',
                name:    'projectUrl',
                message: 'Author URL',
                default: 'http://...'
            }, {
                type:    'input',
                name:    'projectRepo',
                message: 'Git Repo URL',
                default: 'http://...'
            }
        ]).then(function(answers) {
            function checkAnswer(answer) {
                if(answer) {
                    return answer
                } else {
                    return false
                }
            }
            this.projectName          = answers.projectName;
            this.projectDescription   = answers.projectDescription;
            this.proxyUrl             = answers.proxyUrl;
            this.projectIECompatible  = answers.projectIECompatible;
            this.projectjQuery        = answers.projectjQuery;
            this.projectVue           = answers.projectVue;
            this.projectUsage         = answers.projectUsage;
            this.craftHearty          = checkAnswer(answers.craftHearty);
            this.craftImager          = checkAnswer(answers.craftImager);
            this.craftMultilang       = checkAnswer(answers.craftMultilang);
            this.projectVersion       = answers.projectVersion;
            this.projectAuthor        = answers.projectAuthor;
            this.projectMail          = answers.projectMail;
            this.projectUrl           = answers.projectUrl;
            this.projectRepo          = answers.projectRepo;
            done();
        }.bind(this));

    },

    app: function () {

        // move src folder
        this.directory('___src/_system/',   '___src/_system/');
        this.directory('___src/assets/',    '___src/assets/');
        this.directory('___src/gulp/',      './gulp/');

        if ( this.projectUsage === 'Prototyping' ) {
            this.directory('___src/templates/prototyping/', '___src/templates/');
        }

        if ( this.projectUsage === 'WordPress' ) {
            this.directory('___src/templates/wordpress/', '___src/templates/');
        }

        if ( this.projectUsage === 'Craft CMS' ) {
            this.directory('___src/templates/craftcms/', '___src/templates/');
        }

        if(this.craftHearty) {
            this.directory('___src/_craft/hearty/config/', '___dist/config');

            this.fs.copyTpl(
                this.templatePath('___src/_craft/imager/imager.php'),
                this.destinationPath('___dist/config/imager.php')
            );

            this.directory('___src/_craft/plugins/', '___dist/plugins');

        } else if ( this.projectUsage === 'Craft CMS' ) {
            this.directory('___src/_craft/plugins/', '___dist/craft/plugins');
        }

        if(this.craftMultilang) {
            this.directory('___src/_craft/translations/', '___dist/translations');
        }

    },

    projectfiles: function () {
        var params = {
            projectName:          this.projectName,
            projectDescription:   this.projectDescription,
            proxyUrl:             this.proxyUrl,
            projectIECompatible:  this.projectIECompatible,
            projectjQuery:        this.projectjQuery,
            projectVue:           this.projectVue,
            projectUsage:         this.projectUsage,
            craftHearty:          this.craftHearty,
            craftImager:          this.craftImager,
            craftMultilang:       this.craftMultilang,
            projectVersion:       this.projectVersion,
            projectAuthor:        this.projectAuthor,
            projectMail:          this.projectMail,
            projectUrl:           this.projectUrl,
            projectRepo:          this.projectRepo
        }


        this.fs.copyTpl(
            this.templatePath('_package.json'),
            this.destinationPath('package.json'),
            params
        );

        this.fs.copyTpl(
            this.templatePath('_config.json'),
            this.destinationPath('config.json'),
            params
        );

        this.fs.copyTpl(
            this.templatePath('_gulpfile.babel.js'),
            this.destinationPath('gulpfile.babel.js'),
            params
        );

        this.fs.copyTpl(
            this.templatePath('_readme.md'),
            this.destinationPath('readme.md'),
            params
        );

        this.fs.copyTpl(
            this.templatePath('_gitignore'),
            this.destinationPath('.gitignore'),
            params
        );

        this.fs.copyTpl(
            this.templatePath('editorconfig'),
            this.destinationPath('.editorconfig'),
            params
        );

        this.fs.copyTpl(
            this.templatePath('jshintrc'),
            this.destinationPath('.jshintrc'),
            params
        );

        this.fs.copyTpl(
            this.templatePath('eslintrc'),
            this.destinationPath('.eslintrc'),
            params
        );

        this.fs.copyTpl(
            this.templatePath('babelrc'),
            this.destinationPath('.babelrc'),
            params
        );
    },

    install: function () {
        this.log('Install NPM Modules.');
        this.log('Give me a moment to do that…');
        this.installDependencies({
            bower: false,
            npm: true
        });
    }

});

module.exports = dhBoilerplateGenerator;
