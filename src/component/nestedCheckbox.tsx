'use client'
import {useState }from 'react'
export default function NestedCheckbox(){
    const[checkNode ,setCheckNode]=useState({})
  const  CheckboxesData = [
        {
          id: 1,
          label: "Fruits",
          children: [
            { id: 2, label: "Apple" },
            { id: 3, label: "Banana" },
            {
              id: 4,
              label: "Citrus",
              children: [
                { id: 5, label: "Orange" },
                { id: 6, label: "Lemon" },
              ],
            },
          ],
        },
        {
          id: 7,
          label: "Vegetables",
          children: [
            { id: 8, label: "Carrot" },
            { id: 9, label: "Broccoli" },
          ],
        },
      ];
const getALLIds=(node,ids=[])=>{
ids.push(node.id);
if(node.children){
  node.children.forEach(item=>getALLIds(item,ids))
}
 return ids
}


const handleCheck=(e ,node)=>{

setCheckNode((prev)=>{
  const newState={...prev}
  const allId=getALLIds(node);
  allId.forEach((id)=>{
    newState[id]=e.target.checked;
  })


const verifyChecked=(eachNode)=>{
  if(!eachNode.children){
    return newState[eachNode.id] || false
  }

  const isAllChildChecked = eachNode.children
  .map((child) => verifyChecked(child))
  .every((v) => v)
 newState[eachNode.id]=isAllChildChecked
 return isAllChildChecked
}

CheckboxesData.forEach((eachNode)=>verifyChecked(eachNode))
  return newState
})
}

      const displayCheck=(nodes)=>{
        if(!nodes){
            return null
        }
        return(
            <div>
            {
                nodes.map((val)=>(
                    <div key={val.id}>
                        <div className='ml-4' >
                            <input checked={checkNode[val.id] || false} value={val.id} onChange={(e)=>handleCheck(e,val)} type='checkbox'></input>
                            <label>{val.label}</label>
                            {val.children && val.children.length > 0 && displayCheck(val.children)}
                        </div>


                    </div>
                ))
            }
        </div>

        )
      }

    return (
     <div>
       {displayCheck(CheckboxesData)}
     </div>
    )
}