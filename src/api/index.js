const BASE_URL = "https://boiling-depths-60577.herokuapp.com";

export async function fetchingPosts() {
  try {
    const fetchingPostUrl = await fetch(`${BASE_URL}/api/posts`);
    const fetchedPostUrl = await fetchingPostUrl.json();
    console.log(fetchedPostUrl);
    return fetchedPostUrl.posts;
  } catch (error) {
    console.error(err);
  }
}
