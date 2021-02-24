import React from 'react'
import Jumbotron  from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image'
import { LinkContainer } from 'react-router-bootstrap';

const About = () => (
  <Jumbotron>
    <h1>A rolling stone gathers no Moss</h1>
    <Image className="concert-pic" src="andrew-gaines-Yz2n1NX2TFI-unsplash.jpg"  />
    <p>Moss is a web application that seeks to answer one question: Is this band good live? Using crowd sourced reviews and the BandsinTown API, we can start to build a database of reviews to uncover trends about bands, and venues. The simple review system just asks for 5 metrics:</p>
     <ol>
        <li> The performance: how was the show overall? </li>
        <li> The set: did they play your favorite songs?</li>
        <li> The sound: Were you able to hear them? Were they clear? Was it too loud?</li>
        <li> The venue: Did you enjoy the venue? The atmosphere? </li>
        <li> Feel free to compose your own written review as well!</li>
      </ol>
    <p> Once you answer these questions Moss will then spit out an overall final score for your review, as well as add your review to the review database. This enables Moss to give concerts an aggregated score based on all the reviews for that concert!</p>
    <strong>Enjoy gathering Moss</strong>
    <LinkContainer to="/concerts">
      <Button> Search Concerts </Button>
    </LinkContainer>
  </Jumbotron>
);


export default About;
