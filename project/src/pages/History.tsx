import React from 'react';
import { Brain } from 'lucide-react';

const History = () => {
  // Mock data for solved problems
  const solvedProblems = [
    {
      id: 1,
      date: '2024-03-15',
      problem: '2x + 3 = 7',
      solution: 'x = 2',
      thumbnail: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=200',
    },
    {
      id: 2,
      date: '2024-03-14',
      problem: 'y² - 4 = 0',
      solution: 'y = ±2',
      thumbnail: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=200',
    },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">Solved Problems</h1>
        <div className="text-gray-600">
          Total problems solved: {solvedProblems.length}
        </div>
      </div>

      {solvedProblems.length === 0 ? (
        <div className="text-center py-12">
          <Brain className="h-16 w-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-xl font-medium text-gray-600 mb-2">No problems solved yet</h3>
          <p className="text-gray-500">Start solving math problems to build your history</p>
        </div>
      ) : (
        <div className="grid gap-6">
          {solvedProblems.map((problem) => (
            <div
              key={problem.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="flex">
                <div className="w-48 h-48 flex-shrink-0">
                  <img
                    src={problem.thumbnail}
                    alt="Problem thumbnail"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 flex-grow">
                  <div className="text-sm text-gray-500 mb-2">{problem.date}</div>
                  <div className="mb-4">
                    <h3 className="text-xl font-semibold mb-2">Problem:</h3>
                    <div className="bg-gray-50 p-3 rounded-lg font-mono">
                      {problem.problem}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Solution:</h3>
                    <div className="bg-gray-50 p-3 rounded-lg font-mono">
                      {problem.solution}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default History;