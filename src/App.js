import React, { useState, useEffect } from 'react';
import { request } from 'graphql-request';
import './App.css';
import First from './Components/part1';
import Second from './Components/part2';
import Third from './Components/part3';

function App() {

  const [data, setData] = useState(undefined);

  useEffect(() => {
    const fetchData = async () => {
      const { site } = await request(
        'https://api-us-east-1.graphcms.com/v2/ckg8c18062w1901xlcl3k518h/master',
        
        `
        {
          site(where: {id: "ckg8d3ppk031c0126dr4ifov3"}) {
            page {
              nome
              customFragment {
                nome
                fragments
              }
            }
          }
        }
        `
      )

      setData(site);
    }
    fetchData();
  }, []);

  return (
    <div className="App">
        <First customFragment={data}/> 
        {console.log(data)}
        <Second customFragment={data}/>
        <Third customFragment={data}/>
    </div>
  );
}

export default App;