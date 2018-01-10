import React, {Component} from 'react';

export default class Comment extends Component {
    constructor(props) {
        super(props);

        this.state =
            {
                isOpen: false
            }

    }

    render() {
        const {isOpen}=this.state;
        const {comment}=this.props;
        return (
            <div>
                <button onClick={this.toggleOpen}>
                    {isOpen?'close comment':'show comment'}
                </button>
                {this.getElement(comment.user)};
                {this.getElement(comment.text)};
            </div>
        )
    }

    // getBody() {
    //     if(!this.state.isOpen)return null;
    //
    //     const {comment}=this.props;
    //     return(
    //         <div>{comment.text}</div>
    //     );
    // }
    //
    // getAuthor() {
    //     if(!this.state.isOpen)return null;
    //
    //     const {comment.}
    //
    // }

    getElement(viewData){
        if(!this.state.isOpen)return null;

        return(
            <div>{viewData}</div>
        );
    }

    toggleOpen=()=>{
      this.setState({
          isOpen: !this.state.isOpen
      });
    }

}