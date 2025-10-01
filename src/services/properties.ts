import axios from 'axios';

export const getProperties = async () =>{
    
    const responose = await axios.get('http://localhost:3000/api/properties')
    
    console.log(responose);
};