var eventsService = {
    endpoint: "https://api.remote.dev/api/events",
  };

  eventsService.search = (dateStart, dateEnd) =>{
    console.log("getQueryEvents is firing");
    
     const config = {
       method: "GET",
       url: `${eventsService.endpoint}/search?pageIndex=0&pageSize=10&dateStart=${dateStart}&dateEnd=${dateEnd}`,
       crossdomain: true,
       headers: { "Content-Type": "application/json" },
     };
     
  
     return axios(config)
      
    }
  
  eventsService.getBySlug = (slug) => {
    const config = {
      method: "GET",
      url:  `${eventsService.endpoint}/${slug}`,
      data: slug,
      crossdomain: true,
      headers: { "Content-Type": "application/json" },
    };
    
    
    return axios(config);
     
    }; 
  

  eventsService.update = (id, payload) => {
    console.log("Update Events is firing");
const config = {
  method: "PUT",
  url:  `${eventsService.endpoint}/${id}`,
  data: payload,
  crossdomain: true,
  headers: { "Content-Type": "application/json" },
};
 console.log(payload);
 return axios(config);
};

 eventsService.add = (payload) =>{
    console.log("addEvent is firing");
    const config = {
        method: "POST",
        url:  eventsService.endpoint,
        data: payload,
        crossdomain: true,
        headers: { "Content-Type": "application/json"},
      };
  
      console.log(payload);
      return axios(config);
  
  }
     
  


  eventsService.getById = (id) => {
    const config = {
      method: "GET",
      url:  `${eventsService.endpoint}/${id}`,
      data: id,
      crossdomain: true,
      headers: { "Content-Type": "application/json" },
    };
    
    
    return axios(config);
     
    }; 
  
    eventsService.paginatedFeeds = () =>{
      console.log("getPaginated Feeds is firing");
      
       const config = {
         method: "GET",
         url: eventsService.endpoint + "/feeds",
         crossdomain: true,
         headers: { "Content-Type": "application/json" },
       };
       console.log(config.url);
       return axios(config);
        
      }

  
  eventsService.paginated = (pageSize, pageIndex) =>{
    console.log("getPaginated is firing");
    
     const config = {
       method: "GET",
       url: `${eventsService.endpoint}/feed?pageIndex=${pageSize}&pageSize=${pageIndex}`,
       //https://api.remote.dev/api/events/feed?pageIndex=0&pageSize=10
       crossdomain: true,
       headers: { "Content-Type": "application/json" },
     };
     return axios(config);
      
    }