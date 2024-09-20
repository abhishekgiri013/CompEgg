import React, { useState, useEffect } from 'react';
import { Doughnut, Pie } from 'react-chartjs-2';
import 'chart.js/auto';
import LeetCodeAnalysis from '../analysis/LeetCodeAnalysis';
import loader from "/assets/loader.gif";
import HeatMap from '../componets/HeatMap';

const Dashboard = ({ name = 'user' }) => {

  const [leetCodeData, setLeetCodeData] = useState({
    totalSolved: 0,
    easy: 0,
    medium: 0,
    hard: 0,
    ranking: 0,
    acceptanceRate: 0,
    badgesCount: 0,
    badges: [],
    recentSubmissions: [],
    languages: [],
    submissionTimeline: {},
  });
  const [gfgData, setGfgData] = useState({ totalProblemsSolved: 0, school: 0, basic: 0, hard: 0 });
  const [codeforcesData, setCodeforcesData] = useState({ totalSolved: 0, contests: 0, rank: 0 });
  const [hackerrankData, setHackerrankData] = useState({ totalSolved: 0, rank: 0 });
  const [userIDs, setUserIDs] = useState({ leetCodeID: '', gfgID: '', codeforcesID: '', hackerrankID: '' });
  const [isDataFetched, setIsDataFetched] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

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
    setIsLoading(true);
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
      console.error('Error fetching data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // const fetchLeetCodeData = async (id) => {
  //   try {
     
  //     const submissionResponse = await fetch(`https://alfa-leetcode-api.onrender.com/userProfile/${id}`);
  //     const profileResponse = await fetch(`https://alfa-leetcode-api.onrender.com/${id}`);
  //     const timelineResponse = await fetch(`https://alfa-leetcode-api.onrender.com/userProfileCalendar?username=${id}&year=2024`);
  //     const langSolvedResponse = await fetch(`https://alfa-leetcode-api.onrender.com/languageStats?username=${id}`);
  //     const badgesResponse = await fetch(`https://alfa-leetcode-api.onrender.com/${id}/badges`);
  //     // const userdataleetcode = await fetch(`https://alfa-leetcode-api.onrender.com/userProfile/${id}`);

  //     if (!badgesResponse.ok || !langSolvedResponse.ok || !userdataleetcode.ok) throw new Error('Network response was not ok');

  //     const profileData = await profileResponse.json();
  //     const submissionData = await submissionResponse.json();
  //     const timelineData = await timelineResponse.json();

  //     const langSolvedData = await langSolvedResponse.json();
  //     const badgesData = await badgesResponse.json();
  //     const userData = await userdataleetcode.json();

  //     console.log('Canlender Data:', userData.submissionCalendar);
  //     // console.log('Profile Data:', profileData);

  //     return {
  //       platform: 'LeetCode',
  //       data: {
  //         totalSolved: userData.totalSolved || 0,
  //         easy: userData.easySolved || 0,
  //         medium: userData.mediumSolved || 0,
  //         hard: userData.hardSolved || 0,
  //         ranking: userData.ranking || 0,
  //         recentSubmissions: userData.recentSubmissions || [],
  //         // acceptanceRate: profileData.acceptanceRate || 0,
  //         languages: langSolvedData.matchedUser.languageProblemCount || [],
  //         badges: badgesData.badges || [],
  //         badgesCount: badgesData.badgesCount || 0,
  //         submissionTimeline: userData.submissionCalendar || {},
  //         totalSubmissions: userData.totalSubmissions.find(submission => submission.difficulty === "All").submissions || 0,
  //       },
  //     };
  //   } catch (error) {
  //     console.error('Error fetching LeetCode data:', error);
  //     return {
  //       platform: 'LeetCode', data: {
  //         totalSolved: 0, easy: undefined, medium: undefined, hard: undefined,
  //         ranking: undefined,
  //         recentSubmissions: undefined,
  //         languages: undefined,
  //         badges: undefined,
  //         badgesCount: undefined,
  //         submissionTimeline: undefined,
  //         totalSubmissions: undefined,
  //       }
  //     };
  //   }
  // };

  const fetchLeetCodeData = async (id) => {
    try {

      const profileResponse = await fetch(`https://alfa-leetcode-api.onrender.com/${id}`);
      const langSolvedResponse = await fetch(`https://alfa-leetcode-api.onrender.com/languageStats?username=${id}`);
      const submissionResponse = await fetch(`https://alfa-leetcode-api.onrender.com/userProfile/${id}`);
      const badgesResponse = await fetch(`https://alfa-leetcode-api.onrender.com/${id}/badges`);
      const timelineResponse = await fetch(`https://alfa-leetcode-api.onrender.com/userProfileCalendar?username=${id}&year=2024`);

      if (!submissionResponse.ok || !profileResponse.ok || !badgesResponse.ok || !langSolvedResponse.ok || !timelineResponse.ok) throw new Error('Network response was not ok');

      const profileData = await profileResponse.json();
      const langSolvedData = await langSolvedResponse.json();
      const submissionData = await submissionResponse.json();
      const badgesData = await badgesResponse.json();
      const timelineData = await timelineResponse.json();

      console.log('Profile Data:', profileData);
      console.log('Canlender Data:', timelineData.data.matchedUser.userCalendar);

      return {
        platform: 'LeetCode',
        data: {
          totalSolved: submissionData.totalSolved || 0,
          easy: submissionData.easySolved || 0,
          medium: submissionData.mediumSolved || 0,
          hard: submissionData.hardSolved || 0,
          ranking: profileData.ranking || 0,
          recentSubmissions: submissionData.recentSubmissions || { "error": "no data" },
          languages: langSolvedData.matchedUser.languageProblemCount || [],
          badges: badgesData.badges || [],
          badgesCount: badgesData.badgesCount || 0,
          submissionTimeline: timelineData.data.matchedUser.userCalendar || {},
        },
      };
    } catch (error) {
      console.error('Error fetching LeetCode data:', error);
      return {
        platform: 'LeetCode', data: {
          totalSolved: 0, easy: undefined, medium: undefined, hard: undefined,
          ranking: undefined,
          recentSubmissions: undefined,
          languages: undefined,
          badges: undefined,
          badgesCount: undefined,
          submissionTimeline: undefined,
        }
      };
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
          school: data.school.count || 0,
          basic: data.basic.count || 0,
          hard: data.hard.count || 0,
        },
      };
    } catch (error) {
      console.error('Error fetching GFG data:', error);
      return { platform: 'GFG', data: { totalProblemsSolved: 0, school: undefined, basic: undefined, hard: undefined } };
    }
  };

  const fetchCodeforcesData = async (id) => {
    try {
      const response = await fetch(`https://codeforces-api-url/${id}`);
      if (!response.ok) throw new Error('Network response was not ok');
      const data = await response.json();
      return {
        platform: 'Codeforces',
        data: {
          totalSolved: data.totalSolved || 0,
          contests: data.contests || 0,
          rank: data.ranking || 0,
        },
      };
    } catch (error) {
      console.error('Error fetching Codeforces data:', error);
      return { platform: 'Codeforces', data: { totalSolved: 0, contests: undefined, rank: undefined } };
    }
  };

  const fetchHackerrankData = async (id) => {
    try {
      const response = await fetch(`https://hackerrank-api-url/${id}`);
      if (!response.ok) throw new Error('Network response was not ok');
      const data = await response.json();
      return {
        platform: 'HackerRank',
        data: {
          totalSolved: data.totalSolved || 0,
          rank: data.rank || 0,
        },
      };
    } catch (error) {
      console.error('Error fetching HackerRank data:', error);
      return { platform: 'HackerRank', data: { totalSolved: 0, rank: undefined } };
    }
  };

  return (
    <div className="bg-[#1c1c1b] text-[#E0E0E0] min-h-screen p-10">
      <div className="text-center mb-10">
        <h1 className="text-5xl font-bold text-[#f7d185]">Hi, {name}</h1>
        <p className="text-lg text-[#E0E0E0] mt-2">Let us track your coding journey and see your growth.</p>
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
              placeholder="GFG ID"
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
            disabled={!Object.values(userIDs).some((id) => id)}
          >
            Fetch Data
          </button>

        </form>
      )}


      {isLoading ? (
        <div className="flex justify-center items-center h-[60vh]">
          <img src={loader} alt="Loading..." className="w-24 h-24" />
        </div>
      ) : (
        isDataFetched && (
          <div>
            <div className="flex justify-center gap-5 mb-10 flex-wrap">
              {/* LeetCode Card */}
              <div className="bg-[#121212] shadow-lg p-6 rounded-lg text-center flex-1 min-w-[200px]">
                <h4 className="text-[#f7d185] text-6xl mb-4">{leetCodeData.totalSolved}</h4>
                <p className="mb-2 font-light">Total Solved</p>
                <h2 className="text-xl mb-2 text-[#f8c55d]">LeetCode</h2>
              </div>
              {/* GFG Card */}
              <div className="bg-[#121212] shadow-lg p-6 rounded-lg text-center flex-1 min-w-[200px]">
                <h4 className="text-[#f7d185] text-6xl mb-4">{gfgData.totalProblemsSolved}</h4>
                <p className="mb-2 font-light">Total Solved</p>
                <h2 className="text-xl mb-2 text-[#f8c55d]">GFG</h2>
              </div>
              {/* Codeforces Card */}
              <div className="bg-[#121212] shadow-lg p-6 rounded-lg text-center flex-1 min-w-[200px]">
                <h4 className="text-[#f7d185] text-6xl mb-4">{codeforcesData.totalSolved}</h4>
                <p className="mb-2 font-light">Total Solved</p>
                <h2 className="text-xl mb-2 text-[#f8c55d]">Codeforces</h2>
              </div>
              {/* HackerRank Card */}
              <div className="bg-[#121212] shadow-lg p-6 rounded-lg text-center flex-1 min-w-[200px]">
                <h4 className="text-[#f7d185] text-6xl mb-4">{hackerrankData.totalSolved}</h4>
                <p className="mb-2 font-light">Total Solved</p>
                <h2 className="text-xl mb-2 text-[#f8c55d]">HackerRank</h2>
              </div>

            </div>

            {/* Heatmap timeline */}
            <div className='flex justify-center'>
              {leetCodeData?.submissionTimeline && (
                <HeatMap userCalendar={leetCodeData.submissionTimeline} />
              )}
            </div>


            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* LeetCode Stats */}
              <div className="bg-[#121212] shadow-lg p-6 rounded-lg">
                <h3 className="text-xl font-bold text-[#f7d185] mb-2">LeetCode Stats</h3>
                {userIDs.leetCodeID ? (
                  leetCodeData && leetCodeData.ranking !== undefined && leetCodeData.totalSolved !== undefined ? (
                    <LeetCodeAnalysis leetCodeData={leetCodeData} />
                  ) : (
                    <h4>Invalid user ID | Server Error</h4>
                  )
                ) : (
                  <h4>User ID not provided</h4>
                )}
              </div>

              {/* GFG Stats */}
              <div className="bg-[#121212] shadow-lg p-6 rounded-lg">
                <h3 className="text-xl font-bold text-[#f7d185] mb-4">GFG Stats</h3>
                {userIDs.gfgID ? (
                  gfgData && gfgData.school !== undefined && gfgData.basic !== undefined && gfgData.hard !== undefined ? (
                    <Doughnut
                      data={{
                        labels: ['School', 'Basic', 'Hard'],
                        datasets: [
                          {
                            data: [gfgData.school, gfgData.basic, gfgData.hard],
                            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                          },
                        ],
                      }}
                    />
                  ) : (
                    <h4>Invalid user ID | Server Error</h4>
                  )
                ) : (
                  <h4>User ID not provided</h4>
                )}
              </div>

              {/* Codeforces Stats */}
              <div className="bg-[#121212] shadow-lg p-6 rounded-lg">
                <h3 className="text-xl font-bold text-[#f7d185] mb-4">Codeforces Stats</h3>
                {userIDs.codeforcesID ? (
                  codeforcesData && codeforcesData.contests !== undefined && codeforcesData.rank !== undefined ? (
                    <Pie
                      data={{
                        labels: ['Total Solved', 'Contests', 'Rank'],
                        datasets: [
                          {
                            data: [codeforcesData.totalSolved, codeforcesData.contests, codeforcesData.rank],
                            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                          },
                        ],
                      }}
                    />
                  ) : (
                    <h4>Invalid user ID | Server Error</h4>
                  )
                ) : (
                  <h4>User ID not provided</h4>
                )}
              </div>

              {/* HackerRank Stats */}
              <div className="bg-[#121212] shadow-lg p-6 rounded-lg">
                <h3 className="text-xl font-bold text-[#f7d185] mb-4">HackerRank Stats</h3>
                {userIDs.hackerrankID ? (
                  hackerrankData && hackerrankData.rank !== undefined ? (
                    <Doughnut
                      data={{
                        labels: ['Total Solved'],
                        datasets: [
                          {
                            data: [hackerrankData.totalSolved],
                            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                          },
                        ],
                      }}
                    />
                  ) : (
                    <h4>Invalid user ID | Server Error</h4>
                  )
                ) : (
                  <h4>User ID not provided</h4>
                )}
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default Dashboard;