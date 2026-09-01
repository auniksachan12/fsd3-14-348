# Node.js HTTP Server and REST API

## HTTP Status Codes

HTTP status codes tell the client whether a request was successful or failed.

| Status Code | Meaning      | Description                                          |
| ----------- | ------------ | ---------------------------------------------------- |
| 200         | OK           | Request was successful                               |
| 201         | Created      | A new resource was successfully created              |
| 400         | Bad Request  | Client sent an invalid request                       |
| 401         | Unauthorized | Authentication is required or failed                 |
| 403         | Forbidden    | Client is authenticated but does not have permission |
| 404         | Not Found    | Requested resource or URL does not exist             |

---

# HTTP Methods / API Operations

APIs commonly use HTTP methods to perform CRUD operations.

| Method | Operation | Purpose                                 |
| ------ | --------- | --------------------------------------- |
| GET    | READ      | Retrieve data                           |
| POST   | CREATE    | Create new data                         |
| PUT    | UPDATE    | Completely update/replace existing data |
| PATCH  | UPDATE    | Partially update existing data          |
| DELETE | DELETE    | Remove data                             |

### Examples

GET:

````text
/api/v1/products



# Content-Type

`Content-Type` is an HTTP response header that tells the client/browser what type of data the server is sending.

In this project, we use Content-Type for HTML, JSON, and text files.

## 1. text/html

Used when the server sends an HTML file.

```js
res.setHeader("content-type", "text/html");
````
