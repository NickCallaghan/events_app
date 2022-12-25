import React from "react";
import Image from "next/image";

export interface EventCategoryCardProps {
    id: string;
    image: string;
    title: string;
    description: string;
}

export function EventCategoryCard({
    id,
    image,
    title,
    description,
}: EventCategoryCardProps) {
    return (
        <article key={`event-${id}`}>
            <a href={`events/${id}`}>
                <h2>{title}</h2>
            </a>
            <Image src={image} alt={title} width="500" height={200} />
            <p>{description}</p>
        </article>
    );
}
