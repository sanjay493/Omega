
'use client';

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { StarIcon, BriefcaseIcon, AcademicCapIcon, HandRaisedIcon, SpeakerWaveIcon } from '@heroicons/react/24/solid';

const events = [
  {
    title: "The Grand Promise (October 2023, Ranchi)",
    location: "Ranchi, Jharkhand",
    description: "An Omega Home Tutor counsellor visited our residence in Ranchi. After a verbal interview with my 6th-grade daughter, I was persuaded to opt for a two-year package. They assured me of delivering the best services across PAN INDIA, promising a home tutor 5 days a week for the entire duration.",
    date: "2023-10-23",
    icon: <StarIcon className="h-7 w-7 text-white" />,
  },
  {
    title: "The Reality: Constant Disruptions (September 2023 - June 2024)",
    location: "",
    description: "Despite their assurances, the service was far from stable. By June 2024, I had already experienced <strong>five different tutors</strong> being changed. This constant churn severely disrupted my daughter's learning process and highlighted the disorganization within their service.",
    date: "2023-03-20",
    icon: <BriefcaseIcon className="h-7 w-7 text-white" />,
  },
  {
    title: "The Relocation & False Assurances (July 2024, Ghaziabad)",
    location: "Ghaziabad,NCR, Uttarpradesh",
    description: "In July 2024, I relocated to New Delhi and took up residence in Ghaziabad (Vaishali). I promptly informed the Omega contact person about my move. She explicitly assured me that the same service would be seamlessly provided in Ghaziabad",
    date: "2024-07-25",
    icon: <AcademicCapIcon className="h-7 w-7 text-white" />,
  },{
    title: "The Ghosting: Promises Broken (Present)",
    location: "Ghaziabad,NCR, Uttarpradesh",
    description: "Following repeated requests for service in Ghaziabad, the contact person began to ignore my calls. Even the original counsellor, who had made the initial promises, stopped responding, merely stating, &quot;we are trying...&quot; They have taken my significant payment and completely failed to deliver the promised service, leaving me with no recourse.",
    date: "2024-07-25",
    icon: <HandRaisedIcon className="h-7 w-7 text-white" />,
  },
];

const Timeline = () => {
  return (
    <div className="py-12 bg-gray-50">
      <h1 className="text-5xl font-extrabold text-center mb-16 text-red-800">A Timeline of Unfulfilled Promises</h1>
      <VerticalTimeline lineColor={'#00aeef'}>
        {events.map((event, index) => (
          <VerticalTimelineElement
            key={index}
            date={event.date}
            dateClassName="text-gray-500 font-semibold"
            iconStyle={{ background: '#00aeef', color: '#fff', boxShadow: `0 0 0 4px #00aeef, inset 0 2px 0 rgba(0,0,0,0.08), 0 3px 0 4px rgba(0,0,0,0.05)` }}
            icon={event.icon}
            contentStyle={{ background: '#fff', color: '#000', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', border: '1px solid #00aeef' }}
            contentArrowStyle={{ borderRight: '7px solid  #fff' }}
          >
            <h3 className="vertical-timeline-element-title text-2xl font-bold text-gray-800">{event.title}</h3>
            <h4 className="vertical-timeline-element-subtitle text-lg font-semibold text-gray-600 my-2">{event.location}</h4>
            <p className="text-gray-700" dangerouslySetInnerHTML={{ __html: event.description }}></p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default Timeline;
