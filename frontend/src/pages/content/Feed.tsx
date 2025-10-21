import { useState } from "react";
import { MessageCircle, Heart, Coins } from "lucide-react";

interface Post {
  id: number;
  user: string;
  mediaUrl: string;
  caption: string;
  bids: number[];
  comments: string[];
}

const Feed = () => {
  const [posts, setPosts] = useState<Post[]>([
    {
      id: 1,
      user: "GreenCycle Ltd",
      mediaUrl: "https://images.unsplash.com/photo-1606112219348-204d7d8b94ee?auto=format&fit=crop&w=900&q=80",
      caption: "500kg of plastic bottles ready for recycling ♻️",
      bids: [2500, 2700],
      comments: ["Looks good!", "Is it sorted by color?"],
    },
    {
      id: 2,
      user: "EcoMtaa",
      mediaUrl: "https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=900&q=80",
      caption: "Old electronics up for collection.",
      bids: [4000],
      comments: ["Can pick up tomorrow.", "Still available?"],
    },
  ]);

  const handleBid = (id: number, amount: number) => {
    setPosts(prev =>
      prev.map(post =>
        post.id === id ? { ...post, bids: [...post.bids, amount] } : post
      )
    );
  };

  const handleComment = (id: number, text: string) => {
    if (!text.trim()) return;
    setPosts(prev =>
      prev.map(post =>
        post.id === id ? { ...post, comments: [...post.comments, text] } : post
      )
    );
  };

  return (
    <main className="bg-gray-50 min-h-screen py-6 px-4">
      <h1 className="text-3xl font-bold text-eco-green text-center mb-10">
        ♻️ EcoLoop Feed
      </h1>

      <div className="max-w-3xl mx-auto space-y-10">
        {posts.map(post => (
          <div
            key={post.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100"
          >
            {/* User Info */}
            <div className="flex items-center px-6 py-4 border-b">
              <div className="w-10 h-10 bg-eco-green/20 rounded-full flex items-center justify-center font-bold text-eco-green uppercase">
                {post.user.charAt(0)}
              </div>
              <p className="ml-3 font-medium text-slate-700">{post.user}</p>
            </div>

            {/* Media */}
            <div className="w-full">
              <img
                src={post.mediaUrl}
                alt={post.caption}
                className="w-full h-96 object-cover"
              />
            </div>

            {/* Caption */}
            <div className="px-6 py-4 text-slate-700">{post.caption}</div>

            {/* Bids & Comments */}
            <div className="px-6 pb-4 space-y-3">
              <div className="flex items-center justify-between text-slate-500 text-sm">
                <div className="flex items-center gap-2">
                  <Coins size={18} className="text-yellow-500" />
                  <span>Highest Bid: KES {Math.max(...post.bids)} </span>
                </div>
                <div className="flex items-center gap-2">
                  <MessageCircle size={18} className="text-blue-500" />
                  <span>{post.comments.length} Comments</span>
                </div>
              </div>

              {/* Bid Input */}
              <div className="flex gap-2 mt-2">
                <input
                  type="number"
                  placeholder="Place a bid..."
                  className="flex-1 border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-eco-green/40"
                  onKeyDown={e => {
                    if (e.key === "Enter") {
                      handleBid(post.id, parseInt((e.target as HTMLInputElement).value));
                      (e.target as HTMLInputElement).value = "";
                    }
                  }}
                />
                <button
                  className="bg-eco-green text-white px-4 py-2 rounded-lg hover:bg-eco-green/90"
                  onClick={() =>
                    handleBid(post.id, Math.floor(Math.random() * 5000) + 1000)
                  }
                >
                  Bid
                </button>
              </div>

              {/* Comment Input */}
              <div className="flex gap-2 mt-2">
                <input
                  type="text"
                  placeholder="Add a comment..."
                  className="flex-1 border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-eco-green/40"
                  onKeyDown={e => {
                    if (e.key === "Enter") {
                      handleComment(post.id, (e.target as HTMLInputElement).value);
                      (e.target as HTMLInputElement).value = "";
                    }
                  }}
                />
                <button
                  className="bg-slate-200 px-3 py-2 rounded-lg hover:bg-slate-300"
                >
                  <Heart size={18} className="text-rose-500" />
                </button>
              </div>

              {/* Comments */}
              <div className="mt-4 space-y-1 text-slate-600 text-sm">
                {post.comments.map((c, i) => (
                  <p key={i}>💬 {c}</p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Feed;
