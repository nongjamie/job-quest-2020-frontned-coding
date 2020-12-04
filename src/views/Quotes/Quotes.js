import React, { Component } from 'react';
import {  
  Card, CardBody, Label, Input,
  CardTitle, CardSubtitle, Button 
} from 'reactstrap';

class Quotes extends Component {

  render() {
    let quotesBlock = this.props.quotes.map(quote => {
      return (
        <div key={quote.id} className='border-2 border-blue-600 py-1 px-3 my-2 rounded-2xl'>
           <p><b>({quote.id})</b> {quote.joke}</p> 
        </div>
      );
    });

    return (
      <div className='w-full'>
        <Card>
          <CardBody>
          <CardTitle tag='h3'>Jokes ที่ได้รับมา</CardTitle>
            {
              this.props.quotes.length > 0 ?
              <div style={{'maxHeight': '1075px', 'overflowY': 'auto'}}>
                {quotesBlock}
              </div>:
              <div className='text-center'>
                <span className='text-sm my-2'>- ไม่มีพบ Jokes ในระบบ -</span>
              </div>
            }
          </CardBody>
        </Card>
      </div>
    );
  }

}

export default Quotes;