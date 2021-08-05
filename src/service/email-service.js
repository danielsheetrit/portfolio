import emailjs from 'emailjs-com';

const USER_ID = 'user_yjE54HcEgQU8fG8QZhWCH';
const SERVICE_ID = 'service_mmj7nf2';
const TEMPLATE_ID = 'template_i0u123j';

export async function emailSend(el) {
    try {
        const result = await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, el, USER_ID)
        return result
    } catch (err) {
        console.log('send error', err);
    }
}