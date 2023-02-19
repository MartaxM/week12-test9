import React from 'react'
import { useState, useEffect } from 'react'

function About() {

  let [items, setItems] = useState(null);

  useEffect(() => {
    let mounted = true;
    async function doStuff() {
      let a = await fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())

      if (mounted) {
        let listItems = a.map((item) =>
          <li key={item.id}>
            {item.title}
          </li>)
        setItems(listItems);
      }
      // console.log(a);
      // console.log(b);
    };

    doStuff();
    return () => { mounted = false; };
  }, []);

  return (
    <ul>{items}</ul>
  )
}

export default About