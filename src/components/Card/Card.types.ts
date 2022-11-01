export type CardProps = {
    size?: "lg" | "sm";
    imgSrc?: string;
    name?: string;
    model?: string;
    description?: string;
    deliveryDate?: Date,
    price?: number;
}