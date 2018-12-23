import React from "react";
import PageTitle from "Components/Type/PageTitle";
import FAQItem from "Components/FAQItem";


function FAQsPage(props) {
    const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pretium pretium tempor. Ut eget imperdiet neque. In volutpat ante semper diam molestie, et aliquam erat laoreet. Sed sit amet arcu aliquet, molestie justo at, auctor nunc. Phasellus ligula ipsum, volutpat eget semper id, viverra eget nibh. Suspendisse luctus mattis cursus. Nam consectetur ante at nisl hendrerit gravida. `;
    const faq1 = {id: 1,title: "What is Makely?",content: lorem}
    const faq2 = { id: 2, title: "What if I already have a 3D model file?", content: lorem }
    const faq3 = { id: 3, title: "How do I find the right creator?", content: lorem }
    const faq4 = { id: 4, title: "What if I don't know how to 3D model?", content: lorem }
    const faq5 = { id: 5, title: "How much does it cost?", content: lorem }
    const faq6 = { id: 6, title: "Do I have to pay for postage?", content: lorem }
    const faq7 = { id: 7, title: "Can I become a Creator?", content: lorem }
    const faq8 = { id: 8, title: "How much can I earn?", content: lorem }
    const faq9 = { id: 9, title: "How do you operate?", content: lorem }
    const faq10 = { id: 10, title: "If I have a problem how can I contact you?", content: lorem }
    return (
        <div>
            <PageTitle title="Frequently Asked Questions" />
            <div className="container py-4">
                <section className="text-center py-4">
                    <h2 className="font-weight-bold">Clients</h2>
                    <div className="divider"></div>
                    <FAQItem {...faq1}/>
                    <FAQItem {...faq2} />
                    <FAQItem {...faq3} />
                    <FAQItem {...faq4} />
                    <FAQItem {...faq5} />
                    <FAQItem {...faq6} />
                </section>
                <section className="text-center py-4">
                    <h2 className="font-weight-bold">Creators</h2>
                    <div className="divider"></div>
                    <FAQItem {...faq7} />
                    <FAQItem {...faq8} />
                </section>
                <section className="text-center py-4">
                    <h2 className="font-weight-bold">Misc</h2>
                    <div className="divider"></div>
                    <FAQItem {...faq9} />
                    <FAQItem {...faq10} />
                </section>
            </div>
        </div>
    );
}

export default FAQsPage;
