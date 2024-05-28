import React, { useState } from "react";
import emailjs from "emailjs-com";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import "./ComposeEmail.css";

const ComposeEmail = () => {
  //set text
  const [text, setText] = useState("");

  //set email
  const [email, setEmail] = useState();

  //set subject
  const [subject, setSubject] = useState("");

  //state for recipient
  const [recipient, setRecipient] = useState("");

  //state for attachments
  const [attachments, setAttachments] = useState([]);

  //state for body
  const [body, setBody] = useState("");

  //handle subject change
  const subjectHnadleChange = (e) => setSubject(e.target.value);

  //handle recipient
  const recipientHandleChange = (e) => setRecipient(e.target.value);

  //handle body text
  const handleBodyChange = (value) => {
    setBody(value);
  };

  //handle text
  const handleChange = (event) => {
    setText(event.target.value);
  };

  //handle email
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  //handle file change
  const handleFileChange = (e) => {
    const files = Array.from(e.target.value);
    setAttachments(files);
  };

  //handle email
  const handleSendEmail = async () => {
    const formData = new FormData();
    formData.append("subject", subject);
    formData.append("recipient", recipient);
    attachments.forEach((file, index) => {
      formData.append(`attachment_${index}`, file);
    });

    try {
      const response = await axios.post("/send-mail", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("Email send successfully", response.data);
    } catch (error) {
      console.error("Error sending mail:", error);
    }
  };

  return (
    <>
      <div className=" h-[84%] w-[100%] mt-2 flex justify-around">
        <div className="h-[100%] w-[40%] flex justify-center  flex-col gap-5">
          <div className=" flex items-center">
            <input
              type="text"
              placeholder="Recipient"
              value={recipient}
              className="h-10 w-[50%] outline-none  p-2  rounded"
              onChange={recipientHandleChange}
              required
            />
            <input
              type="text"
              placeholder="Subject"
              className="h-10 w-[50%] ml-2 rounded p-2 outline-none"
              value={subject}
              onChange={subjectHnadleChange}
            />
          </div>

          <ReactQuill
            value={body}
            className="bg-white h-[80%] rounded-2xl outline-none border-none shadow-2xl "
            onChange={handleBodyChange}
          />
          <div className="mt-5 shadow-sm h-20 items-center flex justify-between">
            <div className="flex flex-col items-center">
              <label className="bg-blue-500 text-white py-2 px-4 rounded cursor-pointer hover:bg-blue-600 transition duration-300">
                <input
                  type="file"
                  className="hidden"
                  multiple
                  onChange={handleFileChange}
                />
                Choose File
              </label>
            </div>

            <button
              onClick={handleSendEmail}
              className="bg-red-500 h-10 w-20 rounded-md mr-8"
            >
              Send
            </button>
          </div>
        </div>

        <div className="h-[100%] w-[40%]   flex justify-center flex-col gap-3 ">
          <div className="h-[80%] w-[99%]  bg-white mt-1 rounded-2xl shadow-2xl mb-28">
            <div className="w-full h-20 bg-blue-300 flex items-center justify-center rounded-t-lg">
              <h3 className="font-bold text-white  text-3xl ">Preview</h3>
            </div>
            <div
              className="p-2"
              dangerouslySetInnerHTML={{ __html: body }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ComposeEmail;
