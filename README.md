# Skeleton

This is a skeleton application with a NodeJS/MySQL back-end and an Angular/Bootstrap front end featuring user management with roles and JWT based login.

## API Installation

This application needs NodeJS 6.x and MySQL 5.6 (or MariaDB 10.x)

To install the project clone the repo and then run the following command in the terminal while in **/api**
```
npm install
```
Create a new mysql database and import **/api/panic.sql** into it. 

After installation you will need to copy **/api/appConfig-template.js** to **/api/appConfig.js** (which is already ignored from git) and follow the instructions in the file.

## API Development

Once installed you can run the project by running the following command from the **/api** directory

```
npm start
```

This starts the application on port 3001 under nodemon which will restart the server whenever any changes are detected.

## Application Details
The NodeJS routes are defined in **/api/routes/skeletonApiRoutes.js**

## UI Installation

This application must be run on an apache 2 web server with mod_rewrite enabled. You will also need NPM and Bower to install packages.

To install the project run the following commands in the terminal while in **/ui**
```
sudo npm install gulp -g
sudo npm install gulp-cli -g
sudo npm install bower -g
npm install
bower install
```

Edit the file **/ui/config.json** to configure the environment based API URL.

Once installed and configured you can build the project by running the following command in **/ui**

```
gulp buildDev
```

Once built, the contents of the **/ui/public** directory can be placed in the webroot of the web server.

The apache server will need to have the following setting enabled in the site configuration

```apacheconfig
FallbackResource /index.html
```
And in the apache directory configuration the following setting

```apacheconfig
AllowOverride All
```

## UI Development

To use browsersync create an apache vhost with the hostname of **localhost.skeleton** with the webroot pointing to the **/ui/public** directory of the project running on port 80 on your local machine and add the following entry to your hosts file

```
127.0.0.1 localhost.skeleton
```
Once this apache setup is complete you can run the default gulp task to enable browsersync.  This will automatically refresh your browser and update the **/ui/public** directory when changes are made to the files under **/ui/source**

```
gulp default
```
Once the task is running your default browser will start automatically and open **http://localhost:3000**

## Deployment

Once installed and configured on your production server you can build the project by running the following command in **/ui**

```
gulp buildProd
```

## Application Details
The Angular routes are defined in **/ui/source/js/scripts.js**

## Login Info
The default login information for the application is

**Username:** adminuser@stgconsulting.com

**Password:** password

On your first login you will be prompted to change your password.
