// Content.jsx
console.log("Mounting Content.jsx... <Content />");

import React from 'react'

class Content extends React.Component {
    render() {
        return (
            <form>
            <div className="content">
                <div className="line"></div>
 		         {/* Timeline item */}
                <div className="item">
                    <div className="avatar">
                    <img 
                        alt='Doug'
                        src="http://www.croop.cl/UI/twitter/images/doug.jpg" />
                        Doug
                    </div>

                    <span className="time">
                        An hour ago
                    </span>
                    <p>Ate lunch</p>
                    <div className="commentCount">
                        2
                    </div>
                    {/* ... */}
                </div>
            </div>
            </form>
        )
    }
}

export default Content

// eof