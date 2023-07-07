import React from "react";

export default function Home() {
  return (
    <div className="main-div-homepage">
      <div className="welcome-background">
        <div className="background-filter ">
          <div className="welcome-container">
            <h1>Welcome to Campus Connect</h1>
            <p>Where education meets connection</p>
          </div>
        </div>
      </div>
      <hr />
      <p className="welcome-paragraphs">
        One of the key features of Campus Connect is the ability to explore the
        academic achievements of enrolled students. With a few simple taps, you
        can access the GPA (Grade Point Average) of individual students,
        allowing you to gain insights into their academic performance. This
        feature enables you to gauge the level of academic excellence at
        different campuses and helps you make informed decisions about your
        educational journey.
      </p>
      <p className="welcome-paragraphs">
        Whether you're comparing campuses, looking for inspiration, or seeking
        connections with like-minded students, Campus Connect is here to empower
        you. Engage in meaningful conversations, join relevant communities, and
        establish connections with students from around the globe. Our app
        fosters a supportive environment that encourages networking and
        collaboration, allowing you to form lasting relationships and broaden
        your horizons.
      </p>
    </div>
  );
}
