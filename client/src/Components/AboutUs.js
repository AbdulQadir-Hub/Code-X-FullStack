import React from "react";
import "./Styles/AboutUs.css";

function AboutUsPage() {
  return (
    <div className="ab">
      {/* About Us Section */}
      <div className="abtus">
        <h2>About Us</h2>
        <p>
          As Consultants all over the world with worldwide offices, Code-X
          Technologies was founded in 2004 by a group of entrepreneurs with a
          strong background in Software development life cycle and with assorted
          functional backgrounds. We are a team of entrepreneurs with
          backgrounds in Software development, web Development, Database
          management, and technical architecture.
        </p>
        <p>
          We have expertise in different technical as well as functional areas
          with experience in various reputed multinational software companies.
          The technical and field experience of several man-years makes us
          confident in the development of any project on state-of-the-art
          technology.
        </p>
        <p>
          The development experience covers the entire life cycle of the
          projects, from system requirement study to implementation & acceptance
          along with the maintenance of the system. Our methodology covers the
          full life cycle of the projects, involving traditional Structured
          System Analysis and Design, Object-Oriented analysis and Design, and
          the latest in the market Rational Unified Process. The technology
          experience of the team covers a wide range of platforms.
        </p>
      </div>

      {/* Career Section */}
      <div className="career">
        <h2>Career</h2>
        <span>
          <em>Working Culture @ Code-X Technologies</em>
        </span>
        <p>
          The working environment has evolved over the years so that each person
          feels comfortable developing their skills or potential and making the
          best use of their abilities. This is made possible by bringing in
          bright minds with diverse backgrounds having unique technical
          strengths. Exchange of technical views has not only helped with faster
          solutions but also brought out new ideas, benefiting all, i.e.,
          clients, team members, and the organization.
        </p>
        <p>
          Freedom is about bringing joy and achieving results with happiness.
          The only constraints are maintaining project schedules with quality
          delivery and within client budgets. We achieve this through
          brainstorming sessions at the start of each project, preparing
          development milestones (i.e., creating the road map to completion).
          Here, everybody realizes that company growth, meeting client
          schedules, and strategies are not different from their own career
          growth. This scientific approach has helped all in the company who
          work as partners, contributing their part and also learning to develop
          their potential happily.
        </p>
      </div>
    </div>
  );
}

export default AboutUsPage;
