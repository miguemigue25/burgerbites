// import React from 'react';
// import './WhyUs.css';
// import WhyUsCard from '../components/WhyUsCard';


// async function getWhyUsData() {
//     const res = await fetch('http://localhost:3000/api/whyus');
//     return res.json();
// }

// export default async function WhyUs() {
//     const items: [] = await getWhyUsData();

//     return (
//         <section id="why-us" className="why-us">
//             <div className="container" data-aos="fade-up">
//                 {/* <SectionTitle title="Why Us" subtitle="Why Choose Our Restaurant" /> */}
//                 <div className="row">
//                     {items &&
//                         items.length > 0 &&
//                         items.map(
//                             (item: { id: number; title: string; content: string }) => (
//                                 <WhyUsCard key={item.id} item={item} />
//                             )
//                         )}
//                 </div>
//             </div>
//         </section>
//     );
// }
