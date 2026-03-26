import Sidebar from '../components/Sidebar';
import PostCard from '../components/PostCard';

const Forum = () => {
  const posts = [
    { author: 'Jordan Lee', title: 'Tips for Hackathons?', content: 'What are your best tips for 24-hour hackathons?', likes: 12, timestamp: '2h ago' },
    { author: 'Taylor Swift', title: 'React vs Vue in 2026', content: 'Discussion on the current ecosystem state.', likes: 45, timestamp: '5h ago' },
  ];

  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <main className="flex-grow md:ml-64 p-8">
        <div className="flex justify-between items-center mb-8 max-w-4xl">
          <h2 className="text-3xl font-bold">Community Forum</h2>
          <button className="btn-primary">New Post</button>
        </div>
        <div className="max-w-4xl">
          {posts.map(p => <PostCard key={p.title} post={p} />)}
        </div>
      </main>
    </div>
  );
};

export default Forum;