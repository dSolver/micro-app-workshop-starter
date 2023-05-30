declare module "Shared/ContactCard" {
    export interface ContactCardProps {
        name: string;
        email: string;
        description?: string;
        image?: string;
    }
    declare const ContactCard: React.FC<ContactCardProps>;
    export default ContactCard;
}
