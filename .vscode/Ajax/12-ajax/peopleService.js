var peopleService = {
    endpoint: "https://api.remote.dev/api/people/"
}

peopleService.getPage = (pageIndex, pageSize) => {
    console.log("getPage is executing");
    const config = {
      method: "GET",
      url: peopleService.endpoint + `paginate?pageIndex=${pageIndex}&pageSize=${pageSize}`,
      crossdomain: true,
      headers: { "Content-Type": "application/json" }
    };
    return axios(config);
  };

 
  
  peopleService.getAll = () =>{
  console.log("getPeople is firing");
  
   const config = {
     method: "GET",
     url: peopleService.endpoint,
     crossdomain: true,
     headers: { "Content-Type": "application/json" },
   };
  
   return axios(config)
    
  }
  peopleService.getById = (id) => {
  const config = {
    method: "GET",
    url:  `${peopleService.endpoint}/${id}`,
    data: id,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };
  
  
  return axios(config);
   
  };  
  peopleService.add = (payload) =>{
    console.log("addPeople is firing");
    const config = {
        method: "POST",
        url: `${peopleService.endpoint}/register`,
        data: payload,
        crossdomain: true,
        headers: { "Content-Type": "application/json"},
      };
    
      
      return axios(config).then((response) => {
  return {...payload, id:response.data.item}
  
  }
      )}
  
      peopleService.update = (id, payload) => {
        console.log("peopleServiceUpdate is firing");
    const config = {
      method: "PUT",
      url:  `${peopleService.endpoint}/${id}`,
      data: payload,
      crossdomain: true,
      headers: { "Content-Type": "application/json" },
    };
     return axios(config).then((response) => {
        return payload;
      });
  };
  
  peopleService.deleteById = (id) => {
    console.log("Delete is executing");
    const config = {
      method: "DELETE",
      url:  `${peopleService.endpoint}/${id}`,
      data: id,
      crossdomain: true,
      headers: { "Content-Type": "application/json" },
    };
    return axios(config).then((response) => {
      return id;
    });
  }; 
  