import { Link } from "react-router-dom";

const NewsCard = ({image, title, content}) => {
return (
    <>
        {/* <div className="my-3"> */}
            <div className="m-2 card" style={{width: '18rem'}}>
                <img src={image} className="card-img-top" alt="" />
                <div className="card-body" >
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{content}</p>
                    <div className="btn btn-primary">
                    <Link to={"/NewsDetail"}>Liat Berita</Link>
                    {/* <a href="NewsDetail" className="btn btn-dark">Liat Berita</a> */}
                    </div>
                </div>
            </div>
        {/* </div> */}
            
    </>
)}


export default NewsCard;
