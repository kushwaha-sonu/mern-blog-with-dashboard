const Logo = () => {
  return (
    <div className="flex items-center w-full text-xl justify-center gap-1 p-3 md:text-2xl font-bold bg-gradient-to-r from-blue-500 to-pink-500/70 rounded-lg text-white hover:bg-gradient-to-tl transition-all cursor-pointer">
      <span className="text-gray-900">Blog</span>
      <span className="bg-gradient-to-r from-gray-900/70 to-gray-900 bg-clip-text text-transparent">Ease</span>
    </div>
  );
};

export default Logo;
