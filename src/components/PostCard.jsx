const PostCard = ({ post }) => (
  <div className="card p-6 mb-4">
    <div className="flex items-center gap-3 mb-4">
      <div className="h-10 w-10 bg-slate-200 rounded-full"></div>
      <div>
        <h4 className="font-semibold text-slate-800">{post.author}</h4>
        <span className="text-xs text-slate-400">{post.timestamp}</span>
      </div>
    </div>
    <h3 className="text-xl font-bold mb-2">{post.title}</h3>
    <p className="text-slate-600 mb-4">{post.content}</p>
    <div className="flex gap-4 border-t pt-4">
      <button className="text-slate-500 hover:text-blue-600 text-sm font-medium">Like ({post.likes})</button>
      <button className="text-slate-500 hover:text-blue-600 text-sm font-medium">Comment</button>
    </div>
  </div>
);

export default PostCard;