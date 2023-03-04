var entitiesService = {
    endpoint: "https://api.remote.dev/api/entities/Teams",
 }


 entitiesService.getAll = () =>{
  console.log("getEntities is firing");

   const config = {
     method: "GET",
     url: entitiesService.endpoint,
     crossdomain: true,
     headers: { "Content-Type": "application/json" },
   };

   return axios(config)
    
 }

 entitiesService.getById = (id) => {
  const config = {
    method: "GET",
    url: entitiesService.endpoint +id,
    data: id,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };
 var id = 447963191;

  return axios(config);
   
  }; 


 entitiesService.add = (payload) =>{
    console.log("addEntities is firing");
    const config = {
        method: "POST",
        url: entitiesService.endpoint,
        data: payload,
        crossdomain: true,
        headers: { "Content-Type": "application/json" },
      };
      
      return axios(config).then((response) => {
return {...payload, id:response.data.item}
}
      )}




       entitiesService.update = (id, payload) => {
        console.log("updateEntities is firing");
    const config = {
      method: "PUT",
      url: entitiesService.endpoint ,
      data: payload,
      crossdomain: true,
      headers: { "Content-Type": "application/json" },
    };
     return axios(config); /* .then((response) => {
        return payload;
      }); */
  };

  entitiesService.deleteById = (id) => {
    const config = {
      method: "DELETE",
      url: entitiesService.endpoint+"/"+id,
      data: id,
      crossdomain: true,
      headers: { "Content-Type": "application/json" },
    };
    return axios(config).then((response) => {
      return id;
    });
  };