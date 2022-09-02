import React from 'react';
import '../App.css';
import './ResourcePage.css';

function ResourcePage() {
  return (
    <div>
       <div className='Resource-container'>
            <div className='Resource-text-container'>
                <div className='Resource-text'>
                    <div classname='Resource-text-head'>
                        <p>Depression</p>
                        <hr/>
                    </div>
                    <div className='Resource-text-details2'>
                        <p>People suffering from depression feel sad most of the time. They lose interest in work, pleasure in things 
                            that they used to enjoy and focus in everything. They suffer from indecisiveness a lot. They have difficulty 
                            in sleep. They feel excessive remorse and stay depressed most of the time. They have recurring suicidal or 
                            death thought.
                        </p>
                    </div>
                </div>
                <div className='Resource-text'>
                    <div classname='Resource-text-head'>
                        <p>Post Traumatic Stress Disorder</p>
                        <hr/>
                    </div>
                    <div className='Resource-text-details2'>
                        <p>After experiencing or observing any life threatening event, people can suffer from PTSD. 
                            They can have recurring thought, dream or flashbacks about the incident. Seeing anything similar 
                            or related can create stress in them and they can go out of their way to avoid those. They can 
                            feel like the incident is happening again and again. They might forget related memory. 
                            They get shocked and afraid easily. They might feel detached from their sorrounding.</p>
                    </div>
                </div>
            </div>
            <div className='Resource-text-container'>
                <div className='Resource-text'>
                    <div classname='Resource-text-head'>
                        <p>Anxiety</p>
                        <hr/>
                    </div>
                    <div className='Resource-text-details2'>
                        <p>People suffering from anxiety disorder usually have negative thoughts about environment, 
                            situation or  different subjects most or all of the time. They have excessive and irrelevant fear. 
                            They feel restless and have difficulty in sleeping. They experience sweating, pounding heart, 
                            muscle tighten, shortness of breath, trembling, cold feet and palm, dry mouth, nausea, dizziness etc.
                        </p>
                    </div>
                </div>
                <div className='Resource-text'>
                    <div classname='Resource-text-head'>
                        <p>Obsessive Compulsive Disorder</p>
                        <hr/>
                    </div>
                    <div className='Resource-text-details2'>
                        <p>People suffering from OCD can have recurring thought about a topic or image and to stop these thoughts,
                             they can do same things recursively. They keep doing same task until done in perfect order. They 
                             feel difficulty in everyday life due to these thoughts or actions. They can do a task specific number
                              of time or can calculate same thing multiple times. They clean, wash or shower multiple times. 
                              They keep searching again and again. They keep asking for forgiveness multiple times.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default ResourcePage;
