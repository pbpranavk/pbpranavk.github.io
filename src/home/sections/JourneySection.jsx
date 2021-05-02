import React from "react";
import PropTypes from "prop-types";
import { Box, Typography } from "@material-ui/core";

import { JourneyCard } from "../components";

const JourneySection = ({ classes = {} }) => {
  return (
    <Box mt={10}>
      <Box display="flex" className={classes.justifyContentCenter}>
        <Typography
          variant="h3"
          className={classes.sectionTitle}
          color="primary"
        >
          My Journey
        </Typography>
      </Box>
      <Box display="flex" className={classes.sectionContent}>
        <JourneyCard
          index={0}
          title={"An Intro to Programming with Python"}
          description={`I started programming in 2015 and the first language I learnt was Python.
                 I learnt the basics of the language and explored the various packages it had to offer.
                  I was pleasantly surprised when I understood how powerful it was. From numpy to
                  Pytorch, from gpio to drone-kit. from SimpleHTTPServer to Django. I quickly understood
                  that software is developed as a collective effort and open source has a pivotal role in
                  its development.
                  `}
          img="pyth.jpeg"
        />

        <JourneyCard
          index={1}
          title={"Self Driving Car"}
          description={`In my second year of B.Tech I contributed to a project at our R&D cell
              in KMIT. We took a remote controlled car and replaced its circuit board with a raspberry pi.
              We then hosted a server and there by a web page to control it through that webpage from a
              mobile. We created a path for it to travel. We attached a camera to it and took images
              with it. We feed this data to an Artificial Neural Network. We got an accuracy of 84%.
              This gave me a deep exposure into the world of machine and deep learning. I went through the
              cutting edge research in this space.I explored Capsule Networks, CNN, RNN, LSTM, GRU etc.
              `}
          img="car.png"
        />
        <JourneyCard
          index={2}
          title={"Toil with Java"}
          description={`In my third year of B.Tech I started learning more about Big Data and
              its engineering. I started with Hadoop and slowly explored few more Big Data Technologies
              like Spark, Pig, Hive, Sqoop, Flume & ZooKeeper. I wrote code in this phase of my software
              journey in Java because python ran on only one thread and most importantly MapReduce
              was predominantly written in Java. I learnt all the core concepts of Java along the way.
              My first OO experience was with Java. In the same phase I explored emerging tech like
              Blockchain and IOT.
              `}
          img="bigD.png"
        />
        <JourneyCard
          index={3}
          title={"Cross Platform App Dev"}
          description={`In my final year of Engineering, I got an internship with Kony. I
              was building cross platform mobile apps with javascript, initially js was a bit
              confusing and as I understood more and more I fell in love with language. In the
              same time I explored Unity and C#. I built few AR and VR applications with it.
              `}
          img="rn-android.png"
        />
        <JourneyCard
          index={4}
          title={"Full Stack Dev"}
          description={`Finally after my graduation, I joined my first company (Beautiful Code) as a full time
              Software Engineer :). I learnt about gRPC and micro-services here. 2020 was bang
              our company had to reinvent themselves, so did I. I find myself building easy to use and
              smooth, responsive UI components these days.
              `}
          img="full_stack.jpeg"
        />
      </Box>
    </Box>
  );
};

JourneySection.propTypes = {
  classes: PropTypes.object,
};

export default JourneySection;
