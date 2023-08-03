const domain = "http://localhost:3001";

export const login = async (credential) => {
  const loginUrl = `${domain}/auth/login`;
  const response = await fetch(loginUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credential),
  });
  if (response.status !== 200) {
    throw Error("Fail to log in");
  }
  return await response.json();
};

export const register = async (credential) => {
  const loginUrl = `${domain}/auth/register`;
  const response = await fetch(loginUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credential),
  });
  if (response.status > 300) {
    throw Error("Fail to create");
  }
  return await response.json();
};
