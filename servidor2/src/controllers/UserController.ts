import { Request, Response } from "express";
import { User } from "../entities/User";
import DataSourse from "../data-source";

class UserController{
    async create(req:Request, res:Response){
        const {mail,password} = req.body;

        const user = new User();
        user.mail = mail;
        user.password = password;
        const r = await DataSourse.manager.save(User, user);
        res.json(r);
    }

}

export default new UserController();