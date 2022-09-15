const express = require("express");
const app = express();
const PORT = 8080;
let contador = 0;

class contenedor{
	async save (producto){
        try{
           await fs.promises.writeFile("./productos.txt",
           JSON.stringify(producto,null,2),
           "utf-8");
        }catch (e){
            console.log(e);
        }

    }
    async getAll(){
        try {
            const contenido = await fs.promises.readFile("./productos.txt", "utf-8")
            // console.log (contenido);
            return JSON.parse(contenido);
        }catch(error){

        }
    }
    async saveNew (productoNuevo){
        const contenido = await this.getAll();
        const indice = contenido.sort((a ,b) => b.id - a.id)[0].id;
        productoNuevo.id = indice +1;
        contenido.push(productoNuevo);
        thi
    }
    async getById(id){
        const contenido = await this.getAll();
        const productoBuscado = contenido.filter((producto) =>producto.id !== id);
        console.log(productoBuscado);
    }
    async deleteById(id){
        try {
            const contenido = await this.getAll();
            const deleteById =contenido.filter(data =>data.id =! id);
            await fs.promises.whiteFile('./productos.txt',JSON.stringify(deleteById, null, 2),'utf-8');
        }catch (e){
            console.log ("error en el deleteById " + e);
        }
    }
    async deleteAll (){
        await fs.promises.writeFile('productos.txt', '', 'utf-8')
    }
}
const contenedor = new Contenedor()

const server = app.listen(PORT, () => {
	console.log("servidor iniciado");
});

app.get("/", (req, resp) => {
	contador++;
	resp.send(`<h1 style='color:blue'> Bienvenido a mi servidor en express</h1>`);
});

app.get("/visitas", (req, resp) => {
	resp.send(
		`<h1 style='color:blue'>La cantidad de visitas es ${contador}</h1>`
	);
});

app.get("/fechayhora", (req, resp) => {
	contador++;
	const fecha = new Date();
	resp.send(
		`<h1 style='color:blue'>La fecha es ${fecha.toLocaleDateString()} 
        y la hora es ${fecha.toLocaleTimeString()}</h1>`
	);
});

app.get ("productos" , (req,response)=>{
	response.send(contenedor.getProducts());
});

app.get ("productosRandom" , (req,response)=>{
	const random = Math.ramdom()*10+1
	response.send(contenedor.getById(ramdom));
})