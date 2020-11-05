import React from 'react';
import { Heading, XP, Title } from './styled';

function Experience(): JSX.Element {
  return (
    <div>
      <Title>
        <h1>Experience</h1>
        <h2>Some highlights from the journey I went through</h2>
      </Title>
      <XP>
        <Heading>
          Virtual Dog Shows
          <small>Since 2020</small>
        </Heading>

        <ul>
          <li>Things I did: code.</li>
        </ul>

        <p>Making a Product for others is something I believe I do quite well. Making a Product for myself is, well, something I have never done before.</p>

        <p>
          When chosing a stack, time available is a key element to consider. Do you have time to learn something new? In this case I had plenty of time to try out new things like NextJS, Apollo and
          GraphQL. But if I needed results fast, I should have probably stick to the stack I already mastered (i.e. React, Laravel).
        </p>

        <p>
          Also, I had to decide and integrate with other services. Do we need Service Providers to create a financial account so they can get paid? Stripe Connect. Do I really need to code a payment
          method management section in my app for customers? Stripe customer dashboard. Do we need a customer support and knowledge base tool? Freshdesk. Because I was on my own budget, I looked for
          services that had a good free tier and scale up pretty well when you get bigger.
        </p>

        <h3>The Stack</h3>

        <h3>Infrastructure &amp; CD</h3>
      </XP>
    </div>
  );
}

export default Experience;
