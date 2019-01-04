# TodayList

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.2.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## 启动服务及工作过程
1. ng new Today-List (新建一个项目)
2. cd Today-List
3. ng add ng-zorro-antd   （安装ng-zorro ）
4. ng serve (启动服务正常)
5. 添加第一个组件login （可以使用 ng generate component login）
6. 添加app-routing-module.ts 文件，配置route ... 记得把该文件引入到app.module文件内，并import中加入.
7. app.html 添加路由出口 <router-outlet></router-outlet>
8. 重新ng serve .服务正常启动，第一个login页面完成。
9. 修改css 文件为scss. 
   - 首先安装scss. npm install node-sass --save-dev. 
   - 然后修改angular.json 中的css为scss.
   - 然后将把全局style.css文件改为style.scss。
