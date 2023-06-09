const {Client}=require('pg');
const client =new Client(
    {
        host:"localhost",
        port: 5432,
        user:"postgres",
        password:"Test",
        database:"customer-details"
        
        });
    client.connect();
    client.query("insert into  data values('tapan','tapan@gmail.com','tapanskills')") ,(err,result)=>{
        if(!err)
        {
            console.log(result.rows);
        }
        client.end();
    }
