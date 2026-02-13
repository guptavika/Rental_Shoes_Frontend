export default function User() {
  const name = localStorage.getItem("name");

  const logout = () => {
    localStorage.clear();
    window.location = "/";
  };

  return (
    <div>
      <h1>Welcome {name}</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
}
