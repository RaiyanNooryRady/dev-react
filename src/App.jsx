import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './assets/css/bootstrap.min.css'
import './App.css'
import CarEs6 from './Es6.jsx'
import Events from './Events.jsx'
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "https://0668e3b5aa651a17be57b1f6160e6b41@o4509778393956352.ingest.de.sentry.io/4509778404704336",
  // Setting this option to true will send default PII data to Sentry.
  // For example, automatic IP address collection on events
  sendDefaultPii: true,
   // Logs
  enableLogs: true
});
function App() {

  return (
    <div className="container mt-5">
    <h1 className='text-danger'>React Dev</h1>
    <CarEs6 />
    <Events />
    </div>
  )
}

export default App;
