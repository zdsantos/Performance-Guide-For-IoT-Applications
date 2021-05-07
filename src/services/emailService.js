import { init, sendForm } from 'emailjs-com';

class EmailService {

    constructor() {
        init('user_KBxYgOwHY7puFHtlzAraU');
    }

    sendEmail(formId) {
        sendForm('default_service', 'YOUR_TEMPLATE_ID', formId)
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
            }, function(error) {
                console.log('FAILED...', error);
            });
    }

    generateContactNumber() {
        const numStr = "000000" + (Math.random() * 1000000 | 0);
        return numStr.substring(numStr.length - 6);
    }

}

export default new EmailService();