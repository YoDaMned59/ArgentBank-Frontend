export async function LoginCall(form) {
  form = JSON.stringify(form);
  return await fetch(`http://localhost:3001/api/v1/user/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: form,
  }).then((data) => {
    return data.json();
  });
}
