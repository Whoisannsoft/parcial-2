export async function requestToAPI() {
    const response = await fetch('http://192.168.131.101:8080/dca/api/plants');
    const data = await response.json();
    return data;
  }
  