"use client"
import { useState, useEffect } from "react";
import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import Pencil from "@/assets/pencil";
import Loading from "./loaidngscreen.jsx"; // Assuming you have a loading component

const getTopics = async () => {
  try {
    const res = await fetch("/api/topics/", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading topics: ", error);
    return { topics: [] }; // Return an empty array in case of error
  }
};

export default function TopicsList() {
  const [loading, setLoading] = useState(true);
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    const fetchTopics = async () => {
      try {
        const { topics } = await getTopics();
        setTopics(topics);
        setLoading(false); // Set loading to false after topics are fetched
      } catch (error) {
        console.log("Error fetching topics:", error);
        setLoading(false); // Set loading to false in case of error
      }
    };

    fetchTopics();

    const intervalId = setInterval(fetchTopics, 10000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      {loading ? (
        <Loading /> // Show loading indicator if topics are being fetched
      ) : (
        topics.map((t) => (
          <div
            key={t._id}
            className="flex gap-5 justify-between items-start p-4 my-2 bg-gray-200 rounded-md shadow-md"
          >
            <div>
              <h2 className="text-sm font-medium text-neutral-700">
                <span className="text-neutral-600">Title:</span> {t.title}
              </h2>
              <p className="text-neutral-700">
                <span className="text-sm text-neutral-600">Content: </span>
                {t.description}
              </p>
            </div>
            <div className="flex gap-2 items-center">
              <RemoveBtn id={t._id} />
              <Link href={`/editTopic/${t._id}`}>
                <Pencil className="w-5 h-5" />
              </Link>
            </div>
          </div>
        ))
      )}
    </>
  );
}
