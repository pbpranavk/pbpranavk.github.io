import React from "react";
// import PropTypes from 'prop-types';
import { Typography } from "@material-ui/core";
import { CodeBlock, monoBlue } from "react-code-blocks";

import { ArticleHeader } from "../common";

import "../../App.scss";

const CNN = (props) => {
  return (
    <div>
      <ArticleHeader title="Convoluted Neural Network" backUrl="/" />
      <div className="article-content">
        <Typography>Convoluted Neural Network</Typography>
        <Typography className="mt-16">
          convolution on n x n image with f x f filters
        </Typography>
        <Typography>padding p with stride s</Typography>
        <Typography>
          floor((((n + 2p - f) / s) + 1), (((n + 2p - f) / s) + 1) )
        </Typography>
        <Typography> Same convolution v/s Valid convolution</Typography>
        <CodeBlock
          text={`
          train_datagen = ImageDataGenerator(rescale=1./255)
          valid_datagen = ImageDataGenerator(rescale=1./255)

          train_dir = "pizza_steak/train/"
          test_dir = "pizza_steak/test/"

          train_data = train_datagen.flow_from_directory(train_dir,
                                                         batch_size=32,
                                                         target_size=(224, 224),
                                                         class_mode="binary",
                                                         seed=42)

          valid_data = valid_datagen.flow_from_directory(test_dir,
                                                         batch_size=32,
                                                         target_size=(224, 224),
                                                         class_mode="binary",
                                                         seed=42)

          model_1 = tf.keras.models.Sequential([
            tf.keras.layers.Conv2D(filters=10,
                                   kernel_size=3,
                                   activation="relu",
                                   input_shape=(224, 224, 3)),
            tf.keras.layers.Conv2D(10, 3, activation="relu"),
            tf.keras.layers.MaxPool2D(pool_size=2,
                                      padding="valid"),
            tf.keras.layers.Conv2D(10, 3, activation="relu"),
            tf.keras.layers.Conv2D(10, 3, activation="relu"),
            tf.keras.layers.MaxPool2D(2),
            tf.keras.layers.Flatten(),
            tf.keras.layers.Dense(1, activation="sigmoid")
          ])

          model_1.compile(loss="binary_crossentropy",
                        optimizer=tf.keras.optimizers.Adam(),
                        metrics=["accuracy"])

          history_1 = model_1.fit(train_data,
                                  epochs=5,
                                  steps_per_epoch=len(train_data),
                                  validation_data=valid_data,
                                  validation_steps=len(valid_data))
          `}
          language={"python"}
          showLineNumbers={false}
          theme={monoBlue}
        />
        <Typography>Multi Class Classification</Typography>
        <CodeBlock
          text={`
          model_9 = Sequential([
            Conv2D(10, 3, activation='relu', input_shape=(224, 224, 3)),
            Conv2D(10, 3, activation='relu'),
            MaxPool2D(),
            Conv2D(10, 3, activation='relu'),
            Conv2D(10, 3, activation='relu'),
            MaxPool2D(),
            Flatten(),
            Dense(10, activation='softmax')
          ])

          # Compile the model
          model_9.compile(loss="categorical_crossentropy",
                          optimizer=tf.keras.optimizers.Adam(),
                          metrics=["accuracy"])
          history_9 = model_9.fit(train_data,
            epochs=5,
            steps_per_epoch=len(train_data),
            validation_data=test_data,
            validation_steps=len(test_data))
          `}
          language={"python"}
          showLineNumbers={false}
          theme={monoBlue}
        />
      </div>
    </div>
  );
};

CNN.propTypes = {};

export default CNN;
