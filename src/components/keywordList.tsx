import FC from "react";

interface KeywordListProps {
  title: string,
  keywords: string[];
}

const KeywordList: FC<KeywordListProps> = ({ title, keywords }) => {
  return (
    <div className="w-full bg-slate-400 rounded-md px-2 my-2">
      <div className="bg-white rounded-md px-2 my-2">
        <h2>{title}</h2>
      </div>
      <ul className="text-left">
        {keywords.map((keyword, index) => (
          <li key={index}>{keyword}</li>
        ))}
      </ul>
    </div>
  );
};

export default KeywordList;
