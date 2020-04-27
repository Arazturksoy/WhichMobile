import React, { Component } from 'react'
import {Table} from 'react-bootstrap'

export default class GetTweets extends Component {
    state={data:[]}

    async componentDidMount() {
        const url = "http://127.0.0.1:8000/api/filter/list";
        const response = await fetch(url);
        const body = await response.json();
        this.setState({ data: body[body.length - 1].tweets });
      }
//searchUrl: jsonData[jsonData.length - 1].slug
    showTweets() {
        return (
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>#</th>
                <th>User Name</th>
                <th>Tweet</th>
              </tr>
            </thead>
            <tbody>
              {this.state.data.map(object => (
                <tr key={object.tweet.id}>
                  <td>{object.id}</td>
                  <td>{object.tweet.username}</td>
                  <td>{object.tweet.tweet}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        );
      }
    
      render() {
        return <div>{this.showTweets()}</div>;
      }
    }

