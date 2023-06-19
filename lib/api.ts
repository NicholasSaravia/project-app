type HttpMethod =
  | "GET"
  | "POST"
  | "PUT"
  | "DELETE"
  | "PATCH"
  | "HEAD"
  | "OPTIONS";

interface Fetcher {
  url: string;
  method: HttpMethod;
  body: any; // replace 'any' with the actual type of 'user', if known
  json: boolean;
}

const fetcher = async ({ url, method, body, json = true }: Fetcher) => {
  const res = await fetch(url, {
    method,
    ...(body && JSON.stringify(body)),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    // handle errors
    throw new Error("Api Error");
  }

  if (json) {
    const data = await res.json();
    return data.data;
  }
};

export const register = async (user: any) => {
  return fetcher({
    url: "/api/register",
    method: "POST",
    body: user,
    json: false,
  });
};

export const signin = async (user: any) => {
  return fetcher({
    url: "/api/signin",
    method: "POST",
    body: user,
    json: false,
  });
};
