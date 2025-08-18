import { useState, useEffect } from "react";

export default function SellerAds({ sellerId }) {

    const [sellerAds, setSellerAds] = useState([]);

    useEffect(() => {
        const fetchSellerAds = async () => {
            try {
                const options = {
                    method: 'GET',
                    headers: { 'Content-type': 'application/json' },
                };
                const response = await fetch(`${import.meta.env.VITE_API_URL}/api/ad/seller-ads/${sellerId}`, options);
                const data = await response.json();
                console.log('seller ads ->', data)
                setSellerAds(data.ads);
            } catch (error) {
                console.error(error);
            }
        };
    }, []);

    return (
        <div>

        </div>
    );
};