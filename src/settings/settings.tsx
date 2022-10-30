const http_type = "https://"
const ip = "localhost"//"192.168.0.6"//"localhost"
const port = "44318"//"5148"

const GetConnectionString = () =>{

    return http_type+ip+":"+port
}


export default GetConnectionString;