class Contador{
    static ahorroGobal = 0;
    constructor (responsable){
        this.responsable =responsable;
        this.cuentaIndividual = 0;

    }
    obtenerResponsable(){
        return this.responsable;
    }

    obtenerCuentaIndividual(){
        return this.cuentaIndividual;
    }
    obtenerCuentaGlobal(){
        return Contador.ahorroGobal;
    }
    sumarAhorro(){
        this.cuentaIndividual++;
        Contador.ahorroGobal++;
    }
}

const julio =new Contador("julio");
const jose = new Contador("jose");

julio.sumarAhorro()
julio.sumarAhorro()
julio.sumarAhorro()

jose.sumarAhorro()
jose.sumarAhorro()
jose.sumarAhorro()
jose.sumarAhorro()



console.log(julio.obtenerResponsable())
console.log(julio.obtenerCuentaGlobal())
console.log(jose.obtenerResponsable())
console.log(jose.obtenerCuentaGlobal())
