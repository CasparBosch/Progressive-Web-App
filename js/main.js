async function Api() {
  try {
    const response = await fetch("https://cmgt.hr.nl/api/projects", {
      method: "GET",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    let jsonfetched = await response.json();
    console.log(jsonfetched);
    return jsonfetched.json();
  } catch {
    console.error();
  }
}



Api();