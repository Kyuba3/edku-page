import express, { Request, Response } from 'express';
import nodemailer from 'nodemailer';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/send-email', async (req: Request, res: Response) => {
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'yourEmail@gmail.com',
            pass: 'yourPassword',
        },
    });

    const mailOptions = {
        from: req.body.email, // Sender address
        to: 'yourEmail@gmail.com', // List of recipients
        subject: 'New Contact Form Submission', // Subject line
        text: `Name: ${req.body.name}\nEmail: ${req.body.email}\nMessage: ${req.body.message}`, // Plain text body
    };

    try {
        let info = await transporter.sendMail(mailOptions);
        console.log('Email sent: ' + info.response);
        res.json({ status: 'sent' });
    } catch (error) {
        console.error('Error:', error);
        res.json({ status: 'error' });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:3001/`);
});