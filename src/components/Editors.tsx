"use client";
import CodeMirror from "@uiw/react-codemirror";
import React from "react";
import { StreamLanguage } from "@codemirror/language";
import { go } from "@codemirror/legacy-modes/mode/go";

type EditorProps = {
  language?: string;
  displayName?: string;
  value?: string;
  onChange?: string;
  lineNumbers?: string;
  funtion?: string;
  theme?: string;
};

const goLang = `package main
import "fmt"

func main() {
  fmt.Println("Hello, 世界")
}`;

export const Editors = ({
  language,
  displayName,
  value,
  onChange,
  lineNumbers,
  funtion,
  theme,
}: EditorProps) => {
  return (
    <div className={"h-full w-full bg-slate-400"}>
      <div className="editor-title">{"displayName"}</div>
      <CodeMirror
        value={goLang}
        height="200px"
        extensions={[StreamLanguage.define(go)]}
      />
    </div>
  );
};
