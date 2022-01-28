"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelloWorldController = void 0;
const tsoa_1 = require("tsoa");
let HelloWorldController = class HelloWorldController extends tsoa_1.Controller {
    index() {
        return { message: "hello" };
    }
    routes() {
        // use generated routes by tsoa for swagger-ui
        RegisterRoutes(this.express);
    }
};
__decorate([
    (0, tsoa_1.Get)() //specifie the request type
], HelloWorldController.prototype, "index", null);
HelloWorldController = __decorate([
    (0, tsoa_1.Route)("Hello World") //
    ,
    (0, tsoa_1.Tags)("HelloWorldController") // Under helloWorldController tag
], HelloWorldController);
exports.HelloWorldController = HelloWorldController;
