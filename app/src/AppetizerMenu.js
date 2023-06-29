import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Header } from "./Header";

export function AppetizerMenu() {
    const [menuItems, setMenuItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('https://www.jsonkeeper.com/b/MDXW')
            .then(response => {
                setMenuItems(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching menu items', error);
                setLoading(false);
            });


    }, []);

    if(loading) {
        return(
            <div>Loading...</div>
        )
    }

    const filteredItems = menuItems.filter( item => item.category === "Appetizer");

    return (
        <>
        <Header />

            <h1><u>Menu</u></h1>
                <div className="row">
                {filteredItems.map (item => (                                        
                    <div key= {item.id} className="col-md-6">
                        <div className="card-deck h-100 card border-dark">
                        <div className="card-body">
                        <h2 className="card-title">{item.title}</h2>
                        <h4>Category: {item.category}</h4>                        
                        <h5>Description: {item.description}</h5>
                        <h6>{item.price}</h6>
                        <br />
                        </div>
                        </div>
                    </div>
                ))}
                </div>
        </>
    )
}
