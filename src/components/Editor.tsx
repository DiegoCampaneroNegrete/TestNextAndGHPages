// import React from "react";
// import "codemirror/lib/codemirror.css";
// import "codemirror/theme/3024-night.css";
// import "codemirror/theme/dracula.css";
// import "codemirror/theme/material-darker.css";
// import "codemirror/mode/clike/clike";
// import "codemirror/mode/clike/clike";
// import "codemirror/mode/powershell/powershell";
// import "codemirror/mode/xml/xml";
// import "codemirror/mode/python/python";
// import "codemirror/addon/hint/show-hint";
// import "codemirror/addon/hint/show-hint.css";
// // import { CodeMirror as ControlledEditor } from "@uiw/react-codemirror";
// import CodeMirror from "@uiw/react-codemirror";
// import { StreamLanguage } from "@codemirror/language";
// export default function CodeEditor(props) {
//   const {
//     language,
//     displayName,
//     value,
//     onChange,
//     lineNumbers,
//     funtion,
//     theme,
//   } = props;

//   function handleChange(editor: any, data: any, value: any) {
//     if (displayName !== "Console") {
//       onChange(value);
//     }
//   }

//   function isConsole(funtion: any) {
//     if (displayName === "Console") {
//       return (
//         <button type="button" className="run-btn" onClick={() => funtion()}>
//           {/* <FontAwesomeIcon icon={faPlay} /> Run Code */}
//           Run Code
//         </button>
//       );
//     } else if (displayName === "Test Cases") {
//       return (
//         <button type="button" className="run-btn" onClick={() => funtion()}>
//           {/* <FontAwesomeIcon icon={faPlayCircle} /> Run Test Cases */}
//           Run Test Cases
//         </button>
//       );
//     } else if (displayName.includes("Main")) {
//       return funtion();
//     }
//   }
//   return (
//     <div className={"editor-container"}>
//       <div className="editor-title">
//         {displayName}
//         {isConsole(funtion)}
//       </div>
//       <CodeMirror

//       />
//       {/* <ControlledEditor
//         onBeforeChange={handleChange}
//         value={value}
//         className="code-mirror-wrapper"
//         options={{
//           lineWrapping: true,
//           lint: true,
//           mode: language,
//           matchBrackets: true,
//           theme: theme === undefined ? "default" : theme,
//           lineNumbers: lineNumbers,
//           indentWithTabs: true,
//           autocomplete: javaLanguage,
//           extraKeys: {
//             "Ctrl-Space": "autocomplete",
//           },
//           smartIndent: true,
//           autofocus: true,
//         }}
//       /> */}
//     </div>
//   );
// }
