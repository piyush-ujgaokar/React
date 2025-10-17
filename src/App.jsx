import React from 'react'
import Cards from './components/Cards'

const App = () => {

const jobOpenings = [
  {
    companyLogo: "https://media.wired.com/photos/5926ffe47034dc5f91bed4e8/master/pass/google-logo.jpg",
    companyName: "Google",
    jobPosted: "2 days ago",
    jobRole: "Full Stack Developer",
    tag1: "Full-time",
    tag2: "Junior Level",
    pay: "$120/hr",
    location: "Bangalore, India"
  },
  {
    companyLogo: "https://logo.clearbit.com/meta.com",
    companyName: "Meta",
    jobPosted: "5 days ago",
    jobRole: "Data Analyst",
    tag1: "Full-time",
    tag2: "Senior Level",
    pay: "$140/hr",
    location: "Hyderabad, India"
  },
  {
    companyLogo: "https://logo.clearbit.com/amazon.com",
    companyName: "Amazon",
    jobPosted: "1 day ago",
    jobRole: "Backend Engineer",
    tag1: "Full-time",
    tag2: "Mid Level",
    pay: "$110/hr",
    location: "Pune, India"
  },
  {
    companyLogo: "https://logo.clearbit.com/apple.com",
    companyName: "Apple",
    jobPosted: "3 days ago",
    jobRole: "UI/UX Designer",
    tag1: "Part-time",
    tag2: "Freshers",
    pay: "$95/hr",
    location: "Mumbai, India"
  },
  {
    companyLogo: "https://logo.clearbit.com/netflix.com",
    companyName: "Netflix",
    jobPosted: "6 days ago",
    jobRole: "Frontend Engineer",
    tag1: "Full-time",
    tag2: "Senior Level",
    pay: "$150/hr",
    location: "Delhi, India"
  },
  {
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png",
    companyName: "Microsoft",
    jobPosted: "4 days ago",
    jobRole: "Data Scientist",
    tag1: "Full-time",
    tag2: "Junior Level",
    pay: "$130/hr",
    location: "Bangalore, India"
  },
  {
    companyLogo: "https://logo.clearbit.com/tesla.com",
    companyName: "Tesla",
    jobPosted: "7 days ago",
    jobRole: "Machine Learning Engineer",
    tag1: "Full-time",
    tag2: "Senior Level",
    pay: "$160/hr",
    location: "San Francisco, USA"
  },
  {
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/960px-IBM_logo.svg.png",
    companyName: "IBM",
    jobPosted: "3 days ago",
    jobRole: "Cloud Architect",
    tag1: "Full-time",
    tag2: "Mid Level",
    pay: "$125/hr",
    location: "Chennai, India"
  },
  {
    companyLogo: "https://blog.adobe.com/en/publish/2020/05/28/media_1d87bf78b1ce19defbef0c7858b4df696215a4048.png?width=750&format=png&optimize=medium",
    companyName: "Adobe",
    jobPosted: "5 days ago",
    jobRole: "Product Designer",
    tag1: "Part-time",
    tag2: "Junior Level",
    pay: "$100/hr",
    location: "Gurgaon, India"
  },
  {
    companyLogo: "https://logo.clearbit.com/openai.com",
    companyName: "OpenAI",
    jobPosted: "1 day ago",
    jobRole: "AI Research Engineer",
    tag1: "Full-time",
    tag2: "Senior Level",
    pay: "$180/hr",
    location: "Remote"
  }
];
  return (
    <div className='parent'>
        {jobOpenings.map((elem,idx)=>{
              return <Cards key={idx} companyName={elem.companyName} location={elem.location} tag1={elem.tag1} pay={elem.pay} tag2={elem.tag2} companyLogo={elem.companyLogo}  jobRole={elem.jobRole} jobPosted={elem.jobPosted}/>
           
            
        })}
    </div>
  )
}

export default App