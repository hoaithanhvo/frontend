// src/pages/Home.jsx
import api from '../services/api';

const Home = () => {
    const handleApiCall = async () => {
        try {
            const response = await api.get('/some-endpoint');
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h1>Welcome to the Home Page</h1>
            <button onClick={handleApiCall}>Call API</button>
        </div>
    );
};

export default Home;
