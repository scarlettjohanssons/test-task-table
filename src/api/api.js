export function request() {
  return fetch('https://api.hnpwa.com/v0/news/1.json')
    .then(response => response.json());
}
