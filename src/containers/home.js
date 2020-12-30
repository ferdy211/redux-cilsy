import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Home = ({ counter, tambahSatu, kurangSatu, tambahDariInput, kurangDariInput }) => {
  const [input, setinput] = useState('');
  return (
    <div>
      <div style={{ fontSize: 32 }}>COUNTER: {counter}</div>
      <button
        className="btn btn-primary"
        onClick={() => tambahSatu()}
      >
        ADD 1
      </button>
      <button
        className="btn btn-primary"
        onClick={() => kurangSatu()}
      >
        MIN 1
      </button>
      <div> 
        <input
          placeholder="Input data"
          value={input}
          type="number"
          onChange={(val) => setinput(val.target.value)}
        />
      </div>
      <button
        className="btn btn-primary"
        onClick={() => tambahDariInput(parseInt(input, 0))}
      >
        ADD berdasarkan input
      </button>
      <br/>
      <button
        className="btn btn-primary"
        onClick={() => kurangDariInput(parseInt(input, 0))}
      >
        MIN berdasarkan input
      </button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter,
  }
}

const mapDispatchtoProps = (dispatch) => {
  return {
    tambahSatu: () => dispatch({
      type: 'INC_COUNTER'
    }),
    kurangSatu: () => dispatch({
      type: 'DEC_COUNTER'
    }),
    tambahDariInput: (value) => dispatch({
      type: 'ADD_COUNTER',
      value,
    }),
    kurangDariInput: (value) => dispatch({
      type: 'MIN_COUNTER',
      value,
    })
  }
}

export default connect(mapStateToProps, mapDispatchtoProps)(Home);
