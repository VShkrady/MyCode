var friendsService = {
    endpoint: "https://api.remote.dev/api/friends",
  };
  
   
   
  friendsService.userLogin = (payload) =>{
  
    console.log("friendsLogin is executing");
        const config = {
      method: "POST",
      url: friendsService .endpoint + "/login",
      data: payload,
      crossdomain: true,
      headers: { "Content-Type": "application/json" },
    };
  
    return axios(config);
  }
  
 
  
  
  friendsService .getCurrent = () =>{
  console.log("getCurrentFriend is firing");
  
   const config = {
     method: "GET",
     url: `${friendsService.endpoint}/current`,
     crossdomain: true,
     headers: { "Content-Type": "application/json" },
   };
  
   return axios(config)
    
  }
  
  friendsService.getAll = () =>{
    console.log("getAllFriends is firing");
    
     const config = {
       method: "GET",
       url: friendsService.endpoint,
       crossdomain: true,
       headers: { "Content-Type": "application/json" },
     };
    
     return axios(config)
      
    }
   
    friendsService.paginated = () =>{
        console.log("getAllFriends is firing");
        
         const config = {
           method: "GET",
           url: "https://api.remote.dev/api/friends?pageIndex=0&pageSize=10",
           crossdomain: true,
           headers: { "Content-Type": "application/json" },
         };
         return axios(config);
          
        }

        friendsService.search = (query) =>{
          console.log("getQueryFriends is firing");
          
           const config = {
             method: "GET",
             url: `https://api.remote.dev/api/friends/search?pageIndex=0&pageSize=10&q=${query}`,
             crossdomain: true,
             headers: { "Content-Type": "application/json" },
           };
          
           return axios(config)
            
          }


    friendsService.getById = (id) => {
  const config = {
    method: "GET",
    url:  `${friendsService.endpoint}/${id}`,
    data: id,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };
  
  
  return axios(config);
   
  }; 
  friendsService.friendLogout = () =>{
    console.log("getFriendLogout is firing");
    
     const config = {
       method: "GET",
       url: `${friendsService.endpoint}/logout`,
       crossdomain: true,
       headers: { "Content-Type": "application/json" },
     };
    
     return axios(config)}
  
  
     friendsService.add = (payload) =>{
    console.log("addFriend is firing");
    const config = {
        method: "POST",
        url: friendsService.endpoint,
        data: payload,
        crossdomain: true,
        headers: { "Content-Type": "application/json"},
      };
  
      
      return axios(config).then((response) => {
  return {...payload, id:response.data.item}
  
  }
      )}
  
      friendsService.update = (id, payload) => {
        console.log("friendsService Update is firing");
    const config = {
      method: "PUT",
      url:  `${friendsService.endpoint}/${id}`,
      data: payload,
      crossdomain: true,
      headers: { "Content-Type": "application/json" },
    };
     return axios(config).then((response) => {
        return payload;
      });
  };
  
  friendsService.deleteById = (id) => {
    console.log("Delete is executing");
    const config = {
      method: "DELETE",
      url:  `${friendsService.endpoint}/${id}`,
      data: id,
      crossdomain: true,
      headers: { "Content-Type": "application/json" },
    };
    return axios(config).then((response) => {
      return id;
    });
  }; 