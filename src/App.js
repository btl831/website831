import React, { useEffect, useState} from 'react';
import { Spinner } from 'react-bootstrap';
import { Route } from 'react-router-dom';
import axios from 'axios';

import './App.css';
import Header from './main/Header'
import Body from './main/Body'
import Footer from './main/Footer'
import WritePage from './etc/Write';
import Developer from './etc/Developer';
import Login from './firebase/Login';
import ChartPage from './music/Chart';

//firebase 적용
import "firebase/firestore";

function App() {
  let [loading, setLoading] = useState(true);
  let [chart_info, setChart_info] = useState([]);

  useEffect(() => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerHTML = "MOUM";

    axios.get("https://btl831.github.io/example.json")
      .then((result) => { console.log(result.data); setChart_info(result.data); setLoading(false) })
      .catch();
  }, []);

  // 로딩 UI
  if (loading) return (<>로딩중 <Spinner animation="border" variant="primary" className="spinner" /></>);

  return (
    <div className="App">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
          crossorigin="anonymous"
        />
      </head>
      
      <Header />
      <body className="body">
        <Route exact path="/" render={() => <Body chart_info={chart_info} />}/>
        <Route path="/chart" render={() => <ChartPage chart_info={chart_info} className="mt-20 mb-5" />} />
        <Route path="/write" component={WritePage} />
        <Route path ="/login" component={Login} />
        <Route path="/developer" component={Developer} />
      </body>
      <Footer />
    </div>
  );
}

export default App;
