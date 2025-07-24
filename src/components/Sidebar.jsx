import React, { useState } from "react";
import { X, MapPin, ThumbsUp } from "lucide-react";

const Sidebar = ({ isLoggedIn }) => {
  const [groups, setGroups] = useState([
    { name: "Leisure", followed: true },
    { name: "Activism", followed: false },
    { name: "MBA", followed: false },
    { name: "Philosophy", followed: false },
  ]);

  const toggleFollow = (index) => {
    if (!isLoggedIn) return; // Block if not logged in
    const updated = [...groups];
    updated[index].followed = !updated[index].followed;
    setGroups(updated);
  };

  return (
    <aside className="hidden lg:block w-72 p-4">
      {/* ...Location Section... */}

      <div>
        <div className="flex items-center gap-2 mb-3 text-gray-700 font-medium">
          <ThumbsUp className="w-4 h-4" />
          RECOMMENDED GROUPS
        </div>
        <ul className="space-y-3">
          {groups.map((group, idx) => (
            <li key={idx} className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <img
                  src={`https://source.unsplash.com/random/24x24?sig=${idx}`}
                  alt={group.name}
                  className="w-6 h-6 rounded-full"
                />
                <span className="text-sm">{group.name}</span>
              </div>
              <button
                disabled={!isLoggedIn}
                onClick={() => toggleFollow(idx)}
                className={`text-xs px-3 py-1 rounded ${
                  group.followed
                    ? "bg-gray-300 text-gray-700"
                    : "border border-blue-500 text-blue-600"
                } ${!isLoggedIn ? "opacity-50 cursor-not-allowed" : ""}`}
              >
                {group.followed ? "Followed" : "Follow"}
              </button>
            </li>
          ))}
        </ul>
        <button className="text-blue-500 text-sm mt-4 hover:underline">
          See More...
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;

