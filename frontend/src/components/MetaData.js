import { Helmet } from "react-helmet";
export default ({ title }) => (
  <Helmet>
    <meta charSet="utf-8" />
    <title>Mobile Programming | {title}</title>
  </Helmet>
);
