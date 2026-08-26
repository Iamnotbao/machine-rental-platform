import { contactInfo } from '@/features/contact/data/contact.mock';
import type { ContactFormPayload, ContactInfo, ContactSubmitResult } from '@/features/contact/types';

const wait = (milliseconds = 220) => new Promise<void>((resolve) => window.setTimeout(resolve, milliseconds));

export const contactUiService = {
  async info(): Promise<ContactInfo> { await wait(100); return contactInfo; },
  async submit(payload: ContactFormPayload): Promise<ContactSubmitResult> {
    await wait();
    if (!payload.name.trim() || !payload.email.includes('@') || !payload.message.trim()) throw new Error('Vui lòng nhập họ tên, email và nội dung liên hệ.');
    return { ticketId: `CONTACT-${Date.now()}` };
  },
};
