import React from "react";
// import PropTypes from 'prop-types';
import { Typography } from "@material-ui/core";
import { CodeBlock, monoBlue } from "react-code-blocks";

import { ArticleHeader } from "../common";

import "../../App.scss";

const RNN1 = (props) => {
  return (
    <div>
      <ArticleHeader title="Recurrent Neural Network - NLP" backUrl="/" />
      <div className="article-content">
        <Typography>Recurrent Neural Network - NLP</Typography>
        <Typography className="mt-16">Why not a Standard Network?</Typography>
        <Typography className="mt-16">
          - Inputs & Outputs can be of different lengths in different examples -
          Doesn't share features learned across different positions of text.
        </Typography>
        <CodeBlock
          text={`
          a<t> = y^<t> = g(wa[a<t-1>, x<t>] + ba)
          `}
          language={"python"}
          showLineNumbers={false}
          theme={monoBlue}
        />
        <Typography>Back propagation through time:</Typography>
        <CodeBlock
          text={`
          L<t>(y^<t>, y<t>) = -y<t> log(y^<t>) - (1 - y<t>)log(1 - y^<t>)
          L = Sum (t = 1 to Ty) L<t>(y^<t>, y<t>)
          `}
          language={"python"}
          showLineNumbers={false}
          theme={monoBlue}
        />
        <Typography>Types of RNNs:</Typography>
        <Typography> - Many to Many (Tx = Ty)</Typography>
        <Typography> - Many to One</Typography>
        <Typography> - One to Many</Typography>
        <Typography> - Many to Many (Tx != Ty)</Typography>
        <Typography>Vanishing & Exploding Gradients</Typography>
        <Typography>
          {" "}
          - It is difficult for RNN to remember over a large portion of text
        </Typography>
        <Typography>
          {" "}
          - Hard for error to back propagate over a large text
        </Typography>
        <Typography> - Not able to capture long range dependencies</Typography>
        <Typography>GRU</Typography>
        <CodeBlock
          text={`
          c<t> = a<t>
          c~<t> = tanh(Wc[Phi * c<t - 1>, X<t>] + bc)
          Phi(u) = sigmoid(Wu [c<t-1>, X<t>] + bu) #update
          Phi(r) = sigmoid(Wr [c<t-1>, X<t>] + br) # relevance
          c<t> = Phi(u) * c~<t> + (1 - Phi(u)) * c<t - 1>
          `}
          language={"python"}
          showLineNumbers={false}
          theme={monoBlue}
        />
        <Typography>LSTM</Typography>
        <CodeBlock
          text={`
          c~<t> = tanh(Wc[a<t-1>, X<t>] + bc)
          Phi(u) = sigmoid(Wn[a<t-1>, x<t>] + bc) #update
          Phi(f) = sigmoid(Wf[a<t-1>, x<t>] + bf) #forget
          Phi(o) = sigmoid(Wo[a<t-1>, x<t>] + bo) #output
          c<t> = Phi(u) * c~<t> + Phi(f) * c<t-1>
          a<t> = Phi(o) * c<t> or Phi(o) * tanh(c<t>)
          `}
          language={"python"}
          showLineNumbers={false}
          theme={monoBlue}
        />
        <Typography>Bi-directional RNN</Typography>
        <CodeBlock
          text={`
            y^<t> = g(Wy[a(forward)<t>, a(backward)<t>] + by)
          `}
          language={"python"}
          showLineNumbers={false}
          theme={monoBlue}
        />
        <Typography>Deep RNN</Typography>
        <Typography>{`Multiple layers of any one of the architecture and each y<t> connected to a fully connected layer at the end`}</Typography>
        <Typography>Feature Representation: Word Embedding</Typography>
        <Typography>t-SNE, Word2Vec, Negative Sampling, Glove</Typography>
        <Typography>Text Vectorization</Typography>
        <CodeBlock
          text={`
          import tensorflow as tf
          from tensorflow.keras.layers import TextVectorization

          text_vectorizer = TextVectorization(max_tokens=None,
                                    standardize="lower_and_strip_punctuation",
                                    split="whitespace",
                                    ngrams=None,
                                    output_mode="int",
                                    output_sequence_length=None)
                                    # pad_to_max_tokens=True)
          `}
          language={"python"}
          showLineNumbers={false}
          theme={monoBlue}
        />
        <CodeBlock
          text={`
          from tensorflow.keras import layers
          model_2_embedding = layers.Embedding(input_dim=max_vocab_length,
                                               output_dim=128,
                                               embeddings_initializer="uniform",
                                               input_length=max_length,
                                               name="embedding_2")

          inputs = layers.Input(shape=(1,), dtype="string")
          x = text_vectorizer(inputs)
          x = model_2_embedding(x)
          # x = layers.LSTM(64, return_sequences=True)(x) # return vector for each word in the Tweet (you can stack RNN cells as long as return_sequences=True)
          x = layers.LSTM(64)(x)
          # x = layers.Dense(64, activation="relu")(x) # optional dense layer on top of output of LSTM cell
          outputs = layers.Dense(1, activation="sigmoid")(x)
          model_2 = tf.keras.Model(inputs, outputs, name="model_2_LSTM")


          model_2.compile(loss="binary_crossentropy",
                optimizer=tf.keras.optimizers.Adam(),
                metrics=["accuracy"])

          model_2.summary()

          model_2_history = model_2.fit(train_sentences,
            train_labels,
            epochs=5,
            validation_data=(val_sentences, val_labels),
            callbacks=[create_tensorboard_callback(SAVE_DIR,
                                                   "LSTM")])
          `}
          language={"python"}
          showLineNumbers={false}
          theme={monoBlue}
        />
        <Typography>GRU</Typography>
        <CodeBlock
          text={`
          from tensorflow.keras import layers
          model_3_embedding = layers.Embedding(input_dim=max_vocab_length,
                                               output_dim=128,
                                               embeddings_initializer="uniform",
                                               input_length=max_length,
                                               name="embedding_3")

          # Build an RNN using the GRU cell
          inputs = layers.Input(shape=(1,), dtype="string")
          x = text_vectorizer(inputs)
          x = model_3_embedding(x)
          # x = layers.GRU(64, return_sequences=True) # stacking recurrent cells requires return_sequences=True
          x = layers.GRU(64)(x)
          # x = layers.Dense(64, activation="relu")(x) # optional dense layer after GRU cell
          outputs = layers.Dense(1, activation="sigmoid")(x)
          model_3 = tf.keras.Model(inputs, outputs, name="model_3_GRU")
          `}
          language={"python"}
          showLineNumbers={false}
          theme={monoBlue}
        />
        <Typography>Bi-directional RNN</Typography>
        <CodeBlock
          text={`
          from tensorflow.keras import layers
          model_4_embedding = layers.Embedding(input_dim=max_vocab_length,
                                               output_dim=128,
                                               embeddings_initializer="uniform",
                                               input_length=max_length,
                                               name="embedding_4")

          # Build a Bidirectional RNN in TensorFlow
          inputs = layers.Input(shape=(1,), dtype="string")
          x = text_vectorizer(inputs)
          x = model_4_embedding(x)
          # x = layers.Bidirectional(layers.LSTM(64, return_sequences=True))(x) # stacking RNN layers requires return_sequences=True
          x = layers.Bidirectional(layers.LSTM(64))(x) # bidirectional goes both ways so has double the parameters of a regular LSTM layer
          outputs = layers.Dense(1, activation="sigmoid")(x)
          model_4 = tf.keras.Model(inputs, outputs, name="model_4_Bidirectional")
          `}
          language={"python"}
          showLineNumbers={false}
          theme={monoBlue}
        />
        <Typography>Conv 1D</Typography>
        <CodeBlock
          text={`
          from tensorflow.keras import layers
          model_5_embedding = layers.Embedding(input_dim=max_vocab_length,
                                               output_dim=128,
                                               embeddings_initializer="uniform",
                                               input_length=max_length,
                                               name="embedding_5")

          # Create 1-dimensional convolutional layer to model sequences
          from tensorflow.keras import layers
          inputs = layers.Input(shape=(1,), dtype="string")
          x = text_vectorizer(inputs)
          x = model_5_embedding(x)
          x = layers.Conv1D(filters=32, kernel_size=5, activation="relu")(x)
          x = layers.GlobalMaxPool1D()(x)
          # x = layers.Dense(64, activation="relu")(x) # optional dense layer
          outputs = layers.Dense(1, activation="sigmoid")(x)
          model_5 = tf.keras.Model(inputs, outputs, name="model_5_Conv1D")

          # Compile Conv1D model
          model_5.compile(loss="binary_crossentropy",
                          optimizer=tf.keras.optimizers.Adam(),
                          metrics=["accuracy"])

          # Get a summary of our 1D convolution model
          model_5.summary()
          `}
          language={"python"}
          showLineNumbers={false}
          theme={monoBlue}
        />
      </div>
    </div>
  );
};

RNN1.propTypes = {};

export default RNN1;
