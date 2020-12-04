import React, { Component } from 'react';
import {  
  Card, CardBody, Label, Input,
  CardTitle, CardSubtitle, Button 
} from 'reactstrap';

class Users extends Component {

  inputHandler = (attribute, event) => {
    this.props.changeUserInfo(attribute, event.target.value);
  }

  confirmButtonClicked = () => {
    this.props.fetchQuotes();
  }

  clearButtonClicked = () => {
    this.props.resetUserInfo();
  }

  render() {
    let { userInfo } = this.props;

    // Set the disable status of confirm button
    let shouldConfirmButtonDisable = 
      (userInfo.firstname.length <= 0) || 
      (userInfo.lastname.length <= 0) || 
      (userInfo.numberjokes <= 0);

    return (
      <div className='w-full'>
        <Card className='h-full'>
          <CardBody>
            <CardTitle tag='h3'>ข้อมูลของผู้ใช้งาน</CardTitle>
            <CardSubtitle className='my-2 text-sm text-gray-500'>กรอกข้อมูลที่ผู้ใช้งานต้องการ</CardSubtitle>
              <div className='flex flex-wrap'>
                <div className='py-3 w-full lg:w-1/2'>
                  <Label for='firstname'>Firstname</Label>
                  <Input 
                    type='text' 
                    name='firstname' 
                    id='firstname'
                    value={userInfo.firstname}
                    onChange={(event) => this.inputHandler('firstname', event)} 
                    placeholder='Enter your firstname' 
                  />
                </div>
                <div className='py-3 lg:pl-3 w-full lg:w-1/2'>
                  <Label for='lastname'>Lastname</Label>
                  <Input 
                    type='text' 
                    name='lastname' 
                    id='lastname'
                    value={userInfo.lastname}
                    onChange={(event) => this.inputHandler('lastname', event)}  
                    placeholder='Enter your lastname' 
                  />
                </div>
                <div className='py-3 w-full'>
                  <Label for='jokenumber'>Number of result jokes</Label>
                  <Input 
                    type='number' 
                    name='jokenumber' 
                    id='jokenumber' 
                    value={userInfo.numberjokes}
                    onChange={(event) => this.inputHandler('numberjokes', event)} 
                    placeholder='Enter your number of jokes' 
                  />
                </div>
              </div>
              <div className='flex flex-wrap'>
                <Button 
                  color="primary"
                  className='w-full lg:w-3/12 mt-3'
                  disabled={shouldConfirmButtonDisable}
                  onClick={() => this.confirmButtonClicked()}
                >Confirm</Button>
                <Button 
                  outline 
                  color="danger"
                  className='w-full lg:w-3/12 mt-3 lg:ml-4'
                  onClick={() => this.clearButtonClicked()}
                >Clear</Button>
              </div>
          </CardBody>
        </Card>
      </div>
    );
  }

}

export default Users;