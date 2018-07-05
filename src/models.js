class Usuario{
    constructor(data){
        this.id=data.id;
        this.name=data.name;
        this.token=data.token;
        this.email=data.email;
    }
}

const models={
    usuario:Usuario
}

export {
    models
}