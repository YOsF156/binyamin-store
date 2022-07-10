import { useLocation, useParams } from "react-router-dom"
import { useEffect, useState } from "react";

export default function Item(props) {

    const { id } = useParams()
    const loc = useLocation()
    const [item, setItem] = useState(loc.state)

    useEffect(() => {
        if (!item) {
            fetch('https://fakestoreapi.com/products/' + id)
                .then(res => res.json())
                .then(data => setItem(data))
        }
    }, []);

    if (!item && item != null) return <h3>Loading...</h3>

    return (
        <>
            {item ? <div className="cat img">
                <h4>{item.title}</h4>
                <img src={item.image} alt="" />
                <h5>{item.price}</h5>
            </div>

                : <h4>not found</h4>}
        </>)
}