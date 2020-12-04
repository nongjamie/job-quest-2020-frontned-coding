import React, { Component } from 'react';
import axios from 'axios';

import Users from './Users/Users';
import Quotes from './Quotes/Quotes';
import History from './History/History';


class Home extends Component {

  state = {
    userInfo: {
      firstname: '',
      lastname: '',
      numberjokes: 0
    },
    quotes: [],
    history: []
  }

  changeUserInfo = (attribute, value) => {
    let newUserInfo = {...this.state.userInfo};
    newUserInfo[attribute] = value;
    this.setState({ userInfo: newUserInfo });
  }

  resetUserInfo = () => {
    let newUserInfo = {
      firstname: '',
      lastname: '',
      numberjokes: 0
    }
    this.setState({ userInfo: newUserInfo });
  }

  fetchQuotes = async () => {
    const { userInfo } = this.state;
    try {
      let endpoint = `http://api.icndb.com/jokes/random/${userInfo.numberjokes}?firstName=${userInfo.firstname}&lastName=${userInfo.lastname}`;
      let result = await axios.get(endpoint);
      this.setState({ quotes: result.data.value });
      this.updateHistory(result.data.value);
    } catch(err) {
      console.log('fetchQuotes error!');
      console.log(err.response);
    }
  };

  updateHistory = (newJokes) => {
    let today = new Date().toISOString();
    let todayFormat = today.split('T')[0] + ' ' + today.split('T')[1].split('.')[0];
    let oldHistory = this.state.history;
    let updatedHistory = [...oldHistory];
    updatedHistory.push({
      userInfo: this.state.userInfo,
      jokes: newJokes,
      createdAt: todayFormat
    });
    this.setState({ history: updatedHistory });
  }

  render() {
    let { userInfo, quotes, history } = this.state;

    return (
      <div className='flex flex-wrap'>
        <div className='w-full md:w-1/2 flex flex-wrap flex-column'>
          <div className='w-full p-4'>
            <Users
              userInfo={userInfo}
              changeUserInfo={this.changeUserInfo}
              resetUserInfo={this.resetUserInfo}
              fetchQuotes={this.fetchQuotes}
            ></Users>
          </div>
          <div className='w-full p-4'>
            <History
              history={history}
            ></History>
          </div>
        </div>
        <div className='w-full md:w-1/2 p-4'>
          <Quotes
            quotes={quotes}
          ></Quotes>
        </div>
      </div>
    );
  }

}

export default Home;