import { version, Select, Option } from "@ui5/webcomponents-react";

// mock intrinsic element types
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [key: string]: any;
    }
  }
}

function App() {
  return (
    <>
      UI5WCR Version: {version}
      <br />
      Select wrapped by UI5WCR wrapper:
      <br />
      <Select value="Orange">
        <Option>Apple</Option>
        <Option>Orange</Option>
      </Select>
      <br />
      Plain ui5-select:
      <br />
      <ui5-select value="Orange">
        <ui5-option>Apple</ui5-option>
        <ui5-option>Orange</ui5-option>
      </ui5-select>
    </>
  );
}

export default App;
