var techCoService = {
    endpoint: "https://api.remote.dev/api/techcompanies",
  };
  
  techCoService.getCurrent = () =>{
  console.log("getCurrentJobs is firing");
  
   const config = {
     method: "GET",
     url: `${techCoService.endpoint}/current`,
     crossdomain: true,
     headers: { "Content-Type": "application/json" },
   };
  
   return axios(config)
    
  }
  
  techCoService.getAll = () =>{
    console.log("getAllCo is firing");
    
     const config = {
       method: "GET",
       url: techCoService.endpoint,
       crossdomain: true,
       headers: { "Content-Type": "application/json" },
     };
    
     return axios(config)
      
    }
   
    techCoService.paginated = (pageSize, pageIndex) =>{
        console.log("getAllCo is firing");
        
         const config = {
           method: "GET",
           url: `${techCoService.endpoint}?pageIndex=${pageSize}&pageSize=${pageIndex}`,
           crossdomain: true,
           headers: { "Content-Type": "application/json" },
         };
         return axios(config);
          
        }

        techCoService.search = (query) =>{
          console.log("getQueryTechCo is firing");
          
           const config = {
             method: "GET",
             url: `https://api.remote.dev/api/jobs/search?pageIndex=0&pageSize=10&searchTerm=${query}`,
             crossdomain: true,
             headers: { "Content-Type": "application/json" },
           };
          
           return axios(config)
            
          }


 techCoService.getById = (id) => {
  const config = {
    method: "GET",
    url:  `${techCoService.endpoint}/${id}`,
    data: id,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };
  
  
  return axios(config);
   
  }; 

  techCoService.add = (payload) =>{
    console.log("addJobs is firing");
    const config = {
        method: "POST",
        url:  techCoService.endpoint,
        data: payload,
        crossdomain: true,
        headers: { "Content-Type": "application/json"},
      };
  
      
      return axios(config).then((response) => {
  return {...payload, id:response.data.item}
  
  }
      )}
  
      techCoService.update = (id, payload) => {
        console.log(" techCoService Update is firing");
    const config = {
      method: "PUT",
      url:  `${techCoService.endpoint}/${id}`,
      data: payload,
      crossdomain: true,
      headers: { "Content-Type": "application/json" },
    };
     return axios(config).then((response) => {
        return payload;
      });
  };
  
  techCoService.deleteById = (id) => {
    console.log("Delete is executing");
    const config = {
      method: "DELETE",
      url:  `${techCoService.endpoint}/${id}/${2}`,
      data: id,
      crossdomain: true,
      headers: { "Content-Type": "application/json" },
    };
    return axios(config).then((response) => {
      return id;
    });
  };      