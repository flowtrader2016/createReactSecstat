import React, { useState, useEffect } from "react"
import Example from "./plotBar.js"

function getJson() {
  return fetch("http://secstat.info/testthechartdata3.json")
    .then(response => response.json())
    .catch(error => {
      console.error(error)
    })
}

const MyComp = () => {
  const [list, setList] = useState([])

  useEffect(() => {
    getJson().then(list => setList(list))
  }, [])

  return (
    <div>
      {list.map((data, index) => (
        <Example
          key={index}
          data={data.map(({ id, count }) => ({
            x: id,
            y: count,
          }))}
        />
      ))}
    </div>
  )
}

export default MyComp

//   return (
//     <ul>
//       <Example />
//       {list.map(container => (
//         <li className="container">
//           <ul>
//             {container.map(item => (
//               <li key={item.id}>
//                 {item.count} {item.id}
//               </li>
//             ))}
//           </ul>
//         </li>
//       ))}
//     </ul>
//   )
// }
