# Flight Search Application QA Tests
My Postman Documentation : https://documenter.getpostman.com/view/27220093/2s9Y5R16DE

StartFragmenthere is an API that is operational at the address "https://flights-api.buraky.workers.dev/". Tests need to be written for this API. The expected tests are as follows:

- Check HTTP status codes

  GET requests should return a status code of 200.

- Check response content

  Responses to GET requests should follow this structure:

 ``` 
Response: Object\[string -> Array\[Flight\]\]
Flight {
  Id   integer
  From string
  To   string
  Date string
}

 ```

Example:

```
{
“data”: \[
 {
   "id": 1,
   "from": "IST",
   "to": "LAX",
   "date": "2022-12-13"
 },
 {
    "id": 2,
    "from": "JFK",
    "to": "LHR",
    "date": "2022-12-14"
 } 
\]
}

 ```

- Header check  
    Responses from GET requests should have a "Content-Type" header with a value of "application/json".



