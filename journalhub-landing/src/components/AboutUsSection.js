// src/components/AboutUsSection.js
import React from 'react';
import '../styles/AboutUsSection.css'; // Import AboutUsSection component's CSS

const AboutUsSection = () => {
    return (
        <section className="about-us">
            <h2>About Us</h2>
            <p>
                JournalHub is more than just a platform for journaling; it's a sanctuary
                where your thoughts, emotions, and memories find their place. Whether you
                prefer to share your experiences with the world or keep them private,
                JournalHub offers you the tools to introspect, create, and grow personally
                and creatively.
            </p>
            <p>
                Our mission is to empower individuals through digital journaling, providing
                a seamless experience with features like secure user authentication, a
                powerful rich text editor, a flexible tagging system, and comprehensive
                search functionality. Designed with responsiveness in mind, JournalHub
                ensures accessibility across both desktop and mobile devices.
            </p>
            <p>
                Built on modern web technologies, JournalHub leverages React for a dynamic
                user interface, Redux for efficient state management, and Express.js to
                handle server-side logic. MongoDB serves as our robust database solution,
                ensuring reliable storage and retrieval of user data and journal entries.
            </p>
            <p>
                Join us in preserving your journey—whether it's for personal reflection,
                creative expression, or documenting life's milestones. Experience the
                convenience of managing your journal anytime, anywhere, with JournalHub.
            </p>
        </section>
    );
};

export default AboutUsSection;
