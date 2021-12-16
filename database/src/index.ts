import "reflect-metadata";
import {createConnection} from "typeorm";
import {Request, Response, Router} from "express";
import {User} from "./entity/User";
import express from 'express';
import bodyParser from 'body-parser';
import {AppRoutes} from "./routes";

createConnection().then(async connection => {

    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));

    const port = 4000;
    const router = express.Router();

    AppRoutes.forEach(r => {
        app.use(r.route, r.class);
    });

    app.listen(port, () => {
        return console.log(`server is listening on ${port}`);
    });


}).catch(error => console.log(error));
