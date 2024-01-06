//packages
let express =  require("express");
let dotenv = require("dotenv").config();
let pc = require("picocolors");
let cors = require("cors");
let errorHandler = require("express-async-handler");
let cookieParser = require("cookie-parser");
let path = require("path");


//.env
let port = process.env.PORT || 9999;

//DB config
let connectDB = require("./DB/DB_config");



//routes
let userRouter = require("./routes/user-router");

  
//middlewares


//express initialization
let app = express();

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use(cors({origin : "*"}))
app.use(cookieParser());
app.use(errorHandler);

//for particular urls
// app.use(
//     cors({
//       origin: ["http://localhost:3000", "https://pinvent-app.vercel.app"],
//       credentials: true,
//     })
//   );


//DB config
connectDB();
 
app.get("/", (req,res)=>{ 
    res.send("<h1> hi... i'm node js </h1>");
})

app.use("/api/user", userRouter);

app.listen(port, ()=> console.log(pc.black(pc.bgWhite(pc.bold(`server is running on port : ${pc.italic(port)}`)))))
