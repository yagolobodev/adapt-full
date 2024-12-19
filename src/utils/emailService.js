import emailjs from '@emailjs/browser';

// Initialize EmailJS with your user ID (this is your Public Key from EmailJS)
emailjs.init("YOUR_USER_ID"); // Replace with your EmailJS user ID from Account > API Keys

export const sendEmail = async (templateParams) => {
  try {
    const response = await emailjs.send(
      'YOUR_SERVICE_ID',  // Replace with your EmailJS service ID from Email Services
      'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID from Email Templates
      templateParams
    );
    return { success: true, response };
  } catch (error) {
    console.error('Failed to send email:', error);
    return { success: false, error };
  }
};
