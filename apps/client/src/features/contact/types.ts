export interface ContactInfo { email:string; phone:string; address:string; workingHours:string; }
export interface ContactFormPayload { name:string; email:string; phone:string; subject:string; message:string; }
export interface ContactSubmitResult { ticketId:string; }
