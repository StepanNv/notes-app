import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MailService {
  public constructor(private readonly mailerService: MailerService) {}

  public async sendConfirmationEmail(email: string, code: string) {
    const html = `
      <div style="font-family: Arial, sans-serif; padding: 20px; text-align: center;">
        <h2>Подтверждение регистрации</h2>
        <p>Вы запросили код для подтверждения почты.</p>
        <div style="background-color: #f4f4f4; padding: 15px; font-size: 24px; font-weight: bold; letter-spacing: 5px; border-radius: 8px; margin: 20px auto; width: fit-content;">
          ${code}
        </div>
        <p style="color: #888; font-size: 12px;">Если вы этого не делали, просто проигнорируйте это письмо.</p>
      </div>
    `;

    return this.sendMail(email, 'Код подтверждения почты', html);
  }

  private sendMail(email: string, subject: string, html: string) {
    return this.mailerService.sendMail({
      to: email,
      subject,
      html,
    });
  }
}
