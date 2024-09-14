import React, { useState, useEffect } from 'react';

const Dashboard = ({ name = 'user' }) => {
  // States for individual platform data
  const [leetCodeData, setLeetCodeData] = useState({
    totalSolved: 0,
  });
  const [gfgData, setGfgData] = useState({
    totalProblemsSolved: 0,
  });
  const [codeforcesData, setCodeforcesData] = useState({
    totalSolved: 0,
  });
  const [hackerrankData, setHackerrankData] = useState({
    totalSolved: 0,
  });

  const [userIDs, setUserIDs] = useState({
    leetCodeID: '',
    gfgID: '',
    codeforcesID: '',
    hackerrankID: '',
  });
  const [isDataFetched, setIsDataFetched] = useState(false);

  useEffect(() => {
    if (isDataFetched) {
      fetchData();
    }
  }, [isDataFetched]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsDataFetched(true);
  };

  const fetchData = async () => {
    const { leetCodeID, gfgID, codeforcesID, hackerrankID } = userIDs;

    try {
      const promises = [];
      if (leetCodeID) promises.push(fetchLeetCodeData(leetCodeID));
      if (gfgID) promises.push(fetchGFGData(gfgID));
      if (codeforcesID) promises.push(fetchCodeforcesData(codeforcesID));
      if (hackerrankID) promises.push(fetchHackerrankData(hackerrankID));

      const results = await Promise.all(promises);

      results.forEach((result) => {
        if (result.platform === 'LeetCode') setLeetCodeData(result.data);
        if (result.platform === 'GFG') setGfgData(result.data);
        if (result.platform === 'Codeforces') setCodeforcesData(result.data);
        if (result.platform === 'HackerRank') setHackerrankData(result.data);
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchLeetCodeData = async (id) => {
    try {
      const response = await fetch(`https://leetcode-stats-api.herokuapp.com/${id}`);
      if (!response.ok) throw new Error('Network response was not ok');
      const data = await response.json();
      return {
        platform: 'LeetCode',
        data: {
          totalSolved: data.totalSolved || 0,
        },
      };
    } catch (error) {
      console.error("Error fetching LeetCode data:", error);
      return { platform: 'LeetCode', data: { totalSolved: 0 } };
    }
  };

  const fetchGFGData = async (id) => {
    try {
      const response = await fetch(`https://geeks-for-geeks-api.vercel.app/${id}`);
      if (!response.ok) throw new Error('Network response was not ok');
      const data = await response.json();
      return {
        platform: 'GFG',
        data: {
          totalProblemsSolved: data.totalProblemsSolved || 0,
        },
      };
    } catch (error) {
      console.error("Error fetching GFG data:", error);
      return { platform: 'GFG', data: { totalProblemsSolved: 0 } };
    }
  };
  // sample for codeforces
  const fetchCodeforcesData = async (id) => {
    try {
      const response = await fetch(`https://codeforces.com/api/user.info?handles=${id}`);
      if (!response.ok) throw new Error('Network response was not ok');
      const data = await response.json();
      return {
        platform: 'Codeforces',
        data: {
          totalSolved: data.result[0].solvedProblems || 0,
        },
      };
    } catch (error) {
      console.error("Error fetching Codeforces data:", error);
      return { platform: 'Codeforces', data: { totalSolved: 0 } };
    }
  };
  // sample for hackkerrank
  const fetchHackerrankData = async (id) => {
    try {
      const response = await fetch(`https://www.hackerrank.com/rest/contests/master/leaderboard/${id}`);
      if (!response.ok) throw new Error('Network response was not ok');
      const data = await response.json();
      return {
        platform: 'HackerRank',
        data: {
          totalSolved: data.totalSolved || 0,
        },
      };
    } catch (error) {
      console.error("Error fetching HackerRank data:", error);
      return { platform: 'HackerRank', data: { totalSolved: 0 } };
    }
  };

  return (
    <div className="bg-[#1c1c1b] text-[#E0E0E0] min-h-screen p-10">
      <div className="text-center mb-10">
        <h1 className="text-5xl font-bold text-yellow-500">Hi, {name}</h1>
        <p className="text-lg text-[#E0E0E0] mt-2">Let’s track your coding journey and see your growth.</p>
      </div>

      {!isDataFetched && (
        <form onSubmit={handleSubmit} className="mb-10 text-center">
          <h2 className="text-2xl font-bold mb-4">Enter Your User IDs</h2>
          <div className="flex justify-center gap-5 mb-5 flex-wrap">
            <input
              type="text"
              placeholder="LeetCode ID"
              value={userIDs.leetCodeID}
              onChange={(e) => setUserIDs({ ...userIDs, leetCodeID: e.target.value })}
              className="p-3 outline-none bg-[#E0E0E0] text-[#121212] rounded"
            />
            <input
              type="text"
              placeholder="GeeksforGeeks ID"
              value={userIDs.gfgID}
              onChange={(e) => setUserIDs({ ...userIDs, gfgID: e.target.value })}
              className="p-3 outline-none bg-[#E0E0E0] text-[#121212] rounded"
            />
            <input
              type="text"
              placeholder="Codeforces ID"
              value={userIDs.codeforcesID}
              onChange={(e) => setUserIDs({ ...userIDs, codeforcesID: e.target.value })}
              className="p-3 outline-none bg-[#E0E0E0] text-[#121212] rounded"
            />
            <input
              type="text"
              placeholder="HackerRank ID"
              value={userIDs.hackerrankID}
              onChange={(e) => setUserIDs({ ...userIDs, hackerrankID: e.target.value })}
              className="p-3 outline-none bg-[#E0E0E0] text-[#121212] rounded"
            />
          </div>
          <button
            type="submit"
            className="text-[#f7d185] font-bold bg-[#f7d185] bg-opacity-30 px-6 py-3 rounded-md hover:bg-opacity-50"
            disabled={!Object.values(userIDs).some(id => id)}
          >
            Fetch Data
          </button>
        </form>
      )}

      {isDataFetched && (
        <div className="flex justify-center gap-5 mb-10 flex-wrap">
          {/* LeetCode Card */}
          <div className="bg-[#121212] shadow-lg p-6 rounded-lg text-center flex-1 min-w-[200px]">
            <h4 className='text-yellow-500 text-6xl mb-4'>{leetCodeData.totalSolved}</h4>
            <p className='mb-2 font-light'>Total Solved</p>
            <h2 className="text-xl mb-2 text-yellow-500">LeetCode</h2>
          </div>

          {/* GFG Card */}
          <div className="bg-[#121212] shadow-lg p-6 rounded-lg text-center flex-1 min-w-[200px]">
            <p className='text-yellow-500 text-6xl mb-4'>{gfgData.totalProblemsSolved}</p>
            <p className='mb-2 font-light'>Total Solved</p>
            <h2 className="text-xl mb-2 text-yellow-500">GeeksforGeeks</h2>
          </div>

          {/* Codeforces Card */}
          <div className="bg-[#121212] shadow-lg p-6 rounded-lg text-center flex-1 min-w-[200px]">
            <h4 className='text-yellow-500 text-6xl mb-4'>{codeforcesData.totalSolved}</h4>
            <p className='mb-2 font-light'>Total Solved</p>
            <h2 className="text-xl mb-2 text-yellow-500">CodeForces</h2>
          </div>

          {/* HackerRank Card */}
          <div className="bg-[#121212] shadow-lg p-6 rounded-lg text-center flex-1 min-w-[200px]">
            <h4 className='text-yellow-500 text-6xl mb-4'>{hackerrankData.totalSolved}</h4>
            <p className='mb-2 font-light'>Total Solved</p>
            <h2 className="text-xl mb-2 text-yellow-500">HackerRank</h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;