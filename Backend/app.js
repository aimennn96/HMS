import express from "express"
import cors from "cors"
import { config } from "dotenv"
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";
import { dbConnect } from "./database/db.js";
import userinfo from "./router/userrouter.js"
import sendmessage from "./router/message.js"
import appiontment from "./router/appointmentSchema.js"

import { errormiddleware } from "./middleware/errorMiddleware.js"
const app = express();
config({ path: "./config/config.env" })
app.use(cors({
    origin: [process.env.FRONTEND, process.env.DASHBOARD],
    methods: ["GET", "POST", "UPDATE", "DELETE","PUT"],
    credentials: true
}));
app.use(cookieParser());//cookie create
app.use(express.json());//data convert to json
app.use(express.urlencoded({ extended: true }))

app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
}))
app.use("/server/message", sendmessage)
app.use("/server/user",userinfo)

app.use("/server/appiontment",appiontment)
dbConnect();

app.use(errormiddleware)
export default app;