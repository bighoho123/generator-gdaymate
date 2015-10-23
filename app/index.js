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
      'Welcome to the impressive ' + chalk.red('dhBoilerplate') + ' generator!'
    ));

    var welcome =
      '\n                                                                                   '+
      '\n ================================================================================= '+
      '\n                                                                                   '+
      '\n      _  _      ___              _                        _           _            '+
      '\n     ( )( )    (  _ \         _ (_ )                     (_ )        ( )_          '+
      '\n    _| || |__  | (_) )   _   (_) | |    __   _ __  _ _    | |    _ _ | ,_)   __    '+
      '\n  / _  ||  _  \|  _ <  / _ \ | | | |  / __ \(  __)(  _ \  | |  / _  )| |   / __ \  '+
      '\n ( (_| || | | || (_) )( (_) )| | | | (  ___/| |   | (_) ) | | ( (_| || |_ (  ___/  '+
      '\n  \__ _)(_) (_)(____/  \___/ (_)(___) \____)(_)   |  __/ (___) \__ _) \__) \____)  '+
      '\n                                                  | |                              '+
      '\n                                                  (_)                              '+
      '\n                                                                                   '+
      '\n ================================================================================= '+
      '\n                                                                                   '+
      '\n Welcome! Nice that you found and use me now. Have Fun!                            '+
      '\n Author:  David Hellmann                                                           '+
      '\n Website: http://davidhellmann.com                                                 '+
      '\n Github:  https://github.com/davidhellmann/generator-dhBoilerplate                 '+
      '\n                                                                                   ';

    console.log(welcome);

    var prompts = [
      {
        type:    'input',
        name:    'projectName',
        message: 'Please give your project a name (without Spaces)',
        default: 'dhBoilerplate'
      }, {
        type:    'input',
        name:    'projectDescription',
        message: 'Short description of the Project',
        default: 'undefined'
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
          "Just Prototyping",
          "Use with WordPress",
          "Use with Craft CMS"
        ]
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
        message: 'Author URl',
        default: 'http://...'
      }, {
        type:    'input',
        name:    'projectRepo',
        message: 'Git Repo URL',
        default: 'http://...'
      }
    ];

    this.prompt(prompts, function (props) {
      this.projectName          = props.projectName;
      this.projectDescription   = props.projectDescription;
      this.projectIECompatible  = props.projectIECompatible;
      this.projectUsage         = props.projectUsage;
      this.projectVersion       = props.projectVersion;
      this.projectAuthor        = props.projectAuthor;
      this.projectMail          = props.projectMail;
      this.projectUrl           = props.projectUrl;
      this.projectRepo          = props.projectRepo;
      done();
    }.bind(this));

  },

  app: function () {
    // move src folder
    this.directory('___src/_system/',   '___src/_system/');
    this.directory('___src/assets/',    '___src/assets/');
    this.directory('___src/templates/', '___src/templates/');
  },

  projectfiles: function () {
    this.copy('_package.json',          'package.json');
    this.copy('_config.json',           'config.json');
    this.copy('_bower.json',            'bower.json');
    this.copy('_gulpfile.js',           'gulpfile.js');
    this.copy('_readme.md',             'readme.md');
    this.copy('_gitignore',             '.gitignore');
    this.copy('bowerrc',                '.bowerrc');
    this.copy('editorconfig',           '.editorconfig');
    this.copy('jshintrc',               '.jshintrc');
  },

  install: function () {
    console.log('Install NPM Modules and Bower Modules.');
    console.log('Give me a moment to do that…');
    this.installDependencies();
  }

});

module.exports = dhBoilerplateGenerator;