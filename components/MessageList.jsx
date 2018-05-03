import React from 'react';

export default class MessageList extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <h2>
                        {this.props.messages.length} Unread Messages
                        </h2>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>Sender</th>
                            <th>Subject</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.messages.map(function (m, i) {
                            return (
                                <tr key={i}>
                                    <td>{m.sender}</td>
                                    <td>
                                        <a href={"/#!/message/" + i}>
                                            {m.subject}
                                        </a>
                                    </td>
                                    <td>{m.date}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
};