import React, {useState, useEffect} from 'react';
import { PieChart } from 'react-minimal-pie-chart';

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';



const Projects = (props) => {

    return (
        <div className="container">
            <Accordion className="project-accordion" allowZeroExpanded={true}>
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            Project ONE
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <div className="project-panel">
                            <div className="proj-progress">
                                <div className="proj-status">
                                    <h2>Progress</h2>
                                    <PieChart style={{ height: '150px' }}
                                        data={[
                                            { title: 'One', value: 10, color: '#E38627' },
                                            { title: 'Two', value: 15, color: '#C13C37' },
                                            { title: 'Three', value: 20, color: '#6A2135' },
                                        ]}
                                    />
                                </div>
                                <div className="proj-latest">
                                    <h3>Latest</h3>
                                    <ul>
                                        <li>Exercitation in fugiat est ut ad ea cupidatat</li>
                                        <li>ut in cupidatat occaecat ut occaecat consequat</li>
                                        <li>est minim minim esse tempor laborum consequat esse </li>
                                        <li>adipisicing eu reprehenderit enim</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="proj-comments">
                                <h2>Comments</h2>
                                <div className="proj-user-comment">
                                    <img src="https://img.icons8.com/nolan/64/dog.png"/>
                                    <div className="short-comment">Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat</div>
                                </div>
                                <div className="proj-user-comment">
                                    <img src="https://img.icons8.com/nolan/64/cat.png"/>
                                    <div className="short-comment">ut in cupidatat occaecat ut occaecat consequat adipisicing eu reprehenderit enim</div>
                                </div>
                                <div className="proj-user-comment">
                                    <img src="https://img.icons8.com/nolan/64/dog.png"/>
                                    <div className="short-comment">adipisicing eu reprehenderit enim exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat</div>
                                </div>
                            </div>
                            <div className="proj-buttons">
                                <img src="https://img.icons8.com/nolan/64/speech-bubble-with-dots.png"/>
                                <img src="https://img.icons8.com/nolan/64/search-more.png"/>
                                <img src="https://img.icons8.com/nolan/64/enter-2.png"/>
                            </div>
                        </div>
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                                Project TWO
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                    <div className="project-panel">
                            <div className="proj-progress">
                                <div className="proj-status">
                                    <h2>Progress</h2>
                                    <PieChart style={{ height: '150px' }}
                                        data={[
                                            { title: 'One', value: 10, color: '#E38627' },
                                            { title: 'Two', value: 15, color: '#C13C37' },
                                            { title: 'Three', value: 20, color: '#6A2135' },
                                        ]}
                                    />
                                </div>
                                <div className="proj-latest">
                                    <h3>Latest</h3>
                                    <ul>
                                        <li>Exercitation in fugiat est ut ad ea cupidatat</li>
                                        <li>ut in cupidatat occaecat ut occaecat consequat</li>
                                        <li>est minim minim esse tempor laborum consequat esse </li>
                                        <li>adipisicing eu reprehenderit enim</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="proj-comments">
                                <h2>Comments</h2>
                                <div className="proj-user-comment">
                                    <img src="https://img.icons8.com/nolan/64/dog.png"/>
                                    <div className="short-comment">Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat</div>
                                </div>
                                <div className="proj-user-comment">
                                    <img src="https://img.icons8.com/nolan/64/cat.png"/>
                                    <div className="short-comment">ut in cupidatat occaecat ut occaecat consequat adipisicing eu reprehenderit enim</div>
                                </div>
                                <div className="proj-user-comment">
                                    <img src="https://img.icons8.com/nolan/64/dog.png"/>
                                    <div className="short-comment">adipisicing eu reprehenderit enim exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat</div>
                                </div>
                            </div>
                            <div className="proj-buttons">
                                <img src="https://img.icons8.com/nolan/64/speech-bubble-with-dots.png"/>
                                <img src="https://img.icons8.com/nolan/64/search-more.png"/>
                                <img src="https://img.icons8.com/nolan/64/enter-2.png"/>
                            </div>
                        </div>
                    </AccordionItemPanel>
                </AccordionItem>
            </Accordion>
        </div>
    )

}

export default Projects;