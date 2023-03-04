var usersService = {
  endpoint: "https://api.remote.dev/api/users",
};

 usersService.userLogin = (payload) =>{

  console.log("userLogin is executing", testLoginPayload);
      const config = {
    method: "POST",
    url: usersService.endpoint + "/login",
    data: payload,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };

  return axios(config);
}


usersService.getCurrent = () =>{
console.log("getCurrentUser is firing");

 const config = {
   method: "GET",
   url: `${usersService.endpoint}/current`,
   crossdomain: true,
   headers: { "Content-Type": "application/json" },
 };

 return axios(config)
  
}

usersService.getAll = () =>{
  console.log("getAllUsers is firing");
  
   const config = {
     method: "GET",
     url: usersService.endpoint,
     crossdomain: true,
     headers: { "Content-Type": "application/json" },
   };
  
   return axios(config)
    
  }
usersService.getById = (id) => {
const config = {
  method: "GET",
  url:  `${usersService.endpoint}/${id}`,
  data: id,
  crossdomain: true,
  headers: { "Content-Type": "application/json" },
};


return axios(config);
 
}; 
usersService.userLogout = () =>{
  console.log("getUserLogout is firing");
  
   const config = {
     method: "GET",
     url: `${usersService.endpoint}/logout`,
     crossdomain: true,
     headers: { "Content-Type": "application/json" },
   };
  
   return axios(config)}


/*usersService.add = (payload) =>{
  console.log("addCurrentUser is firing");
  const config = {
      method: "POST",
      url: usersService.endpoint,
      data: payload,
      crossdomain: true,
      headers: { "Content-Type": "application/json"},
    };
    var tenantId = 123000123;
    
    return axios(config).then((response) => {
return {...payload, id:response.data.item}

}
    )}*/

    usersService.update = (id, payload) => {
      console.log("usersServiceUpdate is firing");
  const config = {
    method: "PUT",
    url:  `${usersService.endpoint}/${id}`,
    data: payload,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };
   return axios(config).then((response) => {
      return payload;
    });
};

usersService.deleteById = (id) => {
  console.log("Delete is executing");
  const config = {
    method: "DELETE",
    url:  `${usersService.endpoint}/${id}`,
    data: id,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };
  return axios(config).then((response) => {
    return id;
  });
}; 




/////////////////////////////////////////////////////

var registerFormService = {
  endpoint: "https://api.remote.dev/api/users",
}


registerFormService.getAll = () =>{
console.log("getRegisterForm is firing");

 const config = {
   method: "GET",
   url: registerFormService.endpoint,
   crossdomain: true,
   headers: { "Content-Type": "application/json" },
 };

 return axios(config)
  
}
registerFormService.getById = (id) => {
const config = {
  method: "GET",
  url:  `${registerFormService.endpoint}/${id}`,
  data: id,
  crossdomain: true,
  headers: { "Content-Type": "application/json" },
};


return axios(config);
 
};  
 registerFormService.add = (payload) =>{
  console.log("addRegisterForm is firing");
  const config = {
      method: "POST",
      url: `${registerFormService.endpoint}/register`,
      data: payload,
      crossdomain: true,
      headers: { "Content-Type": "application/json"},
    };
  
    
    return axios(config).then((response) => {
return {...payload, id:response.data.item}

}
    )}

    registerFormService.update = (id, payload) => {
      console.log("registerFormServiceUpdate is firing");
  const config = {
    method: "PUT",
    url:  `${registerFormService.endpoint}/${id}`,
    data: payload,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };
   return axios(config).then((response) => {
      return payload;
    });
};

registerFormService.deleteById = (id) => {
  console.log("Delete is executing");
  const config = {
    method: "DELETE",
    url:  `${registerFormService.endpoint}/${id}`,
    data: id,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };
  return axios(config).then((response) => {
    return id;
  });
}; 

//////////////////////////////////

var loginFormService = {
  endpoint: "https://api.remote.dev/api/users/login",
}

loginFormService.add = (payload) =>{
  console.log("addLoginForm is firing");
  const config = {
      method: "POST",
      url: loginFormService.endpoint,
      data: payload,
      crossdomain: true,
      headers: { "Content-Type": "application/json"},
  }
    return axios(config)
}



