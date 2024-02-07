import axios from "axios";

async function getData(index) {
  const { data: user } = await axios(
    "https://jsonplaceholder.typicode.com/users/" + index
  );
  const { data: post } = await axios(
    "https://jsonplaceholder.typicode.com/posts?id=" + index
  );
  console.log("users: ", user);
  console.log("posts: ", post);
}
export { getData };
