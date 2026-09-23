import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { JWT_SECRET } from "./config";

export function middleware(req: Request, res: Response, nex: NextFunction) {
    const token = req.headers["authorization"] ?? "";

    const decoded = jwt.verify(token, JWT_SECRET) as JwtPayload;

    if (decoded) {
        //@ts-ignore
        req.userId = decoded.userId as string;
        nex();
    }
    else {
        res.json({
            message: "user not verified",
        })
    }



}
