import React from "react";
// import PropTypes from 'prop-types';
import { Typography } from "@material-ui/core";
import { CodeBlock, monoBlue } from "react-code-blocks";

import { ArticleHeader } from "../common";

import "../../App.scss";

const DNN = (props) => {
  return (
    <div>
      <ArticleHeader title="Deep Neural Network" backUrl="/" />
      <div className="article-content">
        <Typography>
          Deep Neural Network Vectorized & Gradient Descent
        </Typography>
        <Typography className="mt-16">Z[l] = W[l] * A[l-1] + b[l]</Typography>
        <Typography className="mt-16">A[l] = g[l](Z[l])</Typography>
        <Typography className="mt-16">
          dZ[l] = A[l] - Y or ( W[l]T*dZ[l] * d(g[l])*(Z[l]))
        </Typography>
        <Typography>dW[l] = 1/m (dZ[l] * A[l - 1]T)</Typography>
        <Typography>db[l] = 1/m np.sum(dZ[l])</Typography>
        <Typography>w = w - alpha * (dw), b = b - alpha * (db)</Typography>

        <Typography className="mt-16">Regression example</Typography>
        <CodeBlock
          text={`
          insurance_model_2 = tf.keras.Sequential([
            tf.keras.layers.Dense(100),
            tf.keras.layers.Dense(10),
            tf.keras.layers.Dense(1)
          ])

          insurance_model_2.compile(loss=tf.keras.losses.mae,
                                    optimizer=tf.keras.optimizers.Adam(),
                                    metrics=['mae'])

          history = insurance_model_2.fit(X_train, y_train, epochs=100, verbose=0)

          insurance_model_2.evaluate(X_test, y_test)

          insurance_model_2.summary()
          `}
          language={"python"}
          showLineNumbers={false}
          theme={monoBlue}
        />
        <CodeBlock
          text={`
          # summarize history for accuracy
          plt.plot(history.history['accuracy'])
          plt.plot(history.history['val_accuracy'])
          plt.title('model accuracy')
          plt.ylabel('accuracy')
          plt.xlabel('epoch')
          plt.legend(['train', 'test'], loc='upper left')
          plt.show()
          `}
          language={"python"}
          showLineNumbers={false}
          theme={monoBlue}
        />
        <CodeBlock
          text={`
          # summarize history for loss
          plt.plot(history.history['loss'])
          plt.plot(history.history['val_loss'])
          plt.title('model loss')
          plt.ylabel('loss')
          plt.xlabel('epoch')
          plt.legend(['train', 'test'], loc='upper left')
          plt.show()
          `}
          language={"python"}
          showLineNumbers={false}
          theme={monoBlue}
        />
        <Typography className="mt-16">Classification example</Typography>
        <CodeBlock
          text={`
          model_1 = tf.keras.Sequential([
            tf.keras.layers.Dense(1)
          ])

          model_1.compile(loss=tf.keras.losses.BinaryCrossentropy(),
                          optimizer=tf.keras.optimizers.SGD(),
                          metrics=['accuracy'])

          model_1.fit(X, y, epochs=5)
          model_1.evaluate(X, y)
          `}
          language={"python"}
          showLineNumbers={false}
          theme={monoBlue}
        />
      </div>
    </div>
  );
};

DNN.propTypes = {};

export default DNN;
