import axios from 'axios';

const ContactUs = async (email,message) => {
    const {data} = axios({
        method:'POST',
        url:"https://xenon-task.herokuapp.com/api/contact",
        data : {
            email : email,
            message : message
        }
    })

    return data
}

export default ContactUs
