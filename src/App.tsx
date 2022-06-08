import "./styles.css";
import type { VFC } from "react";

export const App: VFC = () => {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
};

// propsに直接型注釈を指定するパターン
// React.VFC<P>のジェネリック型<P>として型を指定するパターン
// どちらのパターンで書いても結果は変わりません。
