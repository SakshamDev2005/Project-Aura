import './Location.css';

const LocationMap = () => {
  return (
    <div className="location-section">  
      <div className="map-container">
        <iframe
          title="The Aura Location"
          src="https://maps.google.com/maps?q=vanshdeep%20aura&amp;t=m&amp;z=11&amp;output=embed&amp;iwloc=near"         
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"  
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="location-details">
        <h2>Location Map</h2>
        <div className="columns">
          <div>
            <h4>Travelling</h4>
            <ul>
              <li><span className='place'>Airport terminal 1</span> <span className='time'>14 Mins</span></li>
              <li><span className='place'>Gator Jagatpura Railway Station</span> <span className='time'>12 Mins</span></li>
              <li><span className='place'>Khatipura Railway Station</span> <span className='time'>14 Mins</span></li>
              <li><span className='place'>Ring Road Corridor</span> <span className='time'>5 Mins</span></li>
            </ul>

            <h4>Healthcare</h4>
            <ul>    
              <li><span className='place'>Bombay Hospital</span> <span className='time'>5 Mins</span></li>
              <li><span className='place'>Mahatma Gandhi Hospital</span> <span className='time'>14 Mins</span></li>
              <li><span className='place'>Jeevan Rekha Hospital</span> <span className='time'>8 Mins</span></li>
              <li><span className='place'>Asian Cancer Hospital</span> <span className='time'>7 Mins</span></li>
            </ul>
          </div>

          <div>
            <h4>Early Education</h4>
            <ul>
              <li><span className='place'>Jankidevi Public School</span> <span className='time'>10 Mins</span></li>
              <li><span className='place'>Ryan International School</span> <span className='time'>25 Mins</span></li>
              <li><span className='place'>Jayshree Periwal Global School</span> <span className='time'>9 Mins</span></li>
              <li><span className='place'>Kulish School</span> <span className='time'>5 Mins</span></li>
            </ul>

            <h4>Higher Education</h4>
            <ul>
              <li><span className='place'>Poorinma Engineering College</span> <span className='time'>10 Mins</span></li>
              <li><span className='place'>JECRC Engineering College</span> <span className='time'>10 Mins</span></li>
              <li><span className='place'>Suresh Gyan Vihar University</span> <span className='time'>15 Mins</span></li>
            </ul>

            <h4>Shopping</h4>
            <ul>
              <li><span className='place'>Pinkwalk</span> <span className='time'>7 Mins</span></li>
              <li><span className='place'>Vivacity</span> <span className='time'>7 Mins</span></li>
              <li><span className='place'>D-mart</span> <span className='time'>7 Mins</span></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationMap;
