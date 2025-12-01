import fetch from 'node-fetch';

// Get
fetch('https://jsonplaceholder.typicode.com/users/2')
  .then((res) => res.json())
  .then((json_obj) => console.log(json_obj.name))
  .catch((err) => console.error(err));

// Post
const data = {
  name: 'Ahmad',
};

const customHeaders = {
  'Content-Type': 'application/json',
  'x-api-key': 'reqres-free-v1',
};

fetch('https://jsonplaceholder.typicode.com/users', {
  method: 'POST',
  headers: customHeaders,
  body: JSON.stringify(data),
})
  .then((res) => res.json())
  .then((json_obj) => console.log(json_obj))
  .catch((err) => console.error(err));
