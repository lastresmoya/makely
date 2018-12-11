import React from "react";
import PageTitle from "Components/Type/PageTitle";
import FAQItem from "Components/FAQItem";


function FAQsPage(props) {
    const faq1 = {
        id: 1,
        title: "What is Makely",
        content: "Lorem"
    }
    return (
        <div>
            <PageTitle title="Frequently Asked Questions" />
            <div className="container py-4">
                <section className="text-center py-4">
                    <h2 className="font-weight-bold">Clients</h2>
                    <div className="divider"></div>
                    <FAQItem {...faq1}/>
                </section>
                <section className="text-center py-4">
                    <h2 className="font-weight-bold">Creators</h2>
                    <div className="divider"></div>
                </section>
                <section className="text-center py-4">
                    <h2 className="font-weight-bold">Misc</h2>
                    <div className="divider"></div>
                </section>
            </div>
        </div>
    );
}

export default FAQsPage;
