import Heading from "@theme/Heading";
import Link from "@docusaurus/Link";
import styles from "./styles.module.css";

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <div className="col col--offset-1 col--5">
            <Heading as="h2">Contents</Heading>
            <ul>
              <li>
                <Link to="docs/intro">Software Development Life Cycle</Link>
              </li>
              <li>
                <Link to="docs/coding-and-testing-standards">
                  Coding and Testing Standards
                </Link>
              </li>
              <li>
                <Link to="docs/continuous-integration">
                  Continuous Integration
                </Link>
              </li>
              <li>
                <Link to="docs/cross-functional-projects">
                  Cross Functional Project
                </Link>
              </li>
              <li>
                <Link to="docs/source-code-control-policy">
                  Source Code Control Policy
                </Link>
              </li>
            </ul>
          </div>
          <div className="col col--5">
            <Heading as="h2"> Boilerplate</Heading>
            <ul>
              <li>
                <Link to="https://github.com/chrisgocode/Software-Development/blob/main/CONTRIBUTORS.md">
                  How to Contribute
                </Link>
              </li>
              <li>
                <Link to="https://github.com/chrisgocode/Software-Development/blob/main/CONTRIBUTORS.md">
                  Contributor Code of Conduct
                </Link>
              </li>
              <li>
                <Link to="https://github.com/chrisgocode/Software-Development/blob/main/CONTRIBUTORS.md">
                  List of Contributors
                </Link>
              </li>
              <li>
                <Link to="https://github.com/Ed-Fi-Alliance-OSS/Project-Tanager/blob/main/NOTICES.md">
                  Copyright and License Notices
                </Link>
              </li>
              <li>
                <Link to="https://github.com/chrisgocode/Software-Development/blob/main/LICENSE">
                  License
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
