const { Resend } = require("resend");

const resend = new Resend('re_R9cbHofR_HBqwanmrKqvBKxppEHaLZMCB');

const makeit = async() =>{

  try {
    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['hernanarevalo16@gmail.com'],
      subject: 'Hello world',
      html: '<strong>It works!</strong>'
    })

    console.log(data,error);
    
  } catch (error) {
    
  }
}

makeit()