import 'dotenv/config'
import express from 'express'
import cors from 'cors'

import { Febre } from './febre.js';
import { Media } from './media.js';
import { Tabuada } from './tabuada.js';



const server = express();
server.use(cors());
server.use(express.json());


    server.get('/dobro/:numero',(req,resp) =>{
        let numero = Number(req.params.numero);
        let dobro = numero * 2;

        resp.send({
            dobro:dobro
        });
    })


    server.get('/somar', (req,resp) => {
        let a = Number(req.query.a);
        let b = Number(req.query.b);

        let x = a + b;

        resp.send({
            soma: x
        })
    })

    server.post('/somar', (req, resp) => {
        let a = req.body.a;
        let b = req.body.b;

        let x = a + b;

        resp.send({
            soma: x
        })
    })


    server.get('/febre', (req, resp) => {
        try{
            const a = req.query.a

            const x = Febre(a)

            resp.send({
                febre: x
            })
        }

        catch(err){
            req.status(404).send({
                erro: err.message
            })
        }
    
        const resposta = {
            febre: {a}
        }
        
    resp.send(resposta)
    })
    
    server.post('/media', (req,resp) => {
        try{
            let {n1,n2,n3} = (req.body);

            let x = Media (n1,n2,n3);

            resp.send({
                media: x
            })
        }

        catch(err){
            resp.send({
                erro: err.message
            })
        }
    })


    server.get('/tabuada', (req,resp) => {
        try{
            const b= req.query.numero
    
            const a = Tabuada(b)
    
            resp.send({
                tabuada: a
            })
        }
    
        catch(err){
            req.status(404).send({
                erro: err.message
            })
        }
    
    })



    server.listen(process.env.PORT,
        () => console.log(`API online na porta ${process.env.PORT}`));
    