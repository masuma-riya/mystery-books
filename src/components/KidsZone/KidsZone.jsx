import image from '../../assets/images/active.png'
const KidsZone = () => {
    return (
        <div className="mt-10 text-center text-xl">

<div className="stats shadow mb-20">
  
  <div className="stat">
    <div className="stat-figure text-primary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
    </div>
    <div className="stat-title">Total Read</div>
    <div className="stat-value text-primary">16.5K</div>
    <div className="stat-desc text-sm">21% more than last month</div>
  </div>
  
  <div className="stat">
    <div className="stat-figure text-secondary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
    </div>
    <div className="stat-title">Sold Books</div>
    <div className="stat-value text-secondary">10k</div>
    <div className="stat-desc text-sm">50% more than last month</div>
  </div>
  
  <div className="stat">
    <div className="stat-figure text-secondary">
      <div className="avatar online">
        <div className="w-24 rounded-full">
          <img src={image} />
        </div>
      </div>
    </div>
    <div className="stat-value">86%</div>
    <div className="stat-title">Rating done</div>
    <div className="stat-desc  text-lg text-secondary">Waiting fore more?</div>
  </div>
  
</div>
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
        <li>
          <div className="timeline-middle">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
          </div>
          <div className="timeline-start md:text-end mb-10">
            <div className="text-lg font-black mb-5">Why Choose US?</div>
            We serve as timeless companions, offering solace, wisdom, and inspiration in moments of solitude. Each book holds the power to educate, enlighten, and broaden perspectives, enriching minds with knowledge.
          </div>
          <hr/>
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
          </div>
          <div className="timeline-end mb-10">
            <div className="text-lg font-black mb-4">What's Special In Us?</div>
            From gripping narratives to profound insights, books foster empathy and understanding, connecting readers across cultures and generations.
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
          </div>
          <div className="timeline-start md:text-end mb-10">
            <div className="text-lg font-black mb-5">Our Services</div>
            Our Bookshelf Services Provide a Curated Selection Tailored to Your Tastes. Dive into a World of Literary Delights, Where Every Shelf Holds Adventures, Knowledge, and Inspiration.
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
          </div>
          <div className="timeline-end mb-10">
            <div className="text-lg font-black mb-4">What's In Our Books?</div>
            Explore a Diverse Range of Genres and Authors, Handpicked to Suit Your Preferences, and Embark on an Unforgettable Journey through the Pages of Timeless Treasures. With our Services, Your Love for Reading Finds It's Perfect Home!
          </div>
          <hr />
        </li>
        <li>
          <hr />
          
          
        </li>
      </ul>
      </div>
      
    );
};

export default KidsZone;