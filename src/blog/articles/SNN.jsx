import React from "react";
// import PropTypes from 'prop-types';
import { Typography } from "@material-ui/core";
import { CodeBlock, monoBlue } from "react-code-blocks";

import { ArticleHeader } from "../common";

import "../../App.scss";

const SNN = (props) => {
  return (
    <div>
      <ArticleHeader title="Shallow Neural Network" backUrl="/" />
      <div className="article-content">
        <Typography>Shallow Neural Network</Typography>
        <Typography className="mt-16">
          A simple Neural Network with 1 hidden layer
        </Typography>
        <Typography className="mt-16">Coming Soon</Typography>

        <CodeBlock
          text={`
          model = tf.keras.Sequential([
            tf.keras.layers.Dense(1)
          ])

          model.compile(loss=tf.keras.losses.mae,
                        optimizer=tf.keras.optimizers.SGD(),
                        metrics=["mae"])

          model.fit(tf.expand_dims(X, axis=-1), y, epochs=5)
          `}
          language={"python"}
          showLineNumbers={false}
          theme={monoBlue}
        />
      </div>
    </div>
  );
};

SNN.propTypes = {};

export default SNN;
