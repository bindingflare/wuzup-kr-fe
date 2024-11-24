import FC from "react";

interface KeywordListProps {
  title: string;
  comments: {
    id: number;
    content: string;
  }[];
}

const KeywordList: FC<KeywordListProps> = ({ title, comments }) => {
  return (
    <div className="w-full border-black border-2 rounded-md px-2 my-2">
      <div className="px-2 my-2">
        <h2>{title}</h2>
      </div>
      <hr />
      <ul className="text-left">
        {comments.map((comments, index) => (
          <>
            {index % 2 == 0 ? (
              <li key={index} className="bg-slate-300">{comments.content}</li>
            ) : (
              <li key={index}>{comments.content}</li>
            )}
            <hr />
          </>
        ))}
      </ul>
    </div>
  );
};

export default KeywordList;
