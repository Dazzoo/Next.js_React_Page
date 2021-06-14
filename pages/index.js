import Head from 'next/head'
import Layout from '../components/Layout'
import Header from './head/Header'
import IsolationIsNotEscape from './IsolationIsNotEscape/IsolationIsNotEscape'
import MainPageInfo from './MainPageInfo/MainPageInfo'
import Footer from './Footer/Footer'

export default function MainPage() {
  return (
      <Layout>
          <Head>
              <title>Create Next App</title>
              <link rel="icon" href="/favicon.ico" />
              <link rel="preconnect" href="https://fonts.gstatic.com"/>
              <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@600&display=swap" rel="stylesheet"/>
          </Head>
          <Header/>
          <IsolationIsNotEscape/>
          <MainPageInfo/>
          <Footer/>
      <style jsx>{`
        .container {
          border: 1px solid black;
        }
      `}</style>

      <style jsx global>{`
        html,

        ul, li{

            list-style: none;
            margin: 0; /* нулевая граница */
            padding: 0; /* нулевые отступы */
            border: 0; /* больше всего для картинок в IE6 */
            outline: 0; /* точечная граница вокруг ссылок в Firefox */
            display: inline-block;
        }
        body {
          padding: 0;
          margin: 0;
          color: white;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
      </Layout>
  )
}
