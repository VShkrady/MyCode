var newEntitiesService = {
    endpoint: "https://api.remote.dev/api/entities/teams",
 }


 newEntitiesService.getAll = () =>{
  console.log("getAllEntities is firing");

   const config = {
     method: "GET",
     url: newEntitiesService.endpoint,
     crossdomain: true,
     headers: { "Content-Type": "application/json" },
   };

   return axios(config)
    
 }
 newEntitiesService.getById = (id) => {
  const config = {
    method: "GET",
    url:  `${newEntitiesService.endpoint}/${id}`,
    data: id,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };


  return axios(config);
   
  };  
   newEntitiesService.add = (payload) =>{
    console.log("addNewEntities is firing");
    const config = {
        method: "POST",
        url: newEntitiesService.endpoint,
        data: payload,
        crossdomain: true,
        headers: { "Content-Type": "application/json"},
      };
      
      return axios(config).then((response) => {
return {...payload, id:response.data.item}
}
      )}

      newEntitiesService.update = (id, payload) => {
        console.log("updateNewEntities is firing");
    const config = {
      method: "PUT",
      url:  `${newEntitiesService.endpoint}/${id}`,
      data: payload,
      crossdomain: true,
      headers: { "Content-Type": "application/json" },
    };
     return axios(config).then((response) => {
        return payload;
      });
  };

  newEntitiesService.deleteById = (id) => {
    console.log("Delete is executing");
    const config = {
      method: "DELETE",
      url:  `${newEntitiesService.endpoint}/${id}`,
      data: id,
      crossdomain: true,
      headers: { "Content-Type": "application/json" },
    };
    return axios(config).then((response) => {
      return id;
    });
  }; 