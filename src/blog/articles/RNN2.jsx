import React from "react";
// import PropTypes from 'prop-types';
import { Typography } from "@material-ui/core";
import { CodeBlock, monoBlue } from "react-code-blocks";

import { ArticleHeader } from "../common";

import "../../App.scss";

const RNN2 = (props) => {
  return (
    <div>
      <ArticleHeader
        title="Recurrent Neural Network - Time series"
        backUrl="/"
      />
      <div className="article-content">
        <Typography>Recurrent Neural Network - Time series</Typography>
        <Typography className="mt-16">Windowing</Typography>
        <CodeBlock
          text={`
          HORIZON = 1
          WINDOW_SIZE = 7

          def get_labelled_windows(x, horizon=1):
          """
          Creates labels for windowed dataset.

          E.g. if horizon=1 (default)
          Input: [1, 2, 3, 4, 5, 6] -> Output: ([1, 2, 3, 4, 5], [6])
          """
          return x[:, :-horizon], x[:, -horizon:]

          test_window, test_label = get_labelled_windows(tf.expand_dims(tf.range(8)+1, axis=0), horizon=HORIZON)
          print(f"Window: {tf.squeeze(test_window).numpy()} -> Label: {tf.squeeze(test_label).numpy()}")


          def make_windows(x, window_size=7, horizon=1):
            window_step = np.expand_dims(np.arange(window_size+horizon), axis=0)
            window_indexes = window_step + np.expand_dims(np.arange(len(x)-(window_size+horizon-1)), axis=0).T # create 2D array of windows of size window_size
            windowed_array = x[window_indexes]
            windows, labels = get_labelled_windows(windowed_array, horizon=horizon)
            return windows, labels

          full_windows, full_labels = make_windows(prices, window_size=WINDOW_SIZE, horizon=HORIZON)
          len(full_windows), len(full_labels)

          def make_train_test_splits(windows, labels, test_split=0.2):
            split_size = int(len(windows) * (1-test_split))
            train_windows = windows[:split_size]
            train_labels = labels[:split_size]
            test_windows = windows[split_size:]
            test_labels = labels[split_size:]
            return train_windows, test_windows, train_labels, test_labels

          train_windows, test_windows, train_labels, test_labels = make_train_test_splits(full_windows, full_labels)
          len(train_windows), len(test_windows), len(train_labels), len(test_labels)

          import os

          def create_model_checkpoint(model_name, save_path="model_experiments"):
            return tf.keras.callbacks.ModelCheckpoint(filepath=os.path.join(save_path, model_name),
                                                      verbose=0,
                                                      save_best_only=True)
          import tensorflow as tf
          from tensorflow.keras import layers

          model_1 = tf.keras.Sequential([
            layers.Dense(128, activation="relu"),
            layers.Dense(HORIZON, activation="linear")
          ], name="model_1_dense")

          model_1.compile(loss="mae",
                          optimizer=tf.keras.optimizers.Adam(),
                          metrics=["mae"])

          model_1.fit(x=train_windows,
                      y=train_labels,
                      epochs=100,
                      verbose=1,
                      batch_size=128,
                      validation_data=(test_windows, test_labels),
                      callbacks=[create_model_checkpoint(model_name=model_1.name)])

          model_1.evaluate(test_windows, test_labels)

          def make_preds(model, input_data):
            forecast = model.predict(input_data)
            return tf.squeeze(forecast)

          model_1_preds = make_preds(model_1, test_windows)
          len(model_1_preds), model_1_preds[:10]


          `}
          language={"python"}
          showLineNumbers={false}
          theme={monoBlue}
        />

        <Typography>Windowing + LSTM</Typography>
        <CodeBlock
          text={`
          inputs = layers.Input(shape=(WINDOW_SIZE))
          x = layers.Lambda(lambda x: tf.expand_dims(x, axis=1))(inputs)
          # x = layers.LSTM(128, activation="relu", return_sequences=True)(x) # this layer will error if the inputs are not the right shape
          x = layers.LSTM(128, activation="relu")(x) # using the tanh loss function results in a massive error
          # x = layers.Dense(32, activation="relu")(x)
          output = layers.Dense(HORIZON)(x)
          model_5 = tf.keras.Model(inputs=inputs, outputs=output, name="model_5_lstm")

          model_5.compile(loss="mae",
                          optimizer=tf.keras.optimizers.Adam())

          model_5.fit(train_windows,
                      train_labels,
                      epochs=100,
                      verbose=0,
                      batch_size=128,
                      validation_data=(test_windows, test_labels),
                      callbacks=[create_model_checkpoint(model_name=model_5.name)])
          `}
          language={"python"}
          showLineNumbers={false}
          theme={monoBlue}
        />
        <Typography>
          Time Series prediction in an open system is very hard & unpredictable
          as there are a lot of uncontrolled variables, whereas in a closed
          environment where everything is controlled, Windowing + RNNs give good
          results
        </Typography>
      </div>
    </div>
  );
};

RNN2.propTypes = {};

export default RNN2;
