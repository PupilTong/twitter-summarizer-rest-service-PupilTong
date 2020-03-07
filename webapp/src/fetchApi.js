class fetchApi{
    apiAddress = 'http://hw5.onic.xyz/';
    fetchApi(addressString){
        this.apiAddress=addressString;
    }
    Get(requestString){
        return fetch(this.apiAddress+requestString,{
            method:'GET'
        })
    }
    Post(requestString,data){
        return fetch(this.apiAddress+requestString,{
            method:'POST',
            body:JSON.stringify(data), 
        })
    }
    Put(requestString,data){
        return fetch(this.apiAddress+requestString,{
            method:'PUT',
            body:JSON.stringify(data),  
            headers: new Headers({
                'Content-Type': 'application/json'
              })
        })
    }
    Delete(requestString,data){
        return fetch(this.apiAddress+requestString,{
            method:'DELETE',
            body:JSON.stringify(data),  
            headers: new Headers({
                'Content-Type': 'application/json'
              })
        })
    }
}
export{
    fetchApi
}