import Heading from "@theme/Heading";
import Link from "@docusaurus/Link";
import styles from "./styles.module.css";

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <div className="col col--offset-1 col--5">
            <Heading as="h2">Project Documents</Heading>
            <ul>
              <li>
                <Link to="docs/intro">Software Development Life Cycle</Link>:
                motivation and architectural vision
              </li>
              <li>
                <Link to="docs/coding-and-testing-standards">
                  Ed-Fi ODS/API and Data Management Service FAQ
                </Link>
              </li>
              <li>
                <Link to="docs/continuous-integration">Architecture and Design</Link>
              </li>
            </ul>
            <Heading as="h2"> Products</Heading>
            <p>
              Tanager is a <i>project</i>, these are the <i>products</i>:
            </p>
            <ul>
              <li>
                <Link to="docs/cross-functional-projects">Data Management Service</Link>
              </li>
              <li>Configuration Service - pending</li>
            </ul>
          </div>
          <div className="col col--5">
            <Heading as="h2"> Boilerplate</Heading>
            <ul>
              <li>
                <Link to="https://github.com/Ed-Fi-Alliance-OSS/Project-Tanager/blob/main/CONTRIBUTING.md">How to Contribute</Link>
              </li>
              <li>
                <Link to="https://github.com/Ed-Fi-Alliance-OSS/Project-Tanager/blob/main/CONTRIBUTING.md">Contributor Code of Conduct</Link>
              </li>
              <li>
                <Link to="https://github.com/Ed-Fi-Alliance-OSS/Project-Tanager/blob/main/CONTRIBUTING.md">List of Contributors</Link>
              </li>
              <li>
                <Link to="https://github.com/Ed-Fi-Alliance-OSS/Project-Tanager/blob/main/NOTICES.md">Copyright and License Notices</Link>
              </li>
              <li>
                <Link to="https://github.com/Ed-Fi-Alliance-OSS/Project-Tanager/blob/main/LICENSE">License</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}