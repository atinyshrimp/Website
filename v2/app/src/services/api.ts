import "isomorphic-fetch";

const apiURL = "http://localhost:8080";

interface ApiResponse<T> {
  ok: boolean;
  data: T;
  error: string;
}

class api {
  get<T>(path: string): Promise<ApiResponse<T>> {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await fetch(`${apiURL}${path}`, {
          mode: "cors",
          method: "GET",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        });

        const res = await response.json();
        resolve(res);
      } catch (e) {
        reject(e);
      }
    });
  }

  put<T>(path: string, body: any): Promise<ApiResponse<T>> {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await fetch(`${apiURL}${path}`, {
          mode: "cors",
          method: "PUT",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: typeof body === "string" ? body : JSON.stringify(body),
        });

        const res = await response.json();
        resolve(res);
      } catch (e) {
        reject(e);
      }
    });
  }

  postFormData<T>(path: string, file: any): Promise<ApiResponse<T>> {
    let formData = new FormData();
    console.log("file", file);
    formData.append(file.name, file, file.name);
    return new Promise(async (resolve, reject) => {
      try {
        console.log(`${apiURL}${path}`);
        const response = await fetch(`${apiURL}${path}`, {
          mode: "cors",
          method: "POST",
          credentials: "include",
          headers: {},
          body: formData,
        });
        const res = await response.json();
        console.log("e", res);
        resolve(res);
      } catch (e) {
        console.log("e", e);
        reject(e);
      }
    });
  }

  delete<T>(path: string): Promise<ApiResponse<T>> {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await fetch(`${apiURL}${path}`, {
          mode: "cors",
          credentials: "include",
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        });
        const res = await response.json();
        resolve(res);
      } catch (e) {
        reject(e);
      }
    });
  }

  post<T>(path: string, body: object): Promise<ApiResponse<T>> {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await fetch(`${apiURL}${path}`, {
          mode: "cors",
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: typeof body === "string" ? body : JSON.stringify(body),
        });

        const res = await response.json();
        resolve(res);
      } catch (e) {
        reject(e);
      }
    });
  }
}

const API = new api();
export default API;
