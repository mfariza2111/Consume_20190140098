function getAll(){
    const respon = axios.get("http://localhost:5555/mahasiswa/allmahasiswa")
    const dr = respon.then(resp => resp.data)
    return dr
}

async function create(data){
    await axios.post("http://localhost:5555/mahasiswa/addmahasiswa", data)
    .then((result) => {
        console.log(result)
        return result.data
    }).catch((err) => {
        console.error(err)
    });
}
    
async function update(data){
    await axios.put("http://localhost:5555/mahasiswa/updatemahasiswa", data)
    .then((result) => {
        console.log(result)
        return result.data
    }).catch((err) => {
        console.error(err)
    });
}

async function del(data){
    await axios.delete("http://localhost:5555/mahasiswa/hapusmahasiswa", data)
    .then((result) => {
        console.log(result)
        return result.data
    }).catch((err) => {
        console.error(err)
    });
}


