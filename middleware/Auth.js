// const jwt = require('jsonwebtoken')

// require("dotenv").config()

// //testing
// exports.auth = (req, res, next) => {
//     try{
//         const token = req.body.token
//         //another way to get the token given below
//         //const token = req.cookie.token

//         if(!token){
//             return res.status(401).json({
//                 success: false,
//                 message: "token missing",
//             })
//         }

//         //verify the token
//         try{
//             const decode = jwt.verify(token, process.env.JWT_SECRET)
            
//             console.log(decode)

//             req.user = decode

//         }
//         catch(err){
//             return res.status(401).json({
//                 success: false,
//                 message: "token is invalid",
//             })
//         }

//         next()
//     }
//     catch(err){
//         console.log(err)
//         return res.status(401).json({
//             success: false,
//             message: "Something went wrong while verifying token"
//         })
//     }
// }

// //student route
// exports.isStudent = (req,res,next) => {
//     try{
//         if(req.user.role !== "Student"){
//             return res.status(401).json({
//                 success: false,
//                 message: "This is a protected route for students, you can't access it"
//             })
//         }
//         next()
//     }
//     catch(err){
//         return res.status(500).json({
//             success: false,
//             message: "User Role is not Matching"
//         })
//     }
// }

// //admin route
// exports.isAdmin = (req,res,next) => {
//     try {
//         if (req.user.role !== "Admin") {
//             return res.status(401).json({
//                 success: false,
//                 message: "This is a protect route for Admins, you can not access it"
//             })
//         }
//         next();
//     }
//     catch (err) {
//         return res.status(500).json({
//             success: false,
//             message: "User Role is not Matching"
//         })
//     }
// }

// //visitor route
// exports.isVisitor = (req,res,next) => {
//     try {
//         if (req.user.role !== "Visitor") {
//             return res.status(401).json({
//                 success: false,
//                 message: "This is a protect route for Visitors, you can not access it"
//             })
//         }
//         next();
//     }
//     catch (err) {
//         return res.status(500).json({
//             success: false,
//             message: "User Role is not Matching"
//         })
//     }
// }