import React, { useEffect, useState } from 'react';
import { getCourses } from './api/connections';
import './App.scss';
import { Header, Main, Portfolio } from './components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
function App() {
  const [_courses, set_courses] = useState(false)

  useEffect(() => {
    getCourses('simple/price?ids=ethereum,bitcoin&vs_currencies=usd,eth,btc').then(x =>
      set_courses(x))
  }, [])

  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path='/' exact render={() => <Main courses={_courses} />} />
          <Route exact path='/portfolio' render={() => <Portfolio courses={_courses} />} />
        </Switch>
      </div>
    </Router>

  );
}

export default App;
