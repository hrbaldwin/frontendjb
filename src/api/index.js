const BASE_URL = "https://boiling-depths-60577.herokuapp.com";

export async function fetchingPosts() {
  try {
    const fetchingPostUrl = await fetch(`${BASE_URL}/api/posts`);
    const fetchedPostUrl = await fetchingPostUrl.json();
    return fetchedPostUrl.posts;
  } catch (error) {
    console.error(err);
  }
}

export async function createPost(token, title, content, tags) {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      title,
      content,
      tags,
    }),
  };
  const response = await fetch(`${BASE_URL}/api/posts`, options);
  const result = await response.json();
  return result;
}

export async function logInUser(username, password) {
  console.log(username, password);
  let options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
    }),
  };
  let response = await fetch(`${BASE_URL}/api/users/login`, options);
  let result = await response.json();
  console.log(result);
  return result;
}

export async function RegisterUser(username, password, name, location) {
  console.log(username, password, name, location);
  let options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: username,
      password: password,
      name: name,
      location: location,
    }),
  };
  let response = await fetch(`${BASE_URL}/api/users/register`, options);
  let result = await response.json();
  console.log(result);
  return result.token;
}

export async function DeletePost(id, token) {
  try {
    const options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await fetch(`${BASE_URL}/api/posts/${id}`, options);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}

export async function filterUserPosts(author) {
  if (!author) {
    setFilteredUserPosts([]);
  } else {
    let postsByAuthor = userPosts.filter((post) => {
      console.log(post);
      if (post.author.username.includes(author)) {
        return true;
      } else {
        return false;
      }
    });
    console.log(postsByAuthor);
    setFilteredUserPosts(postsByAuthor);
  }
}
