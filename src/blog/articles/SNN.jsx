// import PropTypes from 'prop-types';
import { Typography } from "@material-ui/core";
import React from "react";
import { CodeBlock, monoBlue } from "react-code-blocks";
import "../../App.scss";
import { ArticleHeader } from "../common";

const SNN = (props) => {
  return (
    <div>
      <ArticleHeader title="Shallow Neural Network" backUrl="/" />
      <div className="article-content">
        <Typography>Shallow Neural Network</Typography>
        <Typography>Logistic Regression for Binary Classification</Typography>

        <Typography>
          let us say there are m examples for training. (x, y ) where x belongs
          to R, y belongs to {(0, 1)}
        </Typography>
        <Typography>
          Logistic Regression is given x, y^ = P(y = 1 | x)
        </Typography>
        <Typography>
          Parameters: w belongs to R, b belongs to R Output: y^ = wT*x + b (for
          Regression)
        </Typography>
        <Typography>
          Output: y^ = sigmoid(wT*x + b) (for Classification)
        </Typography>
        <Typography>Sigmoid(z) = 1 / 1 + e**(-z)</Typography>
        <Typography>Loss (error) function</Typography>
        <Typography>
          For simple functions: L(y^, y) = 1 / z * (y^ - y)**2
        </Typography>
        <Typography>
          For logistic regression it becomes non convex, therefore it makes it
          hard for gradient descent as there are multiple local maxima
        </Typography>
        <Typography>
          L(y^, y) = -(y log(y^) + (1-y)log(1-y^)) (This will make it convex)
        </Typography>
        <Typography>Cost Function</Typography>
        <Typography>J(w,b) = 1/m Sum(i = 1 to m) (L(y^(i), y(i)))</Typography>
        <Typography>
          J(w,b) = -1/m Sum(i = 1 to m) (-(y log(y^) + (1-y)log(1-y^)))
        </Typography>
        <Typography>Gradient Descent</Typography>
        <Typography>w = w - alpha * (dJ(w,b)/dw)</Typography>
        <Typography>b = b - alpha * (dJ(w,b)/db)</Typography>
        <Typography>Logistic Regression Gradient Descent</Typography>
        <Typography>z = wT*x +b</Typography>
        <Typography>y^ = a = sigmoid(z)</Typography>
        <Typography>L(a,y) = -(y log(y^) + (1-y)log(1-y^))</Typography>
        <Typography>L(a,y) = -(y log(y^) + (1-y)log(1-y^))</Typography>
        <Typography>da = -y/(a) + (1-y)/(1-a)</Typography>
        <Typography>dz = a - y</Typography>
        <Typography>
          Logistic Regression for m examples (Pseudo Code)
        </Typography>
        <Typography>J = 0, dw1 = 0, dw2 = 0, db = 0</Typography>
        <Typography>for i = 1 to m:</Typography>
        <Typography> z(i) = wTx(i) + b</Typography>
        <Typography> a(i) = sigmoid(z(i))</Typography>
        <Typography>
          {" "}
          J += -[y(i)log(a(i)) + ((1 - y(i))(log(1 - a(i))))]{" "}
        </Typography>
        <Typography> for n features: </Typography>
        <Typography> dz(i) = a(i) - y(i) </Typography>
        <Typography> dw1 += x1(i) * dz(i) </Typography>
        <Typography> dw2 += x2(i) * dz(i) </Typography>
        <Typography> db += dz(i) </Typography>
        <Typography>J /= m, dw1 /= m, dw2 /= m, db /= m</Typography>
        <Typography>w1 = w1 - alpha(dw1)</Typography>
        <Typography>w2 = w2 - alpha(dw2)</Typography>
        <Typography>b = b - alpha(db)</Typography>
        <Typography>Complexity = O(m * n)</Typography>
        <Typography>We can make this O(1) by vectorizing</Typography>
        <Typography>Vectorizing : </Typography>
        <Typography>
          [z(1), z(2), ... , z(m)] = [w1, w2,..., wn](1 * n)[X1, X2, ... Xm](n *
          m) + b
        </Typography>
        <Typography>A = [a1, a2, ..., am]</Typography>
        <Typography>Y = [y1, y2, ..., ym]</Typography>
        <Typography>dz = A - Y</Typography>
        <Typography>db = 1 / m (np.sum(dz))</Typography>
        <Typography>dw = 1 / m (X * dzT)</Typography>
        <Typography>w = w - alpha(dw)</Typography>
        <Typography>b = b - alpha(db)</Typography>
        <Typography variant="h5">Shallow Neural Networks</Typography>
        <Typography>
          In linear regression z & a are calculated only once.
        </Typography>
        <Typography>
          Whereas in a neural network they are calculated multiple times(i.e
          they are calculated on each layer) & finally we calculate loss at end.
        </Typography>
        <Typography>Activation functions:</Typography>
        <Typography>
          Sigmoid, Tanh, ReLu, Leaky ReLu (Having Non linearity in activation
          functions helps it solve complex problems)
        </Typography>
        <Typography>Gradient Descent & Back Prop</Typography>
        <Typography>Z[1] = W[1]X + b[1] (X = A[0])</Typography>
        <Typography>A[1] = g[1](Z[1])</Typography>
        <Typography>Z[2] = W[2]X + b[2]</Typography>
        <Typography>A[2] = g[2](Z[2])</Typography>
        <Typography>Backprop:</Typography>
        <Typography>dZ[2] = A[2] - Y</Typography>
        <Typography>dW[2] = 1/m (dZ[2] * A[1]T)</Typography>
        <Typography>db[2] = 1/m np.sum(dZ[2])</Typography>
        <Typography>dZ[1] = W[2]T*dZ[2] * d(g[1])*(Z[1])</Typography>
        <Typography>dW[1] = 1 / m * (dz[1]*XT)</Typography>
        <Typography>db[1] = 1 / m * np.sum(dz[1])</Typography>
        <Typography>
          Initializing w & b to 0 doesn't work as it'll make it symmetric
        </Typography>
        <Typography>Parameters V/S Hyper parameters</Typography>
        <Typography>
          Parameters : w[1], b[1], w[2], b[2] - Model will learn
        </Typography>
        <Typography>
          Hyper Parameters : Learning Rate(alpha), # iterations, # hidden
          layers, # hidden units per layer, Choice of activation functions
        </Typography>
        <Typography>
          Hyper parameters determine the final values of w & b
        </Typography>
        <Typography>
          Other Hyper parameters : Momentum, Minibatch Size, Regularizations
        </Typography>
        <CodeBlock
          text={`
          model = tf.keras.Sequential([
            tf.keras.layers.Dense(1)
          ])

          model.compile(loss=tf.keras.losses.mae,
                        optimizer=tf.keras.optimizers.SGD(),
                        metrics=["mae"])

          model.fit(tf.expand_dims(X, axis=-1), y, epochs=5)

          model.predict([17.0])
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
