class Auth {
  static URL = "https://backend-finance-managegr.onrender.com/api/v1";

  async register(data: { username: string; password: string; mail: string }) {
    try {
      const response = await fetch(`${Auth.URL}/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`Fetch failed with status ${response.status}`);
      }

      return response.json();
    } catch (error) {
      console.error("Fetch error:", error);
    }
  }
  async login(data: { username: string; password: string }) {
    try {
      const response = await fetch(`${Auth.URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`Fetch failed with status ${response.status}`);
      }

      return response.json();
    } catch (error) {
      console.error("Fetch error:", error);
    }
  }
}

export default Auth;
