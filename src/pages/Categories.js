import { useEffect, useState } from "react";
import LinkItem from "../components/LinkItem";

export default function Categories() {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, []);

    if (!categories.length) return 'Loading...'

    return <div className="catList">
        {categories.map(c => <LinkItem where={"items/" + c}> <div className="cat">{c}</div> </LinkItem>)}
    </div>
}