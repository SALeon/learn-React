import React, {Component} from 'react';
import Comment from './Comment';
import toggleOpen from '../decorators/toggleOpens'

class CommentsList extends Component {
    // constructor(props) {
    //     super(props);
    //
    //     this.state = {
    //         isOpen: false
    //     }
    // }

    static defaultProps = {
        comments: []
    };

    render() {
        const {isOpen, toggleOpen}=this.props;
        const text = isOpen ? 'hide comment' : 'show comment';

        return (
            <div>
                <button onClick={toggleOpen}>{text}</button>
                {this.getBody()}
            </div>
        );
    }

    getBody() {
        const{isOpen,comments}=this.props;
        if (!isOpen) return null;

        if (!comments || !comments.length) return <p>No comment yet</p>;

        return (
            <ul>
                {comments.map((comment) => <li key={comment.id}><Comment comment={comment}/></li>)}
            </ul>
        );
    }
}

export default toggleOpen(CommentsList);