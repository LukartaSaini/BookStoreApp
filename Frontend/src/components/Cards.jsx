import React from 'react'

function Cards({ item }) {
    
    return (
        <>
            <div className='mt-4 p-3'>
                <div className="hover:scale-105 duration-200 card bg-base-100 w-92 shadow-xl dark:bg-slate-900 dark:text-white dark:border">
                    <figure>
                        <img
                            src={item.image}
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            {item.name}
                            <div className="badge badge-secondary">{item.category}</div>
                        </h2>
                        <p>{item.title}</p>
                        <div className="card-actions  justify-between ">
                            <div className="badge badge-outline ">${item.price}</div>
                            <div className="badge badge-outline cursor-pointer  hover:bg-pink-500 hover:text-white duration-200 py-3">Buy Now</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards;