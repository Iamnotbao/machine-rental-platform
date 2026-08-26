import { useMutation, useQuery } from '@tanstack/react-query';
import { contactUiService } from '@/features/contact/services/contact-ui.service';

export function useContactInfo() { return useQuery({ queryKey:['client-contact-info'], queryFn:() => contactUiService.info() }); }
export function useSubmitContact() { return useMutation({ mutationFn: contactUiService.submit }); }
