import Template from "../Template/Template";
import styled from "styled-components";
import { useRef, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function PostTest() {
  const [postData, setPostData] = useState({});
  const quillRef = useRef(null);

  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
      [{ align: [] }, { color: [] }, { background: [] }],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "link",
    "image",
    "align",
    "color",
    "background",
  ];

  return (
    <Template>
      <Wrap>
        <ReactQuill
          ref={quillRef}
          style={{ height: "600px" }}
          theme="snow"
          modules={modules}
          formats={formats}
          value={postData || ""}
          onChange={(content, delta, source, editor) => {
            console.log(`content: ${content}`);
            console.log(delta);
            console.log(source);
            console.log(editor);
          }}
        />
      </Wrap>
    </Template>
  );
}

export default PostTest;

const Wrap = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
