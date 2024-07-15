// eslint-disable-next-line react/prop-types
const Container = ({ children }) => {
    return (
      <div className="w-full h-screen bg-slate-900 overflow-x-hidden min-w-[320px] mx-auto text-white">
        {children}
      </div>
    );
  };
  
  export default Container;