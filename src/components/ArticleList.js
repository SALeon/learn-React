import React, {Component} from 'react'
import Article from './Article'

// export default function ArticleList({articles}) {
//     const articleElements=articles.map((article)=> <li key={article.id}><Article article={article}/></li>);
//
//     return(
//         <ul>
//             {articleElements}
//         </ul>
//     )
// }

class ArticleList extends Component {

    state = {
        openArticleId: null
    };

    render() {
        const {articles} = this.props;
        const articleElements = articles.map((article) =>
            <li key={article.id}>
                <Article
                    article={article}
                    isOpen={article.id===this.state.openArticleId}
                    toggleOpen={this.toggleOpenArticle.bind(this,article.id)}
                />
            </li>);

        return (
            <ul>
                {articleElements}
            </ul>
        )
    }

    toggleOpenArticle(openArticleId){
        this.setState({
            openArticleId
        });
    }
}

export default ArticleList;