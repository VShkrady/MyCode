var jobsService = {
    endpoint: "https://api.remote.dev/api/jobs",
  };
  
  jobsService.getCurrent = () =>{
  console.log("getCurrentJobs is firing");
  
   const config = {
     method: "GET",
     url: `${jobsService.endpoint}/current`,
     crossdomain: true,
     headers: { "Content-Type": "application/json" },
   };
  
   return axios(config)
    
  }
  
  jobsService.getAll = () =>{
    console.log("getAllJobs is firing");
    
     const config = {
       method: "GET",
       url: jobsService.endpoint,
       crossdomain: true,
       headers: { "Content-Type": "application/json" },
     };
    
     return axios(config)
      
    }
   
    jobsService.paginated = (pageSize, pageIndex) =>{
        console.log("getAllJobs is firing");
        
         const config = {
           method: "GET",
           url: `${jobsService.endpoint}?pageIndex=${pageSize}&pageSize=${pageIndex}`,
           crossdomain: true,
           headers: { "Content-Type": "application/json" },
         };
         return axios(config);
          
        }

        jobsService.search = (query) =>{
          console.log("getQueryJobs is firing");
          
           const config = {
             method: "GET",
             url: `https://api.remote.dev/api/jobs/search?pageIndex=0&pageSize=10&searchTerm=${query}`,
             crossdomain: true,
             headers: { "Content-Type": "application/json" },
           };
          
           return axios(config)
            
          }


 jobsService.getById = (id) => {
  const config = {
    method: "GET",
    url:  `${jobsService.endpoint}/${id}`,
    data: id,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };
  
  
  return axios(config);
   
  }; 

  
  
  jobsService.add = (payload) =>{
    console.log("addJobs is firing");
    const config = {
        method: "POST",
        url:  jobsService.endpoint,
        data: payload,
        crossdomain: true,
        headers: { "Content-Type": "application/json"},
      };
  
      
      return axios(config).then((response) => {
  return {...payload, id:response.data.item}
  
  }
      )}
  
      jobsService.update = (id, payload) => {
        console.log(" jobsService Update is firing");
    const config = {
      method: "PUT",
      url:  `${ jobsService.endpoint}/${id}`,
      data: payload,
      crossdomain: true,
      headers: { "Content-Type": "application/json" },
    };
     return axios(config).then((response) => {
        return payload;
      });
  };
  
  jobsService.deleteById = (id) => {
    console.log("Delete is executing");
    const config = {
      method: "DELETE",
      url:  `${jobsService.endpoint}/${id}/${2}`,
      data: id,
      crossdomain: true,
      headers: { "Content-Type": "application/json" },
    };
    return axios(config).then((response) => {
      return id;
    });
  }; 