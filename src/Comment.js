import React from 'react';


export default function Comment({comment}){

    return(
        <div>
            <h5>{comment.user}</h5>
            <div>{comment.text}</div>
        </div>
    );
}


//
// export default class Comment extends Component {
//     constructor(props) {
//         super(props);
//
//         this.state =
//             {
//                 isOpen: false
//             }
//
//     }
//
//     render() {
//         const {comment}=this.props;
//         return (
//             <div>
//                 {/*<button onClick={this.toggleOpen}>*/}
//                     {/*{isOpen?'close comment':'show comment'}*/}
//                 {/*</button>*/}
//                 <h5>{commetn.user}</h5>
//                 <div>{commnet.text}</div>
//             </div>
//         )
//     }
//
//
//     getElement(viewData){
//         if(!this.state.isOpen)return null;
//
//         return(
//             <div>{viewData}</div>
//         )
//     }
//
//     // toggleOpen=()=>{
//     //   this.setState({
//     //       isOpen: !this.state.isOpen
//     //   })
//     // }
//
// }