import { Controller, Route, Get, Tags} from "tsoa";
import Helloworld from "../models/helloworld";

@Route("Hello World" ) //


 @Tags("HelloWorldController") // Under helloWorldController tag
 export class HelloWorldController extends Controller {

    @Get() //specifie the request type
    index(): Helloworld {
        return { message : "hello"}
    }
    private routes(): void {
        // use generated routes by tsoa for swagger-ui
    }

}



