import { useEffect } from 'react';

function useKeepAlive(endpoint, interval) {
    useEffect(() => {
        const keepAliveInterval = setInterval(() => {
            fetch(endpoint)
                .then(response => {
                    if (!response.ok) {
                        console.error('Keep-alive request failed:', response.status);
                    }
                })
                .catch(error => {
                    console.error('Keep-alive request failed:', error);
                });
        }, interval);

        return () => clearInterval(keepAliveInterval);
    }, [endpoint, interval]);
}

export default useKeepAlive;
