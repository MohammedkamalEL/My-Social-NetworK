import Register from "./component/Register";
import { Helmet } from "react-helmet";
import img from '../public/Communication.png'

function App() {
  return (
    <>
      <Helmet>
        {/* Basic SEO */}
        <title>Best Comunication website</title>
        <meta
          name="description"
          content="Moh-Kamal- تواصل مع أصدقائك وشارك لحظاتك المفضلة"
        />
        <meta name="keywords" content="Comunication, Best Mohmmed Kamal, seo" />
        <meta name="author" content="Mohammed Kamal" />
        <meta property="og:title" content="Best Comunication website" />
        <meta property="og:image" content={img} />
        <meta property="og:url" content={img} />
        <meta name="twitter:title" content="Moh Kamal" />
        <meta
          name="twitter:description"
          content="Moh-Kamal- تواصل مع أصدقائك وشارك لحظاتك المفضلة"
        />
        <meta name="twitter:image" content={img} />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <Register />
    </>
  );
}

export default App;
