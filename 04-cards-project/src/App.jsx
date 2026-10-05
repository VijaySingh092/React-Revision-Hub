import Card from './components/Card';

const App = () => {

  const jobs = [
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/3840px-Google_%22G%22_logo.svg.png",
    companyName: "Google",
    datePosted: "5 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$45/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://www.freeiconspng.com/thumbs/amazon-icon/amazon-icon-6.png",
    companyName: "Amazon",
    datePosted: "2 weeks ago",
    post: "Backend Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$60/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://img.freepik.com/premium-vector/meta-company-logo_265339-667.jpg",
    companyName: "Meta",
    datePosted: "10 days ago",
    post: "React Developer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$50/hr",
    location: "Remote"
  },
  {
    brandLogo: "https://e7.pngegg.com/pngimages/949/742/png-clipart-apple-logo-alluring-apple-company-heart.png",
    companyName: "Apple",
    datePosted: "3 weeks ago",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$70/hr",
    location: "California, USA"
  },
  {
    brandLogo: "https://static.vecteezy.com/system/resources/previews/020/336/373/non_2x/netflix-logo-netflix-icon-free-free-vector.jpg",
    companyName: "Netflix",
    datePosted: "1 week ago",
    post: "UI Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$65/hr",
    location: "Remote"
  },
  {
    brandLogo: "https://pbs.twimg.com/media/C6xQtuYU0AAhzZc.jpg",
    companyName: "Microsoft",
    datePosted: "4 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$55/hr",
    location: "Noida, India"
  },
  {
    brandLogo: "https://www.clipartmax.com/png/middle/39-396698_tesla-logo-%5Beps-motors%5D-tesla-logo-icon.png",
    companyName: "Tesla",
    datePosted: "2 months ago",
    post: "Embedded Systems Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$75/hr",
    location: "Texas, USA"
  },
  {
    brandLogo: "https://e7.pngegg.com/pngimages/576/126/png-clipart-logo-brand-adobe-certified-expert-adobe-systems-ibm-watson-logo-angle-text.png",
    companyName: "Adobe",
    datePosted: "6 days ago",
    post: "Frontend Engineer",
    tag1: "Part Time",
    tag2: "Mid Level",
    pay: "$50/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://toppng.com/uploads/preview/uber-new-logo-2018-11550112725dlrgv5nhdy.png",
    companyName: "Uber",
    datePosted: "8 days ago",
    post: "Full Stack Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$68/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://pngdownload.io/wp-content/uploads/2024/02/Airbnb-Logo-global-hospitality-travel-vacation-rental-online-booking-transparent-PNG-image-jpg.webp",
    companyName: "Airbnb",
    datePosted: "3 days ago",
    post: "Backend Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$62/hr",
    location: "Remote"
  }
];

// console.log(jobs);


  return (
    <div className='parent'>

    {jobs.map(function(elem,idx){  
      console.log(idx); 

      return <div key={idx}>
        <Card company ={elem.companyName} post={elem.post} tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} brandLogo={elem.brandLogo} datePosted={elem.datePosted} location={elem.location}/>
      </div>
    })}
    </div>
  )
}

export default App
