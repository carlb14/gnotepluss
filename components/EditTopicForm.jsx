"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
export default function EditTopicForm({ id, title, description }) {
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`/api/topics/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ newTitle, newDescription }),
      });

      if (!res.ok) {
        throw new Error("Failed to update topic");
      }

      router.refresh();
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 p-3 w-full">
    <fieldset className="p-1 w-full rounded-md border border-neutral-600">
      <legend className="p-1 mx-2 text-xs text-neutral-600">
       New Title:
      </legend>
      <input
        onChange={(e) => setNewTitle(e.target.value)}
        value={newTitle}
        className="mx-1 w-full text-sm outline-none"
        type="text"
        placeholder="Topic Title"
      />
    </fieldset>

    <fieldset className="p-1 w-full rounded-md border border-neutral-600">
      <legend className="p-1 mx-2 text-xs text-neutral-600">
       New Content:
      </legend>
      <input
        onChange={(e) => setNewDescription(e.target.value)}
        value={newDescription}
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
