// /src/hooks/useGemini.js
export const getSocialPost = async ({ topic, platform }) => {
  const res = await fetch("http://localhost:5000/generate-post", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ topic, platform }),
  });

  if (!res.ok) throw new Error("Failed to generate post");

  const data = await res.json();
  return data.post;
};
