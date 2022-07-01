import React from 'react';
import '../App.css';
import './ServicePage.css';

function ServicePage() {
  return (
    <div>
       <div className='service-container'>
            <div className='service-head'>
                <h3>What type of service are you looking for?</h3>
            </div>
            <div className='service-text-container'>
                <div className='service-text'>
                    <div classname='service-text-head'>
                        <p>Individual Psychotherapy</p>
                        <hr/>
                    </div>
                    <div className='service-text-details'>
                        <p>(For myself)</p>
                    </div>
                    <div className='service-text-details2'>
                        <p>Any kind of mental stress, problem and illness in daily life including 
                            Depression, Anxiety, Obsessive Compulsive Disorder (OCD), Trauma, Social
                            Anxiety, Personality Disorders, Panic Disorders, Bipolar Disorder,
                            Psycho-sexual Disorders, Schizophrenia etc.
                        </p>
                    </div>
                </div>
                <div className='service-text'>
                    <div classname='service-text-head'>
                        <p>Couples Therapy</p>
                        <hr/>
                    </div>
                    <div className='service-text-details'>
                        <p>(For me and my partner)</p>
                    </div>
                    <div className='service-text-details2'>
                        <p>Relationship problems, conflicts with partner/spouse.</p>
                    </div>
                </div>
                <div className='service-text'>
                    <div classname='service-text-head'>
                        <p>Family Therapy</p>
                        <hr/>
                    </div>
                    <div className='service-text-details'>
                        <p>(For family members)</p>
                    </div>
                    <div className='service-text-details2'>
                        <p>Relationship problems, conflicts with family members.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default ServicePage;
