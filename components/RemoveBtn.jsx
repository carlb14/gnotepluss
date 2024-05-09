"use client";


import { useRouter } from "next/navigation";
import TrashCan from "@/assets/trashcan";
export default function RemoveBtn({ id }) {
  const router = useRouter();
  const removeTopic = async () => {
    const confirmed = confirm("Are you sure?");

    if (confirmed) {
      const res = await fetch(`/api/topics/?id=${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        router.refresh();
      }
    }
  };

  return (
    <button onClick={removeTopic} >
      <TrashCan className="w-5 h-5"/>
    </button>
  );
}
