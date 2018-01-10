import React from 'react';
import {render} from 'react-dom';
import ArticleList from './ArticleList';
import {articles} from './fixtures';


// const article = articles[0];

// function HelloWorld() {
//     return <h1>Hello Word</h1>;
// }

render(<ArticleList articles={articles} />, document.getElementById('container'));