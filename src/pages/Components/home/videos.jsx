import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import ReactPlayer from "react-player"

const Videos = ({ data, searchTitle, postQuery }) => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()
    function navigateFunc(item) {
        navigate(`/view-lessons?${item}`, { replace: true })
    }
    function storage(video, title, description) {
        localStorage.setItem("api", video)
        localStorage.setItem("title", title)
        localStorage.setItem("description", description)
    }

    return (
        <>
            {
                loading ? (
                    <h4> loding ....</h4 >
                ) : (
                    data
                        .filter((value) => {
                            if (searchTitle === "") {
                                return true;
                            } else if (
                                value.title.toLowerCase().includes(postQuery)
                            ) {
                                return value;
                            }
                        })
                        .map((item, index) => (
                            <div
                                className="videos"
                                key={item.id}
                            >
                                <div className="video">
                                    <video  src={item.video} 
                                        onClick={(e) => storage(item.video, item.title, item.description)
                                            ? console.log("error") :
                                            navigateFunc(item.video)
                                        }
                                        
                                         ></video>
                                </div>
                                <div className="video-title">
                                    <h3>{item.title}</h3>
                                </div>
                                <div className="description">
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        ))
                )}
        </>
    )
}

export default Videos
