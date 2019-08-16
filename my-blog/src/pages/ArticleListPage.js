//import React from 'react';
import React, { Component }  from 'react';
import articleContent from './ArticleContent';
//------once we moved the data to ArticleList now we impor ArticleList here---
import ArticleList from '../Components/ArticleList';
//import {Link} from 'react-router-dom';
    //----<React.Fragment> short version <> used for
    //---- multiple html tags used inside react
// const ArticleListPage = ()=>(
//     <>
//         <h2>Articles</h2>
//         {
//             articleContent.map((article, key)=>(
//                 <Link className="article-list-item" key={key} to={`/article/${article.name}`}>
//                     <h3>{article.title}</h3>
//                     <p>{article.content[0].substring(0,150)}...</p>
//                 </Link>
//             ))
//         }
//     </>
// );
//----------because we want to move reusable component in seperate folder and file so we did move it
//------to ArticleList.js------

const ArticleListPage = ()=>(
    <>
        <h2>Articles</h2>
        <ArticleList articles={articleContent}></ArticleList>
    </>
);

export default ArticleListPage