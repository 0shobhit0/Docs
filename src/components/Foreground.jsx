import React from 'react'
import Card from './Card'


const Foreground = () => {
  

  const data = [
    {
    desc: "the color is green",
    filesize: ".9mb",
    close: true,
    tag: {isOpen: true, tagTitle: "Download Now" , tagColor: "green"},
  },
  {
    desc: "the color is green",
    filesize: ".9mb",
    close: true,
    tag: {isOpen: true, tagTitle: "Download Now" , tagColor: "blue"},
  },
  {
    desc: "the color is green",
    filesize: ".9mb",
    close: true,
    tag: {isOpen: true, tagTitle: "Upload" , tagColor: "green"},
  },
];
  
  return (
    <div   className='fixed top-0 left-0 z-[3] w-full h-full flex gap-5 flex-wrap '>
           {data.map((item, index) => (
            <Card data = {item}   />
           ))}
        
    </div>
  )
}

export default Foreground