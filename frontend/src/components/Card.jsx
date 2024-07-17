/* eslint-disable react/prop-types */

const Card = ({ post }) => {
  console.log(post);
  return (
    <div className="card border p-2 rounded-md border-slate-200">
      <div className="card-header">
        <p className="text-center py-4 font-semibold text-xl md:text-2xl">
          {post.title}
        </p>
      </div>
      <div className="card-body">
        <div className="p-4 overflow-hidden">
          <img
            className="object-cover hover:scale-105 transition-all"
            src={post.image}
            alt={post.title}
          />
        </div>
        <div className="p-2">
          <p className="truncate">{post.description}</p>
        </div>
        <div className="p-2 flex items-center justify-between">
            <p className="text-sm text-gray-600">
                By {post.author} on {post.date}
            </p>
            <div className="border rounded-lg p-1">
                <img
                    className="w-10 h-10 rounded-full object-cover"
                    src={post.author_image}
                    alt={post.author}
                />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
