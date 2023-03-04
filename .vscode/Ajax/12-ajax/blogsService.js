var blogsService = {
   endpoint: "https://api.remote.dev/api/blogs",
}
   
   
    blogsService.getAll = () =>{
     console.log("gettBlogs is firing");

      const config = {
        method: "GET",
        url: blogsService.endpoint,
        data: payload,
        crossdomain: true,
        headers: { "Content-Type": "application/json" },
      };

      return axios(config)
       
    }

     blogsService.add = (payload) =>{
        console.log("addBlogs is firing");
        const config = {
            method: "POST",
            url: blogsService.endpoint,
            data: payload,
            crossdomain: true,
            headers: { "Content-Type": "application/json" },
          };
    
          return axios(config)
           

    }
    

    blogsService.getById = (id) => {
      const config = {
        method: "GET",
        url: "https://api.remote.dev/api/blogs/" +id,
        data: id,
        crossdomain: true,
        headers: { "Content-Type": "application/json" },
      };
     

      return axios(config);
       
      }; 
      blogsService.update = (id, payload) => {
        const config = {
          method: "PUT",
          url: "https://api.remote.dev/api/blogs/1860403353",
          data: payload,
          crossdomain: true,
          headers: { "Content-Type": "application/json" },
        };
        var payload = {
          id: 1860403353,
          authorId: 1200597383,
          title: "Hello",
          content: "Comedy",
        };

        var id = 1860403353;
        return axios(config);
      };
  
      blogsService.deleteById = (id) => {
        const config = {
          method: "DELETE",
          url: "https://api.remote.dev/api/blogs/${id}",
          crossdomain: true,
          headers: { "Content-Type": "application/json" },
        };

        return axios(config).then((response) => {
          return id;
        });
      };