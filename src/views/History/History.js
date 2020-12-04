import React, { Component } from 'react';
import {  
  Card, CardBody, Label, Input,
  CardTitle, CardSubtitle, Button 
} from 'reactstrap';

class History extends Component {

  render() {
    let historyBlocks = this.props.history.reverse().map(item => {
      return (
        <div className='border p-2 my-2 rounded-2xl' key={item.createdAt}>
          <p>Fullname: {item.userInfo.firstname} {item.userInfo.lastname}</p>
          <p>Number of jokes: {item.jokes.length}</p>
          <p>Time: {item.createdAt}</p>
        </div>
      );
    });

    return (
      <div>
        <Card>
          <CardBody>
            <CardTitle tag='h3'>ประวัติการดึงข้อมูล {this.props.history.length > 0 ? <span>({this.props.history.length})</span> : null}</CardTitle>
            {
              this.props.history.length > 0 ?
              <div style={{'maxHeight': '500px', 'overflowY': 'auto'}}>
                {historyBlocks}
              </div>:
              <div className='text-center'>
                <span className='text-sm my-2'>- ไม่มีประวัติมาก่อน -</span>
              </div>
            }
          </CardBody>
        </Card>
      </div>
    );
  }

}

export default History;