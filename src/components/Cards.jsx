import React from 'react'

function Cards({ item }) {
  return (
    <>
    <div>
        <div className=" card w-96 bg-base-100 shadow-xl">
            <figure>
                <img src={item.image} alt="shoes" />
            </figure>

        </div>
    </div>
    </>
    
  )
}

export default Cards