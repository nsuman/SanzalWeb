import * as React from 'react';
import { useState, useEffect } from 'react';
import Graph from "react-graph-vis";

export default function Network() {
    const [data, setData] = useState([]);
    useEffect(() => {
      fetch('https://raw.githubusercontent.com/nsuman/twitdata/master/users_profile/users_profile.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
    }, []);

    const nodes = []
    const edges = []
    if (data) {
      data.forEach(element => {
        nodes.push({
          id: element.username,
          shape: 'circularImage',
          value: element.followers_count,
          image: element.profile_image_url.replace('_normal', ''),
          scaling: {
            customScalingFunction: function (min,max,total,value) {
              if (max === min) {
                return 0.5;
              }
              else {
                return value/ total;
              }
            },
            max: 2000,
            min: 25



          },
        })
      });

      data.slice(0, 30).forEach((element) => {
        edges.push({
          to: data[Math.floor(Math.random() * data.length)].username,
          from: data[Math.floor(Math.random() * data.length)].username
        })
      })
    }

  return (
 
      <Graph graph={{ nodes: nodes, edges: edges }} key={Math.random()} />
  );
}