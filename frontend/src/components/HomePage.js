import React from 'react';

export default function HomePage(props) {
    return (
        <div>
            <h1>Home</h1>
            <h2>Welcome, {localStorage.username}</h2>
            <p>If you're struggling with depression or anxiety, Moodpath is the leading mental health app to guide you toward emotional well-being.</p>
            <h3>Your Mood Journal</h3>
            <p>Track your emotional state in relation to other areas in your life to detect patterns and identify areas that can improve.</p>
            <h3>The Right Questions</h3>
            <p>As a personalized mental health companion, Moodpath checks on you three times a day with questions that "learn" from your responses. These questions generate Insights and other resources most relevant to your emotional health.</p>
            <h3>Regular Mental Health Reports</h3>
            <p>By answering questions and recording your mood, you'll receive regular mental health reports detailing your symptoms and providing a synopsis of your emotional state.</p>
            <h3>In-Depth Statistics</h3>
            <p>Moodpath's statistical views provide snapshots of your mood over time. You can quickly see which emotions you tend to feel when and which situations helped cause them.</p>
        </div>
    )
}