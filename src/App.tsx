import {
  ComboBox,
  ComboBoxItem,
  ComboBoxDomRef,
} from "@ui5/webcomponents-react";

import { useEffect, useRef } from "react";

// mock
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [key: string]: any;
    }
  }
}

function App() {
  const cbRef = useRef(null);

  useEffect(() => {
    const cbElement = cbRef.current as ComboBoxDomRef | null;
    if (cbElement) {
      cbElement.addEventListener("change", console.log);
    }
    return () => {
      if (cbElement) {
        cbElement.removeEventListener("change", console.log);
      }
    };
  }, []);

  return (
    <>
      {/*w/o ui5 wcr wrapper*/}
      <ui5-combobox ref={cbRef} value="ComboBox Entry 1">
        <ui5-cb-item text="ComboBox Entry 1" />
        <ui5-cb-item text="ComboBox Entry 2" />
        <ui5-cb-item text="ComboBox Entry 3" />
      </ui5-combobox>
      {/*w/ ui5wcr wrapper*/}
      <ComboBox onChange={console.log} value="ComboBox Entry 1">
        <ComboBoxItem text="ComboBox Entry 1" />
        <ComboBoxItem text="ComboBox Entry 2" />
        <ComboBoxItem text="ComboBox Entry 3" />
      </ComboBox>
    </>
  );
}

export default App;
