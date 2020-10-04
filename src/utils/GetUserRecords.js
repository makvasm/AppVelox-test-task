export default function GetUserRecords(){
  return fetch('/api/records').catch(err => console.log(err))
    .then(res => res.json().then(data => data));
}