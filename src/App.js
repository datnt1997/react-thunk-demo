import React from 'react';
import { connect } from 'react-redux';

import { fetchData } from './actions';
import './styles.scss';

const App = (props) => {

  return (
    <div className='container'>
      <div className='text'>Redux Thunk Examples</div>
      <div className='button' onClick={() => props.fetchData()}>
        <div className='button-text'>
          {
            props.appData.isFetching ? <div>Loading</div> : <div>Load data</div>
          }
          {
            props.appData.data.length ? (
              props.appData.data.map((person, i) => {
                return <div key={i} >
                  <div>Name: {person.name}</div>
                  <div>Age: {person.age}</div>
                </div>
              })
            ) : null
          }
        </div>
      </div>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    appData: state.appData
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchData: () => dispatch(fetchData())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)