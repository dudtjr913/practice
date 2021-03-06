const request = async (url, method) => {
  const response = await fetch(url, {
    method,
  });
  try {
    if (!response.ok) {
      throw new Error('정보 불러오기 실패');
    }
    return response.json();
  } catch (error) {
    return new Error(error);
  }
};

request('https://jsonplaceholder.typicode.com/posts/1', 'GET').then((v) => console.log(v));
