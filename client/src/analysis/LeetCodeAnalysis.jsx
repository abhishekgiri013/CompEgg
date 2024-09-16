import React, { useEffect } from 'react';
import { Pie } from 'react-chartjs-2';

const removeDuplicates = (submissions) => {
    if (!Array.isArray(submissions)) {
        return [];
    }

    const seen = new Set();
    return submissions.filter(submission => {
        const isDuplicate = seen.has(submission.title);
        seen.add(submission.title);
        return !isDuplicate;
    });
};

const LeetCodeAnalysis = ({ leetCodeData }) => {
    useEffect(() => {
        console.log(leetCodeData);
    }, [leetCodeData]);

    // Ensure leetCodeData and recentSubmissions are defined and valid
    const recentSubmissions = leetCodeData?.recentSubmissions || [];
    const uniqueRecentSubmissions = removeDuplicates(recentSubmissions);
    const defaultlink = "https://assets.leetcode.com/static_assets/marketing/2024-100-lg.png";

    return (
        <div className="p-3 min-h-screen">
            {/* Header Section */}
            <div className="mb-8">
                {/* Rank and Languages Used in Same Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    {/* Rank and Solved Questions */}
                    <div className="bg-[#353535] p-4 rounded-lg shadow-md">
                        <h4 className="text-xl font-semibold mb-2 text-[#f8c55d]">Stats</h4>
                        <p className="text-lg">Rank: <span className='font-bold text-[#f7d185]'>{leetCodeData?.ranking || 'N/A'}</span></p>
                        <p className="text-lg">Solved Ques: <span className='font-bold text-[#f7d185]'>{leetCodeData?.totalSolved || 0}</span></p>
                        <p className="text-lg">Easy Ques: <span className='font-bold text-[#f7d185]'>{leetCodeData?.easy || 0}</span></p>
                        <p className="text-lg">Medium Ques: <span className='font-bold text-[#f7d185]'>{leetCodeData?.medium || 0}</span></p>
                        <p className="text-lg">Hard Ques: <span className='font-bold text-[#f7d185]'>{leetCodeData?.hard || 0}</span></p>
                    </div>

                    {/* Languages Used */}
                    <div className="bg-[#353535] p-4 rounded-lg shadow-md">
                        <h4 className="text-xl font-semibold mb-2 text-[#f8c55d]">Languages Used</h4>
                        <ul className="list-disc pl-5">
                            {(leetCodeData?.languages || []).map((lang, index) => (
                                <li key={index} className="text-lg">{lang.languageName}: <span className='font-bold text-[#f7d185]'>{lang.problemsSolved}</span></li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Charts and Badges Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Pie Chart - Total Problems Solved */}
                <div className="bg-[#353535] p-4 rounded-lg shadow-md">
                    <h4 className="text-xl font-semibold mb-4 text-[#f8c55d]">Problems Solved</h4>
                    <Pie
                        data={{
                            labels: ['Easy', 'Medium', 'Hard'],
                            datasets: [
                                {
                                    data: [leetCodeData?.easy || 0, leetCodeData?.medium || 0, leetCodeData?.hard || 0],
                                    backgroundColor: ['#FF6384', '#36A2EB', '#99ff99'],
                                },
                            ],
                        }}
                    />
                </div>

                {/* Badges */}
                <div className="bg-[#353535] p-4 rounded-lg shadow-md">
                    <h4 className="text-xl font-semibold mb-4 text-[#f8c55d]">Badges Count : <span className='font-bold text-[#f7d185]'>{leetCodeData?.badgesCount || 0}</span></h4>
                    {leetCodeData?.badgesCount === 0 ? (
                        <p className="text-lg text-center text-[#f7d185]">Each problem solved is a step towards earning your first badge. Keep going!</p>
                    ) : (
                        <ul className="list-disc pl-5">
                            {(leetCodeData?.badges || []).map((badge, index) => (
                                <li key={index} className="text-lg flex items-center space-x-2">
                                    <img src={badge.icon ? badge.icon : defaultlink} alt={badge.displayName} className="w-6 h-6" />
                                    <span>{badge.displayName}</span>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>

            {/* Recent Submissions */}
            <div className="bg-[#353535] p-4 rounded-lg shadow-md mt-6">
                <h4 className="text-xl font-semibold mb-2 text-[#f8c55d]">Recent Submissions</h4>
                <div className="relative overflow-hidden h-20">
                    <ul className="list-disc pl-5 animate-scroll">
                        {uniqueRecentSubmissions.map((submission, index) => (
                            <li key={index} className="text-lg">{submission.title}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default LeetCodeAnalysis;
