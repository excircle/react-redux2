import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  const baseUrl = process.env.REACT_APP_API_URL;
  console.log(baseUrl + "!");
  return (
    <div>
      <h1>Fuck IPv6!</h1>
    </div>
  );
}