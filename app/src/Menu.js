import React, { useEffect, useState } from "react";
import axios from 'axios';

export function Menu() {
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
    return (
        <>
            <h1><u>Menu</u></h1>
                {menuItems.map (item => (
                    <div key= {menuItems.id}>
                        <h2>{item.title}</h2>
                        <h4>Category: {item.category}</h4>                        
                        <h5>Description: {item.description}</h5>
                        <h6>{item.price}</h6>
                        <br />
                    </div>
                ))}
        </>
    )
}
