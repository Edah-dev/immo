const fs = require('fs');
const path = require('path');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

dotenv.config();

class EmailService {
    constructor() {
        this.transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASSWORD,
            },
        });
    }

    /**
     * Render an email template with dynamic data
     * @param {string} templateName - Name of the template file
     * @param {Object} data - Dynamic data to replace in the template
     * @returns {string} Rendered HTML email template
     */
    renderTemplate(templateName, data) {
        const templatePath = path.join(__dirname, 'email-templates', `${templateName}.html`);
        
        try {
            let template = fs.readFileSync(templatePath, 'utf8');
            
            // Replace all placeholders
            Object.keys(data).forEach(key => {
                const placeholder = `{{${key}}}`;
                template = template.replace(new RegExp(placeholder, 'g'), data[key]);
            });
            
            return template;
        } catch (error) {
            console.error(`Error reading email template ${templateName}:`, error);
            throw new Error(`Email template ${templateName} not found`);
        }
    }

    /**
     * Send an email with a specific template
     * @param {Object} options - Email sending options
     * @param {string} options.to - Recipient email address
     * @param {string} options.template - Template name
     * @param {Object} options.data - Data to populate the template
     * @param {string} options.subject - Email subject
     * @returns {Promise<Object>} Nodemailer send result
     */
    async sendEmail({ to, template, data, subject }) {
        try {
            // Validate inputs
            if (!to || !template || !data || !subject) {
                throw new Error('Missing required email parameters');
            }

            // Render the HTML template
            const html = this.renderTemplate(template, data);

            // Prepare email options
            const mailOptions = {
                from: process.env.EMAIL_USER,
                to,
                subject,
                html,
            };

            // Send email
            const result = await this.transporter.sendMail(mailOptions);
            
            console.log(`Email sent successfully to ${to}`);
            return result;
        } catch (error) {
            console.error('Email sending failed:', error);
            throw error;
        }
    }

    /**
     * Send account verification email
     * @param {Object} user - User object
     * @param {string} verificationLink - Email verification link
     */
    async sendVerificationEmail(user, verificationLink) {
        await this.sendEmail({
            to: user.email,
            template: 'verification',
            subject: 'Vérification de votre compte',
            data: {
                firstName: user.firstName,
                lastName: user.lastName,
                verificationLink
            }
        });
    }

    /**
     * Send password reset email
     * @param {Object} user - User object
     * @param {string} resetToken - Password reset token
     */
    async sendPasswordResetEmail(user, resetLink) {
        //const resetLink = `${process.env.HOST}/reset-password?token=${resetToken}`;
        
        await this.sendEmail({
            to: user.email,
            template: 'password-reset',
            subject: 'Réinitialisation de votre mot de passe',
            data: {
                firstName: user.firstName,
                lastName: user.lastName,
                resetLink
            }
        });
    }

    /**
     * Send welcome email
     * @param {Object} user - User object
     */
    async sendWelcomeEmail(user) {
        await this.sendEmail({
            to: user.email,
            template: 'welcome',
            subject: 'Bienvenue sur notre plateforme',
            data: {
                firstName: user.firstName,
                lastName: user.lastName,
            }
        });
    }
}

module.exports = new EmailService();