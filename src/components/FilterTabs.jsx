import React from 'react'

const FilterTabs = () => {
  return (
<div className="flex flex-col sm:flex-row justify-between gap-4 items-start sm:items-center px-4 py-3 border-b bg-white">
      <div className="space-x-4 text-gray-600 font-medium">
        <button>All Posts</button>
        <button>Jobs</button>
        <button>Events</button>
        <button>Resources</button>
      </div>
      <div className="flex gap-2">
        <button className="border rounded px-4 py-1">Write a Post</button>
        <select className="border rounded px-4 py-1">
          <option>Join Group</option>
        </select>
      </div>
    </div>
  )
}

export default FilterTabs