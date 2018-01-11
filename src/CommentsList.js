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
        let {comments} = this.props;
        comments = this.isNoComment(comments);
        const {isOpen} = this.state;

        const commentElement = isOpen
            ? comments.map((comment) => <li key={comment.id}><Comment comment={comment}/></li>)
            : null;

        return (
            <ul>
                <button onClick={this.toggleOpen}>{isOpen ? "hide comments" : "show comments"}</button>
                {commentElement}
            </ul>
        )
    }

    isNoComment(commnets) {
        return commnets ? commnets
            : [{user: "", text: "no comments"}];
    }


    toggleOpen = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }


}