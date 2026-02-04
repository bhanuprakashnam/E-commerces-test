import mysql2 from "mysql2/promise";

async function getConnection() {
  try {
    const con = await mysql2.createConnection({
      host: "localhost",
      user: "root",
      password: "Bhageera1995@",
      database: "e_commerce"
    });

    const [rows] = await con.execute("SELECT * FROM login");
    console.log(rows);

    await con.end();
  } catch (err) {
    console.error("DB error:", err.message);
  }
}

getConnection();































// import mysql2 from "mysql2";
// const con=mysql2.createConnection({
//     host:"localhost",
//     user:"root",
//     password:"Bhageera1995@",
//     database:"e_commerce"
// })
// function getConnection(){
//     con.query("select * from login ",function(err,rows,col){
//         if(err){
//             console.log("error");
//         }
//         else{
//             console.log(rows);
//         }
//     })
// }
// getConnection();