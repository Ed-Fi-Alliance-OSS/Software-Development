import Heading from "@theme/Heading";

export default function About() {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col col--5 col--offset-1">
            <Heading as="h1">About</Heading>
            <p>
              This document provides a comprehensive overview of the Ed-Fi
              Software Development Life Cycle (SDLC), detailing the processes
              and best practices involved in planning, designing, developing,
              testing, and deploying software within the Ed-Fi Alliance. It
              serves as a reference guide for Ed-Fi contractors and open-source
              contributors to ensure the development of high-quality, scalable
              educational technology solutions.
            </p>
          </div>
          <div className="col col--5">
            <img src="img/sdlc-home/SDLC.jpg" />
          </div>
        </div>
      </div>
    </section>
  );
}
