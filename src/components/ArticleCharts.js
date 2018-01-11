import React,{Component} from 'react';
import PropsType from 'prop-types';

class ArticleCharts extends Component{
    static propTypes={

    };

    componentDidMount(){
        //d3 works with this.refs.container

    }

    componentWillReceiverProps(nextProps){
        //update chart for new articles
    }

    render (){
        return <div ref='chart'></div>
    }

    componentWillUnmount(){
        //do some cleanup
    }

}

export default ArticleCharts;