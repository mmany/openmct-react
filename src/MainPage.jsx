import { useNavigate } from "react-router-dom";

function MainPage() {
  const navigate = useNavigate();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
      }}
    >
      <button onClick={() => navigate("/sub")}>Go To Sub page</button>
      <button onClick={() => navigate("/openmct")}>Go to openmct</button>
    </div>
  );
}

export { MainPage };
