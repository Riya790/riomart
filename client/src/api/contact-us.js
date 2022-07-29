import axios from 'axios';

const ContactUs = async (email,message) => {
    const {data} = axios({
        method:'POST',
        url:"http://localhost:8080/api/contact",
        data : {
            email : email,
            message : message
        }
    })

    return data
}

export default ContactUs