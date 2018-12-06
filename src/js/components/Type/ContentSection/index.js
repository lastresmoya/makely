import React from "react";

function ContentSection({title, content}) {
    return (
        <section className="text-center py-4">
            <h2 className="font-weight-bold">{title}</h2>
            <div className="divider"></div>
            <p className="text-muted">{content}</p>
        </section>
    );
}

export default ContentSection;
