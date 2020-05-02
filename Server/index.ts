import express,{Application} from 'express';
import routes from "./Routes/R_equipos";
const server:Application=express();
import Cors from 'cors';

//settings

server.set("port",3000);

//middlewares

server.use(express.json());
//server.use(express.urlencoded({extended:false}));
server.use(Cors());
//routes
server.use(routes);
//satic files //no vamos usar porque vamos hacer una api rest
//ta bacan 


//star server
server.listen(server.get("port"),()=>{
console.log("Server is runnig ",server.get("port"));
});




