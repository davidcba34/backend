const fs = require ("fs");

// const productos = [
//     {
//         title:'Escuadra',
//         price :150,
//         id:1
//     }  ,
//     {
//         title:'Regla',
//         price :200,
//         id:2
//     },
//     {
//         title:'Goma',
//         price :100,
//         id:3
//     },



// ]



class Contenedor{
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

const contenedor = new Contenedor();
// contenedor.save(productos);
contenedor.getAll();
const productoN = {
        title:'Escuadra',
        price :150,
        thumbnail:"https://www.flaticon.com/free-icons/ruler",
};
// contenedor.saveNew(productoN);

contenedor.getById(2);
// contenedor.deleteAll();
contenedor.deleteById(2);