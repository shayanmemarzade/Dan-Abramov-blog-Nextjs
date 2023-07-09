import { format, subDays } from 'date-fns';

export function subDay(post_id: number) {
    const current_date = new Date();
    return subDays(current_date, post_id)
}
export function formatDate(date: Date) {
    return format(date, 'MMMM d,yyyy');
}