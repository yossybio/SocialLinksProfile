import SocialLinksProfile from "./components/SocialLinksProfile";
import classes from "./assets/styles/app.module.css";

function App() {
  return (
    <>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <main className={classes.container}>
          <SocialLinksProfile />
        </main>
      </body>
    </>
  );
}

export default App;
