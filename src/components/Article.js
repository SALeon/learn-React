import React, {Component} from 'react';
import CommentsList from './CommentsList';
import {findDOMNode} from 'react-dom'
import PropTypes from 'prop-types';
import toggleOpen from '../decorators/toggleOpens'

// export default function Article(props) {
//     const {article}=props;
//     return (
//         <div>
//             <h3>{article.title}</h3>
//             <section>{article.text}</section>
//         </div>
//     )
// }

class Article extends Component {
    static  propTypes={
        article:PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            text: PropTypes.string
        })
    };

    // constructor(props) {
    //     super(props);
    //     // this.state = {isOpen: false};
    //     // this.toggleOpen = this.toggleOpen.bind(this);
    // }

    render() {
        const {article,isOpen, toggleOpen} = this.props;

        return (
            <div>
                <h3>{article.title}</h3>
                <button onClick={toggleOpen}>{
                    isOpen ? "close" : "open"
                }</button>
                {this.getBody()}
            </div>
        );
    }

    getBody() {
        const{article, isOpen}=this.props;
        if (!isOpen) return null;
        return ([
            <section>{article.text}</section>,
            <CommentsList comments={article.comments} ref={this.setCommentListRef}/>
        ])
    }

    setCommentListRef= (ref)=>{
        console.log ('--', findDOMNode(ref));
    }
}

export default Article;