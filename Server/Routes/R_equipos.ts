import {Router,Request,Response} from "express";
import Equipos_data from "./../Data/Equipos_model";


const routes:Router=Router();


routes.get("/api/All_Equipos",(req:Request,res:Response)=>
{

   res.send(Equipos_data);
}
);

routes.post("/api/Regis_team",(req:Request,res:Response)=>
{

    const id=Equipos_data.length;
      console.log(req.body);
    const {equipo,pais}=req.body;

    Equipos_data.push({"id":id+1,"nombre":equipo,"pais":pais })


   res.send("Se llego inserto correctamente el registro" );
}
);

export default routes;

