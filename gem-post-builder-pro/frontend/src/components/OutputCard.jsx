const OutputCard = ({ result }) => {
  if (!result) return null;

  return (
    <div className="bg-pastel-blue p-5 mt-6 rounded-xl shadow max-w-lg w-full">
      <h3 className="font-semibold text-gray-700 mb-2">
        Platform: {result.platform}
      </h3>
      <p className="text-gray-800 whitespace-pre-wrap">{result.post}</p>
    </div>
  );
};

export default OutputCard;
