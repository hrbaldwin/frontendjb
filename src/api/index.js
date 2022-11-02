const BASE_URL = "https://boiling-depths-60577.herokuapp.com";

export async function fetchingPosts() {
  try {
    const fetchingPostUrl = await fetch(`${BASE_URL}/api/posts`);
    const fetchedPostUrl = await fetchingPostUrl.json();
    // console.log(fetchedPostUrl.posts[0]);
    console.log(fetchedPostUrl.posts);
    return fetchedPostUrl.posts;
  } catch (error) {
    console.error(err);
  }
}

export async function createPost(token, post) {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      post,
    }),
  };
  const response = await fetch(`${BASE_URL}/api/posts`, options);
  const result = await response.json();
  return result;
}
