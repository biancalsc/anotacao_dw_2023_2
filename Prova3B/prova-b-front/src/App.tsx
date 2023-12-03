import Colors from "./Components/colors";
import { ColorProvider } from "./contexts/Context";

function App() {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <ColorProvider>
        <Colors />
      </ColorProvider>
    </div>
  );
}

export default App;
