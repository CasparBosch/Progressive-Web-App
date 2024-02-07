async function Api() {
  try {
    let response = await fetch("https://cmgt.hr.nl/api/projects/?page=1");

    if (response.ok) {
      // if HTTP-status is 200-299
      // get the response body (the method explained below)
      let json = await response.json();
    }
    alert("HTTP-Error: " + response.status);
  } catch {
    console.error();
  }
}
