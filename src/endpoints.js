import { semaforo, diasemana, fatorial, sequenciapar} from "./services.js";
import { Router } from "express";



const server= Router();

server.get('/semaforo/:cor',(req,resp)=> {
    let cor = req.params.cor;

    const d= semaforo(cor);
    resp.send({
        semaforo: d
    });
})

server.get('/diasemana',(req,resp)=>{
    let dia = Number(req.query.dia);

    const d= diasemana(dia);
    resp.send({
        diasemana:d
    });
})

server.post ('/fatorial',(req,resp)=>{
    let n = req.body.n;

    const d=fatorial(n);
    resp.send({
        fatorial:d
    });
})

server.post ('/sequenciapar',(req,resp)=>{
    let limite = req.body.limite;

    const d= sequenciapar(limite);
    resp.send({ 
        sequenciapar:d
    });
})

 export default server;