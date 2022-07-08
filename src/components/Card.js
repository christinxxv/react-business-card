import React from 'react'
import './../css/index.css'

const csCover = new URL("./../images/CS-cover.jpg",import.meta.url);

export default function Card() {
  return (
    <div className="container">
        <div className="card">

            <div className="portrait"></div>

            <div className="content">
                <p>Carlkdsjflsdkfj</p>
            </div>

            <div className="footer">
                <p>Carlkdsjflsdkfj</p>
            </div>
            
        </div>
    </div>
  )
}
