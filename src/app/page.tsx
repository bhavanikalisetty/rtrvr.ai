// page.tsx

"use client";

import React, { useEffect, useRef, useState, FormEvent } from "react";
import Header from "@/components/Header";
import Box from "@/components/Elements/Box";
import { useChat } from "ai/react";
import { AiFillGithub } from "react-icons/ai";

const Page: React.FC = () => {
  const [gotMessages, setGotMessages] = useState(false);
  const [context, setContext] = useState<string[] | null>(null);
  const [isModalOpen, setModalOpen] = useState(false);

  const { messages, input, handleInputChange, handleSubmit } = useChat({
    onFinish: async () => {
      setGotMessages(true);
    },
  });

  const prevMessagesLengthRef = useRef(messages.length);

  const handleMessageSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSubmit(e);
    setContext(null);
    setGotMessages(false);
  };


  useEffect(() => {
    const getContext = async () => {
      const response = await fetch("/api/context", {
        method: "POST",
        body: JSON.stringify({
          messages,
        }),
      });
      const { context } = await response.json();
      setContext(context.map((c: any) => c.id));
    };
    if (gotMessages && messages.length >= prevMessagesLengthRef.current) {
      getContext();
    }

    prevMessagesLengthRef.current = messages.length;
  }, [messages, gotMessages]);

  const [activeBox, setActiveBox] = useState<null | 'box1' | 'box2'>(null);

  function handleBoxClick(boxId: 'box1' | 'box2') {
    setActiveBox(activeBox === boxId ? null : boxId); // Toggle or reset
  }

  return (
    <div className="flex flex-col justify-between h-screen bg-gray-800 p-2 mx-auto w-screen">
      <Header className="my-5" />

      <button
        onClick={() => {
          window.open(
            "https://github.com/arjunchint/rtrvr.ai",
            "_blank"
          );
        }}
        className="fixed right-12 top-4 md:right-12 md:top-6 text-xl text-white github-button"
      >
        <AiFillGithub />
      </button>

      <div className="flex w-1/2 flex-grow overflow-hidden relative flex-col md:flex-row justify-center mx-auto gap-4">
        <Box id="box1" activeBox={activeBox} handleBoxClick={handleBoxClick} href="/build-datasets" className="mb-4 md:mb-0" />
        <Box id="box2" activeBox={activeBox} handleBoxClick={handleBoxClick} href="/explore-data-marketplace" />
      </div>

    </div>
  );
};

export default Page;
