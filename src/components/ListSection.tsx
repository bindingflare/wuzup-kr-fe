import FC from "react";
import KeywordList from "./KeywordList.tsx";

interface ListSectionProps {
  data: JSON;
  loading: boolean;
}

const ListSection: FC = ({ data, loading }: ListSectionProps) => {
  return (
    <section>
      <div className="wrapper min-h-[66vh]">
        {data ? (
          <>
            {data.map((item, index) => (
              <KeywordList comments={item.comments} title={item.title} />
            ))}
          </>
        ) : (
          !loading && <div className="mx-auto">No data available</div>
        )}
      </div>
      {/* <div>
        <h2>Debugging:</h2>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div> */}
    </section>
  );
};

export default ListSection;
