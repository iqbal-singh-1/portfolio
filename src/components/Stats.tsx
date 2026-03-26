import React, { useState, useEffect } from 'react';
import { FaGithub, FaCodeBranch, FaStar } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const Stats = () => {
  const GITHUB_USERNAME = 'iqbal-singh-1';
  const LEETCODE_USERNAME = 'iqbal_singh';

  const [githubStats, setGithubStats] = useState({ repos: 0, stars: 0, loading: true });
  const [leetcodeStats, setLeetcodeStats] = useState({ total: 0, easy: 0, medium: 0, hard: 0, loading: true });

  useEffect(() => {
    const fetchGithubStats = async () => {
      try {
        const userRes = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`);
        const userData = await userRes.json();
        const reposRes = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100`);
        const reposData = await reposRes.json();
        let totalStars = 0;
        if (Array.isArray(reposData)) {
          totalStars = reposData.reduce((acc, repo) => acc + (repo.stargazers_count || 0), 0);
        }
        setGithubStats({ repos: userData.public_repos || 0, stars: totalStars, loading: false });
      } catch (error) {
        console.error('Error fetching GitHub stats:', error);
        setGithubStats(s => ({ ...s, loading: false }));
      }
    };

    const fetchLeetcodeStats = async () => {
      try {
        const res = await fetch(`https://leetcode-api-faisalshohag.vercel.app/${LEETCODE_USERNAME}`);
        const data = await res.json();
        if (data && typeof data.totalSolved === 'number') {
          setLeetcodeStats({
            total: data.totalSolved || 0,
            easy: data.easySolved || 0,
            medium: data.mediumSolved || 0,
            hard: data.hardSolved || 0,
            loading: false
          });
        } else {
          setLeetcodeStats(s => ({ ...s, loading: false }));
        }
      } catch (error) {
        console.error('Error fetching LeetCode stats:', error);
        setLeetcodeStats(s => ({ ...s, loading: false }));
      }
    };

    fetchGithubStats();
    fetchLeetcodeStats();
  }, []);

  const lcTotal = leetcodeStats.easy + leetcodeStats.medium + leetcodeStats.hard || 1;

  return (
    <section id="stats" style={{ padding: '60px 48px 20px 48px', color: 'white' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        {/* Section header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '40px' }}>
          <div style={{ width: '4px', height: '48px', background: 'linear-gradient(180deg, #5bd5ee, transparent)', borderRadius: '2px' }} />
          <div>
            <p style={{ margin: 0, fontSize: '0.85rem', color: '#5bd5ee', fontWeight: '700', letterSpacing: '3px', textTransform: 'uppercase' }}>Live</p>
            <h2 style={{ margin: 0, fontSize: '2.2rem', letterSpacing: '-1px' }}>Coding Profiles</h2>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(480px, 1fr))', gap: '24px' }}>

          {/* ── GitHub Card ── */}
          <div style={{
            background: 'rgba(255,255,255,0.02)',
            border: '1px solid rgba(255,255,255,0.06)',
            borderLeft: '3px solid #ffffff',
            borderRadius: '16px',
            padding: '28px',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '28px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <FaGithub size={28} color="#ffffff" />
                <div>
                  <h3 style={{ margin: 0, fontSize: '1.15rem', color: 'white' }}>GitHub</h3>
                  <span style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.85rem' }}>@{GITHUB_USERNAME}</span>
                </div>
              </div>
              <a
                href={`https://github.com/${GITHUB_USERNAME}`}
                target="_blank"
                rel="noreferrer"
                style={{
                  color: 'rgba(255,255,255,0.5)',
                  textDecoration: 'none',
                  fontSize: '0.8rem',
                  padding: '6px 14px',
                  borderRadius: '8px',
                  border: '1px solid rgba(255,255,255,0.1)',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.color = 'white'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)'; }}
                onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.5)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; }}
              >
                Visit Profile ↗
              </a>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <div style={{
                background: 'rgba(255,255,255,0.03)',
                borderRadius: '12px',
                padding: '20px',
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
              }}>
                <div style={{ background: 'rgba(91,213,238,0.1)', borderRadius: '10px', padding: '10px', color: '#5bd5ee' }}>
                  <FaCodeBranch size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '1.8rem', fontWeight: '700', color: 'white', lineHeight: 1 }}>
                    {githubStats.loading ? '—' : githubStats.repos}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.45)', marginTop: '4px', textTransform: 'uppercase', letterSpacing: '1px' }}>Repos</div>
                </div>
              </div>

              <div style={{
                background: 'rgba(255,255,255,0.03)',
                borderRadius: '12px',
                padding: '20px',
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
              }}>
                <div style={{ background: 'rgba(245,158,11,0.1)', borderRadius: '10px', padding: '10px', color: '#F59E0B' }}>
                  <FaStar size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '1.8rem', fontWeight: '700', color: 'white', lineHeight: 1 }}>
                    {githubStats.loading ? '—' : githubStats.stars}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.45)', marginTop: '4px', textTransform: 'uppercase', letterSpacing: '1px' }}>Stars</div>
                </div>
              </div>
            </div>
          </div>

          {/* ── LeetCode Card ── */}
          <div style={{
            background: 'rgba(255,255,255,0.02)',
            border: '1px solid rgba(255,255,255,0.06)',
            borderLeft: '3px solid #FFA116',
            borderRadius: '16px',
            padding: '28px',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '28px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <SiLeetcode size={28} color="#FFA116" />
                <div>
                  <h3 style={{ margin: 0, fontSize: '1.15rem', color: 'white' }}>LeetCode</h3>
                  <span style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.85rem' }}>@{LEETCODE_USERNAME}</span>
                </div>
              </div>
              <div style={{
                background: 'rgba(255,161,22,0.1)',
                border: '1px solid rgba(255,161,22,0.2)',
                borderRadius: '10px',
                padding: '6px 16px',
                textAlign: 'center',
              }}>
                <div style={{ fontSize: '1.4rem', fontWeight: '700', color: '#FFA116', lineHeight: 1 }}>
                  {leetcodeStats.loading ? '—' : leetcodeStats.total}
                </div>
                <div style={{ fontSize: '0.7rem', color: 'rgba(255,161,22,0.7)', textTransform: 'uppercase', letterSpacing: '1px' }}>Solved</div>
              </div>
            </div>

            {/* Difficulty breakdown with progress bars */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                { label: 'Easy', count: leetcodeStats.easy, color: '#00b8a3', bg: 'rgba(0,184,163,0.1)' },
                { label: 'Medium', count: leetcodeStats.medium, color: '#ffc01e', bg: 'rgba(255,192,30,0.1)' },
                { label: 'Hard', count: leetcodeStats.hard, color: '#ff375f', bg: 'rgba(255,55,95,0.1)' },
              ].map(({ label, count, color, bg }) => (
                <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ width: '56px', fontSize: '0.8rem', fontWeight: '700', color, flexShrink: 0 }}>{label}</div>
                  <div style={{ flex: 1, height: '6px', background: 'rgba(255,255,255,0.06)', borderRadius: '99px', overflow: 'hidden' }}>
                    <div style={{
                      height: '100%',
                      width: leetcodeStats.loading ? '0%' : `${Math.round((count / lcTotal) * 100)}%`,
                      background: color,
                      borderRadius: '99px',
                      transition: 'width 1s ease',
                    }} />
                  </div>
                  <div style={{ width: '32px', textAlign: 'right', fontSize: '0.95rem', fontWeight: '700', color: 'white', flexShrink: 0 }}>
                    {leetcodeStats.loading ? '—' : count}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Stats;
