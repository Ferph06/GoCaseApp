import {models} from '../models';

const DATAREQUEST={
    urlProd:'',
    urlDev:'http://192.168.1.71:1337/api/v1/',
    tokenGoogle:'',
    secret:'',
    principalSlug:['Usuario/']
};


export default class APIREQUEST {
    constructor(type,dev){
        this.url=dev?DATAREQUEST.urlDev:DATAREQUEST.urlProd;
        switch(type){
            case 'user':
            this.url+=DATAREQUEST.principalSlug[0];
            break;
            default:
            break;
        }
    }
    putRequest(endpoit){
          fetch(this.url+endpoit,{});
    }
    postRequest(endpoit,data){
       return new Promise((resolve,reject)=>{
            fetch(this.url+endpoit,{
                method:'POST',
                headers: {
                'Content-Type':'application/json'
                },
                body:JSON.stringify(data)
            }).then((response)=>{
                resolve(response.json());
            }).catch((err)=>{
                reject(err);
            });
        });
   
    }
    deleteRequest(endpoit){
          fetch(this.url+endpoit,{});
    }
    getRequest(endpoit){
          fetch(this.url+endpoit,{});
    }

}

