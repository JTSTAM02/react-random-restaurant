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
}
