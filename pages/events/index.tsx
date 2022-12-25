import React from "react";
import { EventCategoryCard } from "../../src/components/EventCategoryCard/EventCategoryCard";
import { EventCategory } from "../../models/TEventCategory";

interface PageProps {
    events_categories: [EventCategory];
}

export default function Page({ events_categories }: PageProps) {
    return (
        <main>
            <h1>Events</h1>
            <div>
                {events_categories.map((evt) => (
                    <EventCategoryCard
                        key={`EventCategoryCard-${evt.id}`}
                        title={evt.title}
                        id={evt.id}
                        description={evt.description}
                        image={evt.image}
                    />
                ))}
            </div>
        </main>
    );
}

export async function getStaticProps() {
    const { events_categories } = await import("../../data/data.json");

    console.log({ events_categories });

    return {
        props: {
            events_categories,
        },
    };
}
