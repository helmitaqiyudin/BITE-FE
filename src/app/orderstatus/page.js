'use client'
import React, { useState, useEffect } from 'react';
import { getOrderStatus } from '@/services/orderService';
import Navbar from '@/components/Navbar';

function OrderStatusPage() {
    const [orderId, setOrderId] = useState('');
    const [orderStatus, setOrderStatus] = useState('');

    const handleOrderIdChange = (event) => {
        setOrderId(event.target.value);
    };

    const handleCheckStatus = async () => {
        try {
            const status = await getOrderStatus(orderId);
            setOrderStatus(status);
        } catch (error) {
            console.log('Error retrieving order status:', error);
        }
    };

    return (
        <>
            <Navbar />
            <div className="container mx-auto mt-8">
                <h2 className="text-2xl font-bold mb-4">Order Status</h2>

                <div className="border rounded p-4">
                    <h3 className="text-lg font-semibold mb-2">Check Your Order Status:</h3>
                    <div className="flex items-center mb-4">
                        <input
                            className="border rounded px-4 py-2 mr-2 text-black"
                            type="text"
                            value={orderId}
                            onChange={handleOrderIdChange}
                            placeholder="Enter order ID"
                        />
                        <button
                            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
                            onClick={handleCheckStatus}
                        >
                            Check Status
                        </button>
                    </div>

                    {orderStatus ? (
                        <div>
                            <h4 className="font-semibold">Order ID: {orderId}</h4>
                            <h4 className="font-semibold">Status: {orderStatus}</h4>
                        </div>
                    ) : (
                        <p>No order status found for the provided order ID.</p>
                    )}
                </div>
            </div>
        </>
    );
}

export default OrderStatusPage;
