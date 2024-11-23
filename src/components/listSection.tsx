import FC from "react";
import KeywordList from "./keywordList.tsx";

const ListSection: FC = () => {
  const keywords = ['hi', 'hihi', 'hihihi'];

  return (
    <section>
      <div className="min-h-[400px] wrapper">
        <KeywordList keywords={keywords} title="test 1" />
        <KeywordList keywords={keywords} title="test 2" />
        <KeywordList keywords={keywords} title="test 3" />
      </div>
    </section>
  );
};

export default ListSection;
