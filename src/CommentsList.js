import React, {Component} from 'react';
import Comment from './Comment';

export default class CommentsList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false
        }

    }

    render() {

        const text = this.state.isOpen ? 'hide comment' : 'show comment';

        return (
            <div>
                <button onClick={this.toggleOpen}>{text}</button>
                {this.getBody()}
            </div>
        );
    }

    getBody() {
        if (!this.state.isOpen) return null;

        const {comments} = this.props;
        if (!comments || !comments.length) return <p>No comment yet</p>;

        return (
            <ul>
                {comments.map((comment) => <li key={comment.id}><Comment comment={comment}/></li>)}
            </ul>
        );
    }

    toggleOpen = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }


}