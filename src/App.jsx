import { useState, useEffect } from "react";
import "./App.css";
import { SessionProvider, useSession, getCsrfToken } from "@hono/auth-js/react";

function App() {
  return (
    <SessionProvider>
      <AppContent />
    </SessionProvider>
  );
}

const AppContent = () => {
  const session = useSession();
  const [token, setToken] = useState(null);

  useEffect(() => {
    const fetchCSRFToken = async () => {
      const data = await getCsrfToken();
      setToken(data);
    };

    fetchCSRFToken();
  }, []);

  if (session.status === "authenticated") {
    return <div>I am {JSON.stringify(session)}</div>;
  } else {
    return (
      <div>
        <form action="/api/auth/signin/github" method="POST">
          <input type="hidden" name="csrfToken" value={token}></input>
          <button type="submit">Github Login</button>
        </form>
      </div>
    );
  }
};
export default App;
