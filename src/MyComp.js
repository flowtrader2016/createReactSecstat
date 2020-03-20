import React, { useState, useEffect } from "react";
import Example from "./plotBar.js";
import styled from "styled-components";
// import Container from "./plotBar.js";
// import Item from "./plotBar.js";

const Item = styled(Example)``;

const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  background: lightgray;
  padding: 0.5rem;
  ${Item} {
    margin: 0.5rem;
    padding: 1rem;
    background: white;
  }
`;

function getJson() {
  return fetch("http://secstat.info/testthechartdata3.json")
    .then(response => response.json())
    .catch(error => {
      console.error(error);
    });
}

const MyComp = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    getJson().then(list => setList(list));
  }, []);

  return (
    <Container>
      {list.map((data, index) => (
        <Item
          key={index}
          data={data.map(({ id, count }) => ({
            x: id,
            y: count
          }))}
        />
      ))}
    </Container>
  );
};

export default MyComp;

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
