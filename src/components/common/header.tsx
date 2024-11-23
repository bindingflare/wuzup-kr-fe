import FC from "react";

const Header: FC = () => {
  return (
    <section className="bg-slate-300">
      <div className="fixed top-0 w-screen h-16 flex flex-row items-center justify-between px-4 my-2">
        <div>
          <h2>WUZUP KR</h2>
        </div>
        <div>
          <ul>
            <li>Credits</li>
          </ul>
        </div>
      </div>
      <div className="h-20"></div>
    </section>
  );
};

export default Header;
