// lib/queries.ts
export const getUsers = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => {
    console.log({res})
    return res.json();
  })
  .then((data) => console.log(data))
  .catch((err) => {
    console.error(err);
    throw new Error('Failed to fetch users');
  })
  return res;
};
