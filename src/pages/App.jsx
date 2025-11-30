const CenterLayout = ({ children }) => (
    <div
        style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "1rem",
            padding: "1rem",
            boxSizing: "border-box"
        }}
    >
        {children}
    </div>
);
// src/App.jsx
const App = () => {
  return (
    <>
  <h1>oi bb</h1>
    </>
  )
}
export default App