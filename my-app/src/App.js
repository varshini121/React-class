import ButtonComponent from "./components/FunctionalComponents/Button/Button-component";
import Ordered from "./components/FunctionalComponents/List/ordered-list/orderded-list";
import Unordered from "./components/FunctionalComponents/List/Unordered-list/unordered-list";
function App() {
  return (
    <div>
      <ButtonComponent />
      <Ordered></Ordered>
      <Unordered></Unordered>
      <ButtonComponent></ButtonComponent>
      <Ordered></Ordered>
      <Unordered></Unordered>
      <ButtonComponent></ButtonComponent>
      <Unordered></Unordered>
    </div>
  );
}
export default App;
