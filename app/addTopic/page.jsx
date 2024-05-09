"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function AddTopic() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description) {
      alert("Title and description are required.");
      return;
    }

    try {
      const res = await fetch("/api/topics/", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ title, description }),
      });

      if (res.ok) {
        router.push("/");
      } else {
        throw new Error("Failed to create a topic");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 p-3 w-full">
      <fieldset className="p-1 w-full rounded-md border border-neutral-600">
        <legend className="p-1 mx-2 text-xs text-neutral-600">
          Title:
        </legend>
        <input
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          className="mx-1 w-full text-sm outline-none"
          type="text"
          placeholder="Topic Title"
        />
      </fieldset>

      <fieldset className="p-1 w-full rounded-md border border-neutral-600">
        <legend className="p-1 mx-2 text-xs text-neutral-600">
          Content:
        </legend>
        <input
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className="mx-1 w-full text-sm outline-none"
          type="text"
          placeholder="Topic Description"
        />
      </fieldset>
      <section className="flex gap-4 items-center">
        <button
          type="submit"
          className="p-2 text-sm bg-gray-200 rounded-md shadow-md text-neutral-700 font-regular w-fit"
        >
          Add Topic
        </button>
        <Link href={'/'} className="text-sm text-red-500">Back?</Link>
      </section>
    </form>
  );
}
