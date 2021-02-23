import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const ComponentName = () => {
  const data = useStaticQuery(graphql`
    {
      allContentful2ndDemo {
        edges {
          node {
            title
            image {
              fluid {
                src
              }
            }
            id
            description {
              raw
            }
          }
        }
      }
    }
  `)
  console.log(data.allContentful2ndDemo.edges)
  const data1 = data.allContentful2ndDemo.edges
  return (
<div>
   {
       data1.map(item=>(
<>
<h1>{item.node.title}</h1>
<img src={item.node.image.fluid.src} width='100' />
</>

       ))
   }
</div>
  )
}

export default ComponentName

