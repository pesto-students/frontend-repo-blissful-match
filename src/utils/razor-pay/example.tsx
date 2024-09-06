import React, { useCallback } from 'react';
import useRazorPay, { RazorPayOptions } from '@utils/razor-pay';

// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
async function createOrder(_params: unknown): Promise<any> {
    throw new Error('Function not implemented.');
}

const Snippet: React.FC = () => {
    const [RazorPay] = useRazorPay();

    const handlePayment = useCallback(async () => {
        const order = await createOrder({});

        const options: RazorPayOptions = {
            key: 'YOUR_KEY_ID',
            amount: '3000',
            currency: 'INR',
            name: 'Acme Corp',
            description: 'Test Transaction',
            image: 'https://example.com/your_logo',
            order_id: order.id,
            handler: (res) => {
                console.log(res);
            },
            prefill: {
                name: 'Piyush Garg',
                email: 'youremail@example.com',
                contact: '9999999999',
            },
            notes: {
                address: 'Razorpay Corporate Office',
            },
            theme: {
                color: '#3399cc',
            },
        };

        const rzpay = new RazorPay(options);
        rzpay.open();
    }, [RazorPay]);

    // useEffect(() => {
    //     if (isLoaded) {
    //         handlePayment();
    //     }
    // }, [isLoaded, handlePayment]);

    return (
        <div className={'App'}>
            <button onClick={handlePayment}>Click</button>
        </div>
    );
};

export default Snippet;
